import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";
import selesRepository from "../repositories/sale.repository.js";
import productInfoRepository from "../repositories/productInfo.repository.js";

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
        product.info = await productInfoRepository.getProductInfo(parseInt(id));
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

async function createProductInfo(productInfo){
    await productInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo){
    await productInfoRepository.updateProductInfo(productInfo);
}

async function createReview(review, productId){
    await productInfoRepository.createReview(review, productId);
}

async function deleteReview(id, index){
    await productInfoRepository.deleteReview(parseInt(id), index);
}

async function getProductsInfo(){
    return await productInfoRepository.findAll();
}

async function deleteProductInfo(id){
    await productInfoRepository.deleteProductInfo(parseInt(id));
}


export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    createProductInfo,
    updateProductInfo,
    createReview,
    deleteReview,
    getProductsInfo,
    deleteProductInfo
}