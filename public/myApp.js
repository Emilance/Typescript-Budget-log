import { Budget } from './classes/Budget.js';
import { Revenue } from './classes/Revenue.js';
import { ListTemplate } from './classes/ListTemplate.js';
const ol = document.querySelector('ol');
const list = new ListTemplate(ol);
const form = document.querySelector(".myForm");
const type = document.querySelector("#type");
const fromto = document.querySelector("#fromto");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const deleteButton = document.querySelector('li > .deletelog');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValues;
    inputValues = [fromto.value, details.value, amount.valueAsNumber];
    if (fromto.value && details.value && amount.valueAsNumber) {
        let doc;
        if (type.value === "Expenses") {
            doc = new Budget(...inputValues);
        }
        else {
            doc = new Revenue(...inputValues);
        }
        console.log(...inputValues);
        list.render(doc, type.value, 'end');
    }
    else {
        alert('fill a valid input');
    }
});
