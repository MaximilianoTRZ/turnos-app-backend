import app from "./app.js";
import dotenv from "dotenv";
import DBconnection from "./src/utils/db.js";

dotenv.config();
const mongoDB = process.env.MONGO_DB_URL; 

DBconnection(mongoDB);


app.listen(app.get("port"), () => {
    console.log(`\n  Server: http://localhost:${app.get("port")} \n`);
});


