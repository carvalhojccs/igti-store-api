import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product){
    if( await supplierRepository.getSupplier(product.supplier_id) ) {
        return await productRepository.insertProduct(product);
    }

    throw new Error("Supplier not found!");    
}

async function getProducts(){
    return productRepository.getProducts();
}

async function getProduct(id){
    const product = await productRepository.getProduct(id);
    if ( product) {
        return  product;
    }

    throw new Error("Product not found!");
}

async function updateProduct(product){
    if( await supplierRepository.getSupplier(product.supplier_id) ) {
        return await productRepository.updateProduct(product);
    }

    throw new Error("Supplier not found!");
}

async function deleteProduct(id){
    if (await productRepository.getProduct(id)) {
        return await productRepository.deleteProduct(id);    
    }

    throw new Error("Product not found!");    
}

export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}