import { connectToDatabase } from "../../../utils/connectToDatabase";
import {ObjectId} from "mongodb";
async function getMeetupById(req, res) {
  if (req.method === "GET") {
    const { meetupId } = req.query;
    const {db} = await connectToDatabase();
    let meetup;
    try{
      if(meetupId !== undefined){
        meetup = await db.collection("meetups").find({_id: ObjectId(meetupId)}).toArray()
      }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message: "Error Found!"})
    }

     return res.status(200).json({ meetups: meetup[0]});

  }
  if (req.method === "DELETE") {
    console.log("Inside Delete api")
    const { db } = await connectToDatabase();
    console.log("Connected Successfully");

    const { meetupId } = req.query;
    console.log(meetupId);
    let result;
    try{
        if(meetupId!==undefined){
          result = await db
            .collection("meetups")
            .deleteOne({ _id: ObjectId(meetupId) });
        }
    }
    catch(error){
      console.log(error);
      return res.status("500").json({message: "Error Found!"});
    }
    return res.status(204).json({ message: "Deleted Successfully" });
  }

}

export default getMeetupById;
