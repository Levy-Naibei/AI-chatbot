import app from "./app.js"
import { dbConnect } from "./db/connection.js";

// connections and listeners
const PORT = process.env.PORT || 5000;

dbConnect().then(() => {
    app.listen(PORT, () =>
        console.log(`Connected to MongoDb & Server running on port ${PORT}`));
}).catch((error) => {
    console.log(error);
})
