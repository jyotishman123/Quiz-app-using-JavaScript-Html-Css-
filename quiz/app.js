
// Question Container Of Quiz

const questionContainer = [
    {
        question:"What is the full form of HTML",
        answer:[
            "Hyper Text Mark Up Language",
            "Hyper Totion Mark Up Language",
            "Hyper Texture Mark Up Language",
            "Hype Text Mark Up Language"
        ],
        correct:"Hyper Text Mark Up Language"
    },



    {

           question:"What is the full form of Css",
           answer:[
               "Customozied Style Sheet",
               "CashCading Style Sheet",
               "Computer Style Sheet",
               "Centeral Style Sheet"
           ],

           correct:"CashCading Style Sheet"
     

    },

    {

         question:"What is the full form of JS",
         
         answer:[
             "Java Structure",
             "Java Symbol",
             "Java System",
             "Java Script"
         ],

         correct:"Java Script"

    },

    {
        question:"What is the Full Form Of SQL",
        answer:[
            "Structure Query Language",
            "Structure Qualcom Language",
            "Structure Question Language",
            "Structure Quamp Language",
        ],
           
            correct: "Structure Query Language"
    },

    {
        question:"What is the Full Form Of PSP",
        answer:[
            "Playing Strucutre Portable",
            "Playing Station Portable",
            "Playing Simulator Product",
            "Playing Systematic Portable"
        ],
        correct:"Playing Station Portable"
    }




]












// Question Container of quiz Ends Here








// All buttons 
const startBtn = document.getElementsByClassName("start")[0];
const exit = document.getElementsByClassName("exit")[0];
const continueBtn = document.getElementsByClassName("continue")[0];
const nextBtn = document.getElementsByClassName("quiz-nxtBtn")[0]
const submitBtn  = document.getElementsByClassName("quiz-sbt")[0];
const result =  document.getElementById("result-num");
const finalExit = document.getElementsByClassName("finish")[0];

  

// All Portion

const instructionArea =document.getElementsByClassName("instruction-part")[0];
const quizArea = document.getElementsByClassName("quiz-area")[0];
const resultArea = document.getElementsByClassName("result-area")[0];


startBtn.addEventListener("click",()=>{ 
    instructionArea.style.display="block" 
    startBtn.style.display="none"
     
})
exit.addEventListener("click",()=>{
    instructionArea.style.display="none" 
    startBtn.style.display="block"

})
continueBtn.addEventListener("click",()=>{
    instructionArea.style.display="none"
    quizArea.style.display="block"
     QuizContainer(0)
     OptionSelect(0)

})
submitBtn.addEventListener("click",()=>{
    quizArea.style.display="none";
    resultArea.style.display="block"
     
      
    
})


finalExit.addEventListener("click",()=>{
    resultArea.style.display="none"
    startBtn.style.display="block"
    location.reload();
     
})



let main = document.getElementsByClassName("main")[0]


function QuizContainer(index){
          
            main.innerHTML=`
            
            <div class="question">
            <h1 class="question-text">${questionContainer[index].question}</h1>
        </div>
        <hr>
        <div class="timer">
            <h3 class=" timer-time">15</h3>
        </div>
        <div class="options">
            <div class="option-text">${questionContainer[index].answer[0]}</div>
            <div class="option-text">${questionContainer[index].answer[1]}</div>
            <div class="option-text">${questionContainer[index].answer[2]}</div>
            <div class="option-text">${questionContainer[index].answer[3]}</div>



        </div>
        </div>  
        `}
            
         
let count  = 0
let c = 0
let r = document.getElementById("result-num")
 
        nextBtn.addEventListener("click",()=>{
             count++
             QuizContainer(count)
             if(count===questionContainer.length-1){
                 nextBtn.style.display="none";
                 submitBtn.style.display="Block"

             }
               
             OptionSelect(count)
        })



        function OptionSelect(e){
             
            let option  = document.querySelectorAll(".option-text");
             option.forEach((ele)=>{
                 ele.addEventListener("click",()=>{

                    
                    
                    



                   if(ele.textContent===questionContainer[e].correct){
                       ele.classList.add("correct")
                       r.innerHTML = ++c
                   }
                   else{
                       ele.classList.add("wrong")
                       r.innerHTML = 0;
                   }

                  
                  
                  

                  option.forEach((ele)=>{
                     if(ele.textContent===questionContainer[e].correct){
                         ele.classList.add("correct")
                     }
                })


                option.forEach((ele)=>{
                    ele.classList.add("disable")
                })


                 })
             })
        }
