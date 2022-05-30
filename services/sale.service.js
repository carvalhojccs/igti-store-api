import saleRepository from "../repositories/sale.repository.js";
import productRepository from "../repositories/product.repository.js";
import clientRepository from "../repositories/client.repository.js";

async function createSale(sale){
    let error = "";

    if(!await clientRepository.getClient(sale.client_id)){
        error = "Client not found!";
    }

    if(!await productRepository.getProduct(sale.product_id)){
        error += "Product not found!";
    }

    if(error) {
        throw new Error(error);
    }

    return await saleRepository.insertSale(sale);
}

async function getSales(){
    return saleRepository.getSales();
}

async function getSale(id){
    const sale = await saleRepository.getSale(id);
    if (!sale) {
        throw new Error("Sale not found!");
    }

    return sale;
}

async function updateSale(sale){
    let error = "";

    if(!await clientRepository.getClient(sale.client_id)){
        error = "Client not found!";
    }

    if(!await productRepository.getProduct(sale.product_id)){
        error += "Product not found!";
    }

    if(!await saleRepository.getSale(sale.sale_id)) {
        error += "Sale not found!";
    }

    if(error) {
        throw new Error(error);
    }
    return await saleRepository.updateSale(sale);
}

async function deleteSale(id){
    return await saleRepository.deleteSale(id);
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale,
}