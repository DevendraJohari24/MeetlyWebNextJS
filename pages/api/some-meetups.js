import { connectToDatabase } from "../../utils/connectToDatabase";
async function getDescSortMeetups(req, res) {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    console.log("Connected Successfully");
    let meetups;
    try {
      meetups = await db
        .collection("meetups")
        .find()
        .sort({ createdAt: 1 })
        .limit(8)
        .toArray();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error Found!" });
    }

    return res.status(200).json({ meetups: meetups });
  }
}

export default getDescSortMeetups;
