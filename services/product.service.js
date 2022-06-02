import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";
import selesRepository from "../repositories/sale.repository.js";

async function createProduct(product){
    if( await supplierRepository.getSupplier(product.supplierId) ) {
        return await productRepository.insertProduct(product);
    }

    throw new Error("Supplier not found!");    
}

async function getProducts(supplierId){
    if(supplierId){
        return productRepository.getProductsBySupplierId(supplierId);
    }
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
    if( await supplierRepository.getSupplier(product.supplierId) ) {
        return await productRepository.updateProduct(product);
    }

    throw new Error("Supplier not found!");
}

async function deleteProduct(id){
    const sales = await selesRepository.getSalesByProductId(id);
    if(sales) {
        throw new Error("Product can't be deleted. There are sales for this product!");
    }

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