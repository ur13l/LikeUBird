export class Service {
    constructor (obj) {
        this.name = obj.name;
        this.image = obj.image;
        this.service = obj.service;
        this.price = obj.price;
    }
    public name : string;
    public image : string;
    public service : string;
    public price : string;
}