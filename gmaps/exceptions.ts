export class MapsException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'MapsException';
    }
}