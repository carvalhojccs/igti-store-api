import productService from "../services/product.service.js";

async function createProduct(req, res, next){
    try {
        const product = req.body;

        if( !product.name || !product.description || !product.value || !product.stock || !product.supplierId ) {
            throw new Error("Name, Description, Value, Stock and Supplier ID are required!");
        }

        res.send(await productService.createProduct(product));
        logger.info(`POST /product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }    
}

async function getProducts(req, res, next){
    try {
        const supplierId = req.query.supplier_id;
        res.send( await productService.getProducts(supplierId) );
        logger.info(`GET /product`);
    } catch (err) {
        next(err);
    }
}

async function getProduct(req, res, next){
    try {
        const id = req.params.id;
        res.send(await productService.getProduct(id));

        logger.info(`GET /product/${JSON.stringify(id)}`);
    } catch (err) {
        next(err);
    }
}

async function updateProduct(req, res, next){
    try {
        let product = req.body;
        if(!product.name || !product.description || !product.value || !product.stock || !product.supplierId || !product.productId) {
            throw new Error("Name, Description, Value, Stock, Supplier ID and ID are required!");
        }

        product = await productService.updateProduct(product);

        res.send( product );

        logger.info(`PUT /product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteProduct(req, res, next){
    try {
        const id = req.params.id;
        await productService.deleteProduct(id);
        res.send();

        logger.info(`DELETE /product/${JSON.stringify(id)}`);
    } catch (err) {
        next(err);
    }
}

async function createProductInfo(req, res, next){
    try {
        let productInfo = req.body;
        if(!productInfo.productId) {
            throw new Error("Product ID is required!");
        }
        await productService.createProductInfo(productInfo);
        res.end();
        logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);
    } catch (err) {
        next(err);
    }
}

async function updateProductInfo(req, res, next){
    try {
        let productInfo = req.body;
        if(!productInfo.productId) {
            throw new Error("Product ID is required!");
        }
        await productService.updateProductInfo(productInfo);
        res.end();
        logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
    } catch (err) {
        next(err);
    }
}

async function createReview(req, res, next){
    try {
        let params = req.body;
        if(!params.productId || !params.review) {
            throw new Error("Product ID and Review are required!");
        }
        await productService.createReview(params.review, params.productId);
        res.end();
        logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteReview(req, res, next){
    try {
        await productService.deleteReview(req.params.id, req.params.index);
        res.end();
        logger.info(`DELETE /product/:id/review/:index`);
    } catch (err) {
        next(err);
    }
}

async function getProductsInfo(req, res, next){
    try {
        res.send(await productService.getProductsInfo());
        logger.info(`GET /product/info`);
    } catch (err) {
        next(err);
    }
}

async function deleteProductInfo(req, res, next){
    try {
        res.send(await productService.deleteProductInfo(req.params.id));
        logger.info(`DELETE /product/info/`);
    } catch (err) {
        next(err);
    }
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
    deleteProductInfo,
}