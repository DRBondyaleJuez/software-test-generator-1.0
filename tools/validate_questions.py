#!/usr/bin/env python3
"""Validate data/questions.js against the schema in AGENTS.md section 3 (stdlib only)."""
import json
import re
import sys
from collections import Counter
from pathlib import Path

TYPES = {"mc", "ms", "tf", "fib", "fe"}
DIFFS = {"easy", "medium", "hard", "ultra"}
ID_RE = re.compile(r"^ch([1-6])-(mc|ms|tf|fib|fe)-(\d{3})$")


def load(path):
    text = Path(path).read_text(encoding="utf-8")
    lines = text.split("\n")
    if lines and lines[0].startswith("//"):
        lines = lines[1:]
    body = "\n".join(lines).strip()
    m = re.match(r"^const\s+QUESTIONS\s*=\s*", body)
    if not m:
        raise ValueError("file must define 'const QUESTIONS = [...]'")
    body = body[m.end():].rstrip()
    if body.endswith(";"):
        body = body[:-1]
    return json.loads(body)


def nonempty(s):
    return isinstance(s, str) and s.strip() != ""


def bilingual(v):
    return isinstance(v, dict) and nonempty(v.get("de")) and nonempty(v.get("en"))


def check(q, errs):
    qid = q.get("id", "<no id>")

    def err(msg):
        errs.append(f"{qid}: {msg}")

    m = ID_RE.match(qid) if isinstance(qid, str) else None
    if not m:
        err("invalid id format (expected ch<1-6>-<type>-<nnn>)")
    ch = q.get("chapter")
    if not isinstance(ch, int) or isinstance(ch, bool) or not 1 <= ch <= 6:
        err("chapter must be an int 1..6")
    if m:
        if isinstance(ch, int) and int(m.group(1)) != ch:
            err("id chapter does not match chapter field")
        if m.group(2) != q.get("type"):
            err("id type abbreviation does not match type field")
    typ = q.get("type")
    if typ not in TYPES:
        err(f"invalid type {typ!r}")
    diff = q.get("difficulty")
    if diff not in DIFFS:
        err(f"invalid difficulty {diff!r}")
    if not nonempty(q.get("section")):
        err("section missing")
    src = q.get("source")
    if not isinstance(src, dict) or not nonempty(src.get("document")) or not nonempty(src.get("section")):
        err("source.document and source.section must be non-empty")
    for f in ("question", "explanation", "tip"):
        if not bilingual(q.get(f)):
            err(f"{f} must have non-empty de and en")
    clar = q.get("clarification")
    if diff == "ultra":
        if clar is not None:
            err("clarification must be null for ultra")
    elif clar is not None and not bilingual(clar):
        err("clarification must be null or have non-empty de and en")
    if "clarification" not in q:
        err("clarification key missing (use null)")
    code = q.get("code")
    if code is not None and not nonempty(code):
        err("code must be null or a non-empty string")

    options = q.get("options")
    answer = q.get("answer")
    if typ in ("mc", "ms", "fe"):
        if not isinstance(options, list) or not 3 <= len(options) <= 6:
            err("options must be a list of 3-6 entries")
            options = []
        ids = []
        for o in options:
            if not isinstance(o, dict) or not nonempty(o.get("id")) or not bilingual(o.get("text")):
                err(f"option invalid or not bilingual: {o!r}")
            else:
                ids.append(o["id"])
        if len(set(ids)) != len(ids):
            err("duplicate option ids")
        if typ in ("mc", "fe"):
            if answer not in ids:
                err(f"answer {answer!r} is not an existing option id")
        else:
            if not isinstance(answer, list) or not answer:
                err("ms answer must be a non-empty list")
            else:
                if any(a not in ids for a in answer):
                    err("ms answer contains unknown option id")
                if len(set(answer)) != len(answer):
                    err("ms answer has duplicates")
        if typ == "fe" and not nonempty(code):
            err("fe requires code")
    else:
        if options:
            err("options not allowed for tf/fib")
    if typ == "tf" and not isinstance(answer, bool):
        err("tf answer must be boolean")
    if typ == "fib":
        blanks = q.get("blanks")
        if not isinstance(blanks, list) or not blanks:
            err("fib requires non-empty blanks list")
            blanks = []
        for b in blanks:
            acc = b.get("accepted") if isinstance(b, dict) else None
            if not isinstance(acc, list) or not acc or not all(nonempty(a) for a in acc):
                err("each blank needs a non-empty accepted list of non-empty strings")
            if not isinstance(b, dict) or not isinstance(b.get("caseSensitive"), bool):
                err("each blank needs boolean caseSensitive")
        qde = q.get("question", {}).get("de", "") if isinstance(q.get("question"), dict) else ""
        n = ((code or "") + "\n" + qde).count("____")
        if n != len(blanks):
            err(f"found {n} '____' in code+question.de but {len(blanks)} blanks")


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else str(Path(__file__).resolve().parent.parent / "data" / "questions.js")
    try:
        qs = load(path)
    except Exception as e:  # noqa: BLE001
        print(f"ERROR: cannot parse {path}: {e}")
        return 1
    if not isinstance(qs, list):
        print("ERROR: QUESTIONS must be an array")
        return 1
    errs = []
    seen = Counter(q.get("id") for q in qs if isinstance(q, dict))
    for i, d in seen.items():
        if d > 1:
            errs.append(f"{i}: duplicate id ({d}x)")
    for q in qs:
        if not isinstance(q, dict):
            errs.append(f"non-object entry: {q!r}")
            continue
        check(q, errs)
    if errs:
        print(f"INVALID: {len(errs)} error(s)")
        for e in errs:
            print("  - " + e)
        return 1
    print(f"OK: {len(qs)} questions valid")
    for label, key in (("chapter", "chapter"), ("type", "type"), ("difficulty", "difficulty")):
        c = Counter(q[key] for q in qs)
        print(f"  by {label}: " + ", ".join(f"{k}={c[k]}" for k in sorted(c)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
