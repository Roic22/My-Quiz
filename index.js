const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const h2 = document.querySelector('.quest');
const quiz = document.querySelector('.quiz');
const retry = document.querySelector('.retry');
const review = document.querySelector('.review');




form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswer[index]) {
            score+= 25;
            
        }
        
    });
    scrollTo(0,0);
    result.classList.remove("d-none");
    form.classList.add("d-none");
    h2.classList.add("d-none");
    quiz.classList.add("d-none");
    review.classList.remove("d-none");
    
    
   

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent= `${score}%`;

        if(output === score){
            clearInterval(timer);
        }
        else {
        output++;
        }
    }, 10);

/*    if(score <= 25){
        alert("you need to learn more about Roic");
    }
    else if(score>25 && score<=50){
        alert("you need to work harder");
    }else if(score>50 && score<=75){
        alert("you know Roic but not that much");
    }else{
        alert("you know Roic so well");
    }
*/

});
review.addEventListener("click", ()=>{
    quiz.classList.remove("d-none");
    form.classList.remove("d-none");
    review.classList.add("d-none");
    
});

retry.addEventListener('click', () =>{
    form.reset();
    
    result.classList.add("d-none");
});






 
