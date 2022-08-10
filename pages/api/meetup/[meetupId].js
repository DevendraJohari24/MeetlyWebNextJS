import { ObjectId } from "mongodb";
import connectToDatabase from "../../../utils/connectToDatabase";
import { getMeetupsData } from "../meetups";

async function handler(req, res) {
  if (req.method === "GET") {
    const { meetupId } = req.query;
    const meetups = await getMeetupsData();
    const selectedMeetup = meetups.find(
      (meetup) => meetup._id.toString() === meetupId
    );
    res.status(201).json({ meetup: selectedMeetup });
  } else if (req.method === "DELETE") {
    const { meetupId } = req.query;
    const client = await connectToDatabase();
    const db = client.db("meetups");
    const result = await db.collection("meetups").deleteOne({ _id: new ObjectId(meetupId) });
    res.status(201).json({ message: "Deleted Successfully" });
  } else {
    res.status(200).json("Working");
  }
}

export default handler;