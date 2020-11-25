const $faqQuestions = document.querySelectorAll('.faq__question');
const $questionAnswers = document.querySelectorAll('.question__answer');
const $questionTitles = document.querySelectorAll('.question__title');

$faqQuestions.forEach((elem, index) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        $questionTitles[index].classList.toggle('active');
        $questionAnswers[index].classList.toggle('open');
    })
})