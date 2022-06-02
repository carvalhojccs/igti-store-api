import Sequelize from "sequelize";
import db from "../repositories/db.js";
//import Sale from "./sale.model.js";

const Client = db.define('clients', {
    clientId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

//TODO - Implementar hasMany
//ERRO - mongodb+srv://administrador:<password>@cluster0.9a8hr.mongodb.net/test
//Client.hasMany(Sale);

export default Client;

