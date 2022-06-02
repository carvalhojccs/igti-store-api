import supplierRepository from "../repositories/supplier.repository.js";
import productRepository from "../repositories/product.repository.js";

async function createSupplier(supplier){
    return await supplierRepository.insertSupplier(supplier);
}

async function getSuppliers(){
    return supplierRepository.getSuppliers();
}

async function getSupplier(id){
    return supplierRepository.getSupplier(id);
}

async function updateSupplier(supplier){
    return await supplierRepository.updateSupplier(supplier);
}

async function deleteSupplier(id){

    const products = await productRepository.getProductsBySupplierId(id);
    
    
    if(products) {
        throw new Error("Supplier can't be deleted. There are products from this supplier");
    }
    return await supplierRepository.deleteSupplier(id);
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
}