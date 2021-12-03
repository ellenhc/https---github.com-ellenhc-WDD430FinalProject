export class Gift {
    public id: string;
    public name: string;
    public price: string;
    public retailer: string;
    public url: string;
    public recipient: string;
    public imageUrl: string;

    constructor(id: string, name: string, price: string, retailer: string, url: string, recipient: string, imageUrl: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.retailer = retailer;
        this.url = url;
        this.recipient = recipient;
        this.imageUrl = imageUrl;
    }
}