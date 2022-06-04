import { getlClient } from "./mongo.db.js";

async function createProductInfo(productInfo){
    const client = getlClient();

    try {
        await client.connect();
        await client.db("store").collection("productInfo").insertOne(productInfo);
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function updateProductInfo(productInfo){
    const client = getlClient();

    try {
        await client.connect();
        await client.db("store").collection("productInfo").updateOne(
            { productId: productInfo.productId },
            { $set: { ...productInfo } }
        );
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function getProductInfo(productId){
    const client = getlClient();
    try {
        await client.connect();
        return await client.db("store").collection("productInfo").findOne({ productId });
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function createReview(review, productId){
    try {
        const productInfo = await getProductInfo(productId);
        productInfo.reviews.push(review);
        await updateProductInfo(productInfo);
    } catch (err) {
        throw err;
    }
}

async function deleteReview(id, index){
    try {
        const productInfo = await getProductInfo(id);
        productInfo.reviews.splice(index, 1);
        await updateProductInfo(productInfo);
    } catch (err) {
        throw err;
    }
}

async function findAll() {
    const client = getlClient();
    try {
        await client.connect();
        return await client.db("store").collection("productInfo").find({}).toArray();
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function deleteProductInfo(productId){
    const client = getlClient();
    try {
        await client.connect();
        return await client.db("store").collection("productInfo").deleteOne({ productId });
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}


export default {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    createReview,
    deleteReview,
    findAll,
    deleteProductInfo,
}