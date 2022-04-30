export class Revenue {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `I earn  ${this.amount} from ${this.client}  for ${this.details}`;
    }
}
