import { connectToDatabase } from "../../utils/connectToDatabase";

async function getAllMeetupIds(req, res) {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    console.log("Connected Successfully");
    let meetups;
    try {
      console.log("hello connection");
      meetups = await db.collection("meetups").distinct("_id", {}, {});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error Found!" });
    }

    return res.status(200).json({ meetups: meetups });
  }
}

export default getAllMeetupIds;
