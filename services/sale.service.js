import saleRepository from "../repositories/sale.repository.js";
import productRepository from "../repositories/product.repository.js";
import clientRepository from "../repositories/client.repository.js";

async function createSale(sale){
    let error = "";

    if(!await clientRepository.getClient(sale.clientId)){
        error = "Client not found!";
    }

    let product = await productRepository.getProduct(sale.product_id);

    if(!await productRepository.getProduct(sale.product_id)){
        error += "Product not found!";
    }

    if(error) {
        throw new Error(error);
    }

    product.stock--;

    await productRepository.updateProduct(product);


    return await saleRepository.insertSale(sale);
}

async function getSales(productId, supplierId){
    if(productId){
        return await saleRepository.getSalesByProductId(productId)
    }
    if(supplierId) {
        return await saleRepository.getSalesBySupplierId(supplierId);
    }

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

    if(!await clientRepository.getClient(sale.clientId)){
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
    const sale = await saleRepository.getSale(id);
    if(sale) {
        const product = await productRepository.getProduct(sale.product_id);
        await saleRepository.deleteSale(id);
        product.stock++;
        productRepository.updateProduct(product);
    } else {
        throw new Error("Sale ID not found!");
    }
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale,
}