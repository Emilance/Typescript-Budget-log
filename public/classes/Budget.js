export class Budget {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `I bought   ${this.details}  from $${this.client} at ${this.amount}`;
    }
}
