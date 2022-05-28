import { connect } from "./db.js";

async function insertSupplier(supplier){
    const conn = connect();

    try {
        const sql = "INSERT INTO suppliers (name, cnpj, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [ supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.address ];
        const res = conn.query(sql. values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getSuppliers(){
    const conn = connect();

    try {
        const res = await conn.query("SELECT * FROM suppliers");
        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function getSupplier(id){
    const conn = connect();

    try {
        const res = await conn.query("SELECT * FROM suppliers WHERE supplier_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function updateSupplier(supplier){
    const conn = connect();

    try {
        const sql = "UPDATE suppliers SET name = $1, cnpj = $2, phone = $3, email = $4, address = $5, supplier_id = $6 RETURNING *";
        const values = [ supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.address, supplier.supplier_id ];
        const res = conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

async function deleteSupplier(id){
    const conn = connect();

    try {
        await conn.query("DELETE FROM suppiers WHERE supplier_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}


export default {
    insertSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier,
}