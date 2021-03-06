import { Hasformatter } from "../interfaces/Hasformatter"
import { reflectChanges } from "../myApp";


export class  ListTemplate{
    constructor(private container:HTMLOListElement){}
        render(item: Hasformatter, heading: string,  pos:"start"|"end" ){
                  const li =document.createElement("li");
                  const h4 =document.createElement("h4");
                  h4.classList.add("title")
                  h4.innerText = heading;
                  li.append(h4)
                    
              

                  //log input
                  const p =document.createElement("p");
                  p.innerText=item.format();      
                  li.append(p);

                  //create deletebutton
                   const button =document.createElement('button');
                   button.classList.add('deletelog')
                   button.innerText = 'X';
                   li.append(button);

                 
                  if(pos ==="start"){
                      this.container.prepend(li);
                  }
                  else{
                      this.container.append(li);
                  }

                  
        if(button){
       
       button.addEventListener('click',(e: Event) =>{
           var listBudget: HTMLElement | null = (e.target as HTMLElement).parentElement   ;
      listBudget?.remove();
      
      
    })
}
        }
    }
