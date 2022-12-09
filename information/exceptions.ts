export class InforException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InforException';
    }
}