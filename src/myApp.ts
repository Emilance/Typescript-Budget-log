import { Budget } from './classes/Budget.js';
import { Revenue } from './classes/Revenue.js';
import  { Hasformatter } from './interfaces/Hasformatter.js'
import  { ListTemplate }  from './classes/ListTemplate.js'



const ol= document.querySelector('ol')!;
const list = new ListTemplate(ol);

const form = document.querySelector(".myForm") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const fromto = document.querySelector("#fromto") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;





form.addEventListener('submit',  (e: Event) =>{
    e.preventDefault()

    let inputValues :[string, string, number];
    inputValues = [fromto.value, details.value, amount.valueAsNumber]
    
    if(fromto.value && details.value && amount.valueAsNumber){

         let doc:Hasformatter
         if(type.value ==="Expenses"){
             doc = new Budget(...inputValues)
            displayBalance.innerText -=  parseInt(amount.value);
         } else{
             doc = new Revenue(...inputValues)
             displayBalance.innerText = parseInt( displayBalance.innerText )+  parseInt(amount.value)
         }
         
       console.log(...inputValues)
           list.render(doc, type.value, 'end');

          
           
     }else{
         alert('fill a valid input')
     }

    
})


// first pop up

//selector
const Balance = document.querySelector("#balance")as HTMLInputElement;
const  okButton= document.querySelector('.ok') as HTMLButtonElement;
const  skipButton= document.querySelector('.skip') as HTMLButtonElement;
const  displayText= document.querySelector('.currentBalance> h5') as HTMLHeadingElement;
export var  displayBalance=document.querySelector('.total>span ') as  any;
const   container  = document.querySelector('.container') as HTMLDivElement;
const   invisible = document.querySelector('.invisible') as HTMLDivElement;
const  popUpError = document.querySelector('.currentBalance > .error')  as HTMLParagraphElement;


//event listener
okButton.addEventListener('click', ():void=>{
     if(Balance.value ===""){
         setTimeout(()=>{

             popUpError.style.animation="changeColor  0.3s    5";
         },10)
        popUpError.innerText= "input your account balance in $";
        
    } else{
    displayBalance.innerText = Balance.value
  setTimeout(()=>{
      showApp()
  }, 300) 
}   popUpError.style.animation="";
});

skipButton.addEventListener('click',  showApp)


//function
function showApp(): void{
    container.style.display ='flex';
    invisible.style.display='none';
}

export function  reflectChanges(deletedFund: any){
    displayBalance.innerText +=  parseInt(deletedFund);
}

//typing word
var popUpText: string ='Enter your current account balance';


const typing =(): void=>{
    let i=0; 
         setInterval(()=>{
        if(i <  popUpText.length){
         
         displayText.innerHTML +=  popUpText.charAt(i)
           i+=1;
            ;
            }
           }, 100)
      
}

setTimeout(typing, 3000 )





//tobe removed befor publishing

const report= document.querySelector('.reportBug') as HTMLDivElement;
const reportButton= document.querySelector('.report') as HTMLElement;
const okSirButton  = document.querySelector('.oksir') as HTMLButtonElement;
const amSorrySirButton= document.querySelector('.amsorrysir') as HTMLButtonElement;
reportButton.addEventListener('click',  displayReport)
function  displayReport(){
    report.style.display="block"
    container.style.display="none"
}

amSorrySirButton.addEventListener('click', ()=>{
    report.style.display="none";
    container.style.display="flex";
    

})