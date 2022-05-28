import supplierRepository from "../repositories/supplier.repository.js";

async function createSupplier(supplier){
    return await supplierRepository.createSupplier(supplier);
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
    return await supplierRepository.deleteSupplier(id);
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
}