import mongodb from "mongodb";

function getlClient() {
    return new mongodb.MongoClient(process.env.MONGODB_CONNECT_URI);
}

export { getlClient }