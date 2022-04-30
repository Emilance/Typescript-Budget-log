import { Hasformatter } from "../interfaces/Hasformatter"

export class  Budget implements Hasformatter {
  
    constructor(
        readonly client:string,
        private  details:string,
        public   amount:number
     
    ){}

    format(){
        return `I bought   ${this.details}  from $${this.client} at ${this.amount}`
    }
}
