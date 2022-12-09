export class TendenciasException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TendenciasException';
    }
}