const $faqQuestions = document.querySelectorAll('.faq__question');
const $questionAnswers = document.querySelectorAll('.question__answer');
const $questionTitles = document.querySelectorAll('.question__title');
const $questionArrows = document.querySelectorAll('.question__arrow');

let activeQuestion = null;

$faqQuestions.forEach((question, index) => {
    question.addEventListener('click', (e) => {
        e.preventDefault();
        if(activeQuestion !== index && activeQuestion !== null) {
        $questionTitles[activeQuestion].classList.remove('active');
        $questionAnswers[activeQuestion].classList.remove('open');
        $questionArrows[activeQuestion].classList.remove('invert');
        }

        $questionTitles[index].classList.toggle('active');
        $questionAnswers[index].classList.toggle('open');
        $questionArrows[index].classList.toggle('invert');
        activeQuestion = index;
        
    })
})

