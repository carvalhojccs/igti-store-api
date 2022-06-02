import Sequelize from "sequelize";

const sequelize = new Sequelize(
    process.env.CONNECTION_STRNG,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);

export default {
    sequelize
}