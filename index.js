//when number of people is 0
// let numberOfPeople = document.getElementById("numOfPeople").value;
// let peopleInputfield = document.getElementById("numOfPeople");''

// if(numberOfPeople === 0){
//     peopleInputfield.classList.add("error");
// }
// else if(numberOfPeople !== 0 && peopleInputfield.classList.contains("error")){
//     peopleInputfield.classList.remove("error");
// }

let bill = document.getElementById("bill");
let billValue = bill.value;

let tipBtn = document.getElementsByClassName("t-btn");
let tipCustom = document.getElementById('custom');
let tipValue = 0;

let numberOfPeople = document.getElementById("numOfPeople");
let peopleValue = numberOfPeople.value;
let peopleInputfield = document.getElementById("numOfPeople");
let errMsg = document.getElementById("err-msg");


let tipAmountValue;
let totalValue;

let resultAmount = document.getElementById("tip-amount");
let resultTotal = document.getElementById("total");

let reset = document.getElementById("reset-btn");

//Reset button 
reset.classList.add("disabled");

//Get Bill value

bill.addEventListener('input',(event)=>{
     billValue = Number(event.target.value);
});

//Set Clicked button and get value
function removebtnActive (){
    for(let i = 0; i<tipBtn.length; i++){
        if(tipBtn[i].classList.contains('active')){
            tipBtn[i].classList.remove('active');
        }
    }
}

for(let i = 0; i < tipBtn.length; i++){
    tipBtn[i].addEventListener('click', ()=>{
        removebtnActive();
        tipBtn[i].classList.add('active');
        tipValue = tipBtn[i].value;
    })
}

if(document.getElementsByClassName('active').length === 0){
    tipCustom.addEventListener('input',(event)=>{
        tipValue = Number(event.target.value);
    })
}


//Get person value and Calculate tip amount

numberOfPeople.addEventListener('input', (event)=>{
    peopleValue = event.target.value;
    if(peopleValue === "" && peopleInputfield.classList.contains("error") && errMsg.style.display =="inline"){
        peopleInputfield.classList.remove("error");
        errMsg.style.display ="none";
    }
    else if(peopleValue == 0){
        peopleInputfield.classList.add("error");
        errMsg.style.display = "inline";
    }
    else if(peopleValue != 0){
        peopleInputfield.classList.remove("error");
        errMsg.style.display ="none";
    }
    setTimeout(()=>{
        tipAmountValue = (billValue) * (tipValue/100) / peopleValue;
        totalValue = tipAmountValue + (Number(billValue)/Number(peopleValue));
        tipAmountValue = tipAmountValue.toFixed(2);
        totalValue = totalValue.toFixed(2);

        resultAmount.innerHTML = "$"+tipAmountValue;
        resultTotal.innerHTML = "$"+totalValue; 
        reset.classList.remove("disabled");
        
    },1000);
        
});

reset.onclick = () =>{
    window.location.reload();
}



  






    


