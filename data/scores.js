// Baseline community scores per question id, e.g. { "ch3-mc-101": -2, "ch4-tf-203": 5 }.
// The quiz adds each visitor's own vote (+1 / -1, stored in their browser) to this baseline.
// Questions whose total score is below 0 are hidden unless "include low-rated questions" is on.
const QUESTION_SCORES = {};
