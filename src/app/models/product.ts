export class Product {
    id: number;
    name: string;
    description : string;
    price: number;
    imgUrl: string;
    constructor(id,name,description='',price=0,imgUrl='https://contestimg.wish.com/api/webimage/594388fe4f0e6e202df6896b-large.jpg?cache_buster=b5941d27422d30b196d6103707aa9c95'){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imgUrl=imgUrl;
    }
}
