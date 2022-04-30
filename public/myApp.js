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
    let doc;
    if (type.value === "Expenses") {
        doc = new Budget(fromto.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Revenue(fromto.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
