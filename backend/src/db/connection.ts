import { connect } from "mongoose";

const dbConnection = async () => {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error)
        throw new Error("Cannot connect to MongoDB")
    }
}

export default { dbConnection }