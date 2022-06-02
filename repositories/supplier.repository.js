import Supplier from "../models/supplier.model.js";
import Product from "../models/product.model.js";

async function insertSupplier(supplier){
    try {
        return await Supplier.create(supplier);
    } catch (err) {
        throw err;
    }
}

async function getSuppliers(){
    try {
        return Supplier.findAll(
            // {
            //     include: {
            //         model: Product
            //     }
            // }
        );
    } catch (err) {
        throw err;
    }
}

async function getSupplier(id){
    try {
        return Supplier.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function updateSupplier(supplier){
    try {
        await Supplier.update(supplier,{
            where: {
                supplierId: supplier.supplierId
            }
        });
        return Supplier.findByPk(supplier.supplierId);
    } catch (err) {
        throw err;
    }
}

async function deleteSupplier(id){
    try {
        await Supplier.destroy({
            where: {
                supplierId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
}