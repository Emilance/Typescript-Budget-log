import { Hasformatter } from "../interfaces/Hasformatter";

export class  Revenue implements Hasformatter {
  
    constructor(
        readonly client:string,
        private  details:string,
        public   amount:number
     
    ){}

    format(){
        return `I earn  ${this.amount} from ${this.client}  for ${this.details}`
    }
}
