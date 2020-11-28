import { ingredient } from "./ingredient.class"

export class cake {
    id: string;
    name: string;
    description: string;
    ingredients: ingredient[];
    price: number;
    stock: number;
    state: string;

    constructor(id: string, name: string, description: string,
                ingredients: ingredient[], price: number,
                stock: number){
        this.id = id;
        this.name = this.setName(name);
        this.description = this.setDescription(description);
        this.ingredients = ingredients;
        this.price = this.setPrice(price);
        this.stock = stock;
        this.state = this.setState(this.stock);
    }
    sell(cakeQty: number){
        if(this.stock - cakeQty > 0){
            this.stock=this.stock-cakeQty
        }else{
            throw new Error('Not enough cakes to sell')
        }
    }
    setState(stock: number){
        return stock >= 10 ? "Available" : stock > 0 && stock < 10 ? "LastUnits" : "OutOfStock"
    }
    setName(name: string){
        if (name.length > 5 && name.length < 50){
            return name
        } else {
            throw new Error("Name doesn't match constraints")
        }
    }
    setDescription(description: string){
        if (description.length > 50 && description.length < 100){
            return description
        } else {
            throw new Error("Description doesn't match constraints")
        }
    }
    setPrice(price: number){
        if(price < 0){
            throw new Error("Price must be greater than cero")
        }
        return price
    }
    setStock(stock: number){
        if(stock <= 0){
            throw new Error("Stock must be positive")
        }
        return stock
    }
}