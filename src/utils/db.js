import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const retriesAmount = process.env.DB_RETRIES;
const retryTimeout = 5;
let connectionRetries = 0;

const DbConnection = async (dbUrl) => {
  return mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      if (connectionRetries < retriesAmount) {
        console.error(
          `Failed to connect to mongo on startup - retrying in ${retryTimeout} sec`
        );
        console.log(
          `Retries Left ${(retriesAmount - connectionRetries) | 0} \n`
        );
        connectionRetries++;
        setTimeout(DbConnection, retryTimeout * 1000);
      } else {
        console.log("Connection to MongoDB Failed");
      }
    });
};

export default DbConnection;
