export class Gift {
    public id: string;
    public name: string;
    public description: string;
    public url: string;
    public recipient: string;

    constructor(id: string, name: string, description: string, url: string, recipient: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.recipient = recipient;
    }
}