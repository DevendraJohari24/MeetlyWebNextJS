import connectToDatabase from "../../../utils/connectToDatabase";

async function handler(req, res) {
    if (req.method === "POST") {
          const client = await connectToDatabase();       
          const db = client.db("meetups");
          const meetup = {
            meetID: req.body["meetID"],
            title: req.body["title"],
            subtitle: req.body["subtitle"],
            image: req.body["image"],
            description: req.body["description"],
            userID: "1",
            createdAt: new Date().toLocaleString()
          };
          const result = await db.collection("meetups").insertOne(meetup);
          res.status(200).json({ result: result });
    }
    else{
        res.status(201).json({ message: "Working" });
    }
}

export default handler;
