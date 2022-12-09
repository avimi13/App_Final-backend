export class InventaryException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InventaryException';
    }
}