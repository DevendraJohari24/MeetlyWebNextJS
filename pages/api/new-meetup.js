import { connectToDatabase } from "../../utils/connectToDatabase";

async function newMeetuphandler(req, res) {
  if (req.method === "POST") {
    const {db} = await connectToDatabase();
    console.log("Connected Successfully");

    const { meetID, title, subtitle, image, description } = req.body;
    const result = await db.collection("meetups").insertOne({
      meetID: meetID,
      title: title,
      subtitle: subtitle,
      image: image,
      description: description,
      createdAt: new Date(),
    });
    return res.status(200).json({ result: result });
  }
}

export default newMeetuphandler;
