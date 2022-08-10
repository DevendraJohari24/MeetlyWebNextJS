import connectToDatabase from "../../../utils/connectToDatabase";
export async function getMeetupsData() {
  const client = await connectToDatabase();
  const db = client.db("meetups");
  const meetups = await db.collection("meetups").find().toArray();
  return meetups;
}

export async function getMeetupById(meetupId) {
    const meetups = await getMeetupsData();
    const selectedMeetup = meetups.find((meetup) => (meetup._id.toString() === meetupId));
    return selectedMeetup;
}

async function handler(req, res) {
  if (req.method === "GET") {
    const meetups = await getMeetupsData();
    res.status(200).json({ meetups: meetups });
  } else {
    res.status(201).json({ message: "Working" });
  }
}

export default handler;
