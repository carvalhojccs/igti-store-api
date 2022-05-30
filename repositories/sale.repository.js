import { connect } from "./db.js";

async function insertSale(sale){
    const conn = await connect();

    try {
        const sql = "INSERT INTO sales (client_id, product_id, value, date) VALUES ($1, $2, $3, $4) RETURNING *";
        const values = [ sale.client_id, sale.product_id, sale.value, sale.date ];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getSales(){
    const conn = await connect();

    try {
        const res = await conn.query("SELECT * FROM sales");
        return await res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getSalesByProductId(productId){
    const conn = await connect();

    try {
        const res = await conn.query("SELECT * FROM sales WHERE product_id = $1", [productId]);
        return await res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}


async function getSale(id){
    const conn = await connect();

    try {
        const res = await conn.query("SELECT * FROM sales WHERE sale_id = $1", [id]);
        return await res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function updateSale(sale){
    const conn = await connect();

    try {
        const sql = "UPDATE sales SET client_id = $1, value = $2, date = $3 WHERE sale_id = $4 RETURNING *";
        const values = [ sale.client_id, sale.value, sale.date, sale.sale_id ];
        const res = await conn.query(sql, values);
        return await res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function deleteSale(id){
    const conn = await connect();

    try {
        await conn.query("DELETE FROM sales WHERE sale_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    insertSale,
    getSales,
    getSalesByProductId,
    getSale,
    updateSale,
    deleteSale,
}