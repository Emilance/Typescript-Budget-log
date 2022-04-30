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
    let doc:Hasformatter
    if(type.value ==="Expenses"){
        doc = new Budget(fromto.value, details.value, amount.valueAsNumber)
    } else{
        doc = new Revenue(fromto.value, details.value, amount.valueAsNumber)

    }
    console.log(doc)

      list.render(doc, type.value, 'end');
     
      
    
})
