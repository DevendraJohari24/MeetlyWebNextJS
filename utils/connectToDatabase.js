import { MongoClient } from "mongodb";

const connectToDatabase = async() => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    console.log("Connected Successfully");
    return client;
  } catch (err) {
    console.log("Connection Error");
  }
}


export default connectToDatabase;