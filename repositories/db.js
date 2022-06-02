import Sequelize from "sequelize";

const sequelize = new Sequelize(
    process.env.CONNECTION_STRING,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        },
        logging: console.log
    }
);

export default sequelize;