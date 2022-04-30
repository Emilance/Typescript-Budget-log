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
const deleteButton = document.querySelector('li > .deletelog') as HTMLButtonElement;



form.addEventListener('submit',  (e: Event) =>{
    e.preventDefault()

    let inputValues :[string, string, number];
    inputValues = [fromto.value, details.value, amount.valueAsNumber]
    
    if(fromto.value && details.value && amount.valueAsNumber){

         let doc:Hasformatter
         if(type.value ==="Expenses"){
             doc = new Budget(...inputValues)
         } else{
             doc = new Revenue(...inputValues)
     
         }
         
       console.log(...inputValues)
           list.render(doc, type.value, 'end');
          
           
     }else{
         alert('fill a valid input')
     }

    
})


