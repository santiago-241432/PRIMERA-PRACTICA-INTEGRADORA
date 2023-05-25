import cartModel from "../models/carts.js"

class Cart{
    constructor() {
        
    }

    async createCart(){
        return await cartModel.create();
    }

    async getAll(){
        return await cartModel.find();
    }
}
export default new Cart();
