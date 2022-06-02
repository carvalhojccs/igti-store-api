import supplierService from "../services/supplier.service.js";

async function createSupplier(req, res, next){
    try {
        const supplier = req.body;

        if( !supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address ) {
            throw new Error("Name, CNPJ, Phone, E-mail and Address are required!");
        }

        res.send(await supplierService.createSupplier(supplier));
        logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
    } catch (err) {
        next(err);
    }    
}

async function getSuppliers(req, res, next){
    try {
        res.send( await supplierService.getSuppliers() );
        logger.info(`GET /supplier`);
    } catch (err) {
        next(err);
    }
}

async function getSupplier(req, res, next){
    try {
        const id = req.params.id;
        res.send(await supplierService.getSupplier(id));

        logger.info(`GET /supplier/${JSON.stringify(id)}`);
    } catch (err) {
        next(err);
    }
}

async function updateSupplier(req, res, next){
    try {
        let supplier = req.body;
        if(!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address || !supplier.supplierId) {
            throw new Error("Name, CNPJ, Phone, E-mail, Address and ID are required!");
        }

        supplier = await supplierService.updateSupplier(supplier);

        res.send( supplier );

        logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteSupplier(req, res, next){
    try {
        const id = req.params.id;
        await supplierService.deleteSupplier(id);
        res.send();

        logger.info(`DELETE /supplier/${JSON.stringify(id)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
}