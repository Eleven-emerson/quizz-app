var questions=[
    {
        question:'which character is used to indicate an end tag?',
        option1:'*',
        option2:'/',
        option3:'<',
        option4:'/'
    },
    {
        question:'what does html stand"s for?',
        option1:'html',
        option2:'hyper text markup language',
        option3:'hyperlink market language',
        option4:'desire value'
    }
]

var question = document.getElementById('ques')
var opt1 =document.getElementById('opt1')
var opt2 =document.getElementById('opt2')
var opt3 =document.getElementById('opt3')
var opt4 =document.getElementById('opt4')
 var index=0
question.innerHTML=questions[index].question
opt1.innerHTML=questions[index].option1
opt2.innerHTML=questions[index].option2
opt3.innerHTML=questions[index].option3
opt4.innerHTML=questions[index].option4

function nextques(){
 var getoptions = document.getElementsByName('options')
//   for (var i=0; i<getoptions.length; i++){
//       if (getoptions[i].checked){
//         // var selectedvalue=getoptions[i].value 
//         // var selectedquesions= questions[index-1]['question']
//         // var selectedans=questions[index-1]['option']

//       }
//     getoptions[i].checked=false
//   }
btn.disabled=true


   if ( index > questions.length-1){
    alert('questions end !')
   }
else{
    
        question.innerHTML=questions[index].question
        opt1.innerHTML=questions[index].option1
        opt2.innerHTML=questions[index].option2
        opt3.innerHTML=questions[index].option3
        opt4.innerHTML=questions[index].option4
        index++
}
}


function checkbox(){
    var btn = document.getElementById('btn')
    btn.disabled=false
}






