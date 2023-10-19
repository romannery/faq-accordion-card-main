const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

questions.forEach(question =>{
    question.addEventListener('click',questionSelection);
})

function questionSelection(evt){
    const targetClicked = evt.currentTarget;
    let selectedQuestion = targetClicked.firstElementChild.classList

    answers.forEach(answer =>{
        answer.style.display="none"
    })

    selectedQuestion.toggle('selected')
    targetClicked.children[1].classList.toggle('rotate')
    targetClicked.nextElementSibling.style.display="flex";
    
    if(selectedQuestion.value !== "selected"){
        targetClicked.nextElementSibling.style.display="none";
     }
    
    questions.forEach(question=>{
        if(question !== targetClicked){
            question.firstElementChild.classList.remove('selected')
            question.children[1].classList.remove('rotate')
        }
    })
}