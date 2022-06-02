import Product from "../models/product.model.js";
import Sale from "../models/sale.model.js";

async function insertSale(sale){
    try {
        return await Sale.create(sale);
    } catch (err) {
        throw err;
    }
}

async function getSales(){
    try {
        return await Sale.findAll();
    } catch (err) {
        throw err;
    }
}

async function getSalesByProductId(productId){
    try {
        return await Sale.findAll({
            include: {
                model: Product,
                where: {
                    productId
                }
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getSalesBySupplierId(supplierId){
    try {
        return await Sale.findAll({
            include: {
                model: Product,
                where: {
                    supplierId
                }
            }
        });
    } catch (err) {
        throw err;
    }
}


async function getSale(id){
    try {
        return await Sale.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function updateSale(sale){
    try {
        await Sale.update({
            where: {
                saleId: sale.saleId
            }
        });
        return await Sale.getSale(sale.saleId);
    } catch (err) {
        throw err;
    }
}

async function deleteSale(id){
    try {
        await Sale.destroy({
            where: {
                saleId: id
            }
        });
    } catch (err) {
        throw err;
    }
}

export default {
    insertSale,
    getSales,
    getSalesByProductId,
    getSalesBySupplierId,
    getSale,
    updateSale,
    deleteSale,
}