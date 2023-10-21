const Qselector = `div[role="heading"][aria-level="3"] > span:nth-child(1)`;
const Qels = document.querySelectorAll(Qselector);
const questions = [];
Qels.forEach((qel, idx) => {
  questions.push({
    number: idx + 1,
    question: qel.innerText.split(".")[1].trim(),
    probabilities: [20, 20, 20, 20, 20],
  });
});
copy(questions);
