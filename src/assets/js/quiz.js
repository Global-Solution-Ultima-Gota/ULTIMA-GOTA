import scrollToTop from "./scrollToTop.js";

const quizForm = document.getElementById("quizForm");
const quizResult = document.querySelector(".quiz-result");
const questionsResult = document.querySelectorAll("[data-question]");
const scoreResult = document.getElementById("score");
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  quizResult.classList.add("show");
  const formData = new FormData(quizForm);
  const data = Object.fromEntries(formData);
  const questions = Object.keys(data);
  const answers = Object.values(data);
  const correctAnswers = ["b", "c", "c", "b", "b", "c", "b", "c", "a", "c"];
  let score = 0;
  questions.forEach((question, index) => {
    if (answers[index] === correctAnswers[index]) {
      score++;
      questionsResult[index].textContent = "Acertou!";
      questionsResult[index].style.color = "green";
    } else {
      questionsResult[index].textContent = "Errou!";
      questionsResult[index].style.color = "red";
    }
  });
  scoreResult.textContent = score;
  scrollToTop();
});
