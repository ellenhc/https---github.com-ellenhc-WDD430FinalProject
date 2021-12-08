export class Gift {
    public id: string;
    public name: string;
    public price: string;
    public retailer: string;
    public url: string;
    public imageUrl: string;
    public recipient: string;

    constructor(id: string, name: string, price: string, retailer: string, url: string, imageUrl: string, recipient: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.retailer = retailer;
        this.url = url;
        this.imageUrl = imageUrl;
        this.recipient = recipient;
    }
}