import saleService from "../services/sale.service.js";

async function createSale(req, res, next){
    try {
        const sale = req.body;

        if( !sale.client_id || !sale.product_id || !sale.value || !sale.date ) {
            throw new Error("Client ID, Supplier ID, Value and Date are required!");
        }

        res.send(await saleService.createSale(sale));
        logger.info(`POST /sale - ${JSON.stringify(sale)}`);
    } catch (err) {
        next(err);
    }    
}

async function getSales(req, res, next){
    try {
        res.send( await saleService.getSales() );
        logger.info(`GET /sale`);
    } catch (err) {
        next(err);
    }
}

async function getSale(req, res, next){
    try {
        const id = req.params.id;
        res.send(await saleService.getSale(id));

        logger.info(`GET /sale/${JSON.stringify(id)}`);
    } catch (err) {
        next(err);
    }
}

async function updateSale(req, res, next){
    try {
        let sale = req.body;
        if(!sale.client_id || !sale.product_id || !sale.value || !sale.date || !sale.sale_id) {
            throw new Error("Client ID, Product ID, Value, Date and Sale ID are required!");
        }

        sale = await saleService.updateSale(sale);

        res.send( sale );

        logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteSale(req, res, next){
    try {
        const id = req.params.id;
        await saleService.deleteSale(id);
        res.send();

        logger.info(`DELETE /sale/${JSON.stringify(id)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
    deleteSale,
}