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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValues;
    inputValues = [fromto.value, details.value, amount.valueAsNumber];
    if (fromto.value && details.value && amount.valueAsNumber) {
        let doc;
        if (type.value === "Expenses") {
            doc = new Budget(...inputValues);
            displayBalance.innerText -= parseInt(amount.value);
        }
        else {
            doc = new Revenue(...inputValues);
            displayBalance.innerText = parseInt(displayBalance.innerText) + parseInt(amount.value);
        }
        console.log(...inputValues);
        list.render(doc, type.value, 'end');
    }
    else {
        alert('fill a valid input');
    }
});
// first pop up
//selector
const Balance = document.querySelector("#balance");
const okButton = document.querySelector('.ok');
const skipButton = document.querySelector('.skip');
const displayText = document.querySelector('.currentBalance> h5');
export var displayBalance = document.querySelector('.total>span ');
const container = document.querySelector('.container');
const invisible = document.querySelector('.invisible');
const popUpError = document.querySelector('.currentBalance > .error');
//event listener
okButton.addEventListener('click', () => {
    if (Balance.value === "") {
        setTimeout(() => {
            popUpError.style.animation = "changeColor  0.3s    5";
        }, 10);
        popUpError.innerText = "input your account balance in $";
    }
    else {
        displayBalance.innerText = Balance.value;
        setTimeout(() => {
            showApp();
        }, 300);
    }
    popUpError.style.animation = "";
});
skipButton.addEventListener('click', showApp);
//function
function showApp() {
    container.style.display = 'flex';
    invisible.style.display = 'none';
}
export function reflectChanges(deletedFund) {
    displayBalance.innerText += parseInt(deletedFund);
}
//typing word
var popUpText = 'Enter your current account balance';
const typing = () => {
    let i = 0;
    setInterval(() => {
        if (i < popUpText.length) {
            displayText.innerHTML += popUpText.charAt(i);
            i += 1;
            ;
        }
    }, 100);
};
setTimeout(typing, 3000);
//tobe removed befor publishing
const report = document.querySelector('.reportBug');
const reportButton = document.querySelector('.report');
const okSirButton = document.querySelector('.oksir');
const amSorrySirButton = document.querySelector('.amsorrysir');
reportButton.addEventListener('click', displayReport);
function displayReport() {
    report.style.display = "block";
    container.style.display = "none";
}
amSorrySirButton.addEventListener('click', () => {
    report.style.display = "none";
    container.style.display = "flex";
});
