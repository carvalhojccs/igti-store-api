import mongoose from "mongoose";

async function connect(){
    const uri = process.env.MONGODB_CONNECT_URI;
    return await mongoose.connect(uri, { dbName : "store" });
}

export { connect }