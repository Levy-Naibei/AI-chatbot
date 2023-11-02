import { connect, disconnect } from "mongoose";

const dbConnect = async () => {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error)
        throw new Error("Cannot connect to MongoDB")
    }
}

// if an issue occurs in the app, we also disconnect 
// db connection - security!
const dbDisconnect = async () => {
    try {
        await disconnect()
    } catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect from MongoDB");
    }
}

export { dbConnect, dbDisconnect }
