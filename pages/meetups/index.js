import { Fragment } from "react";
import AllMeetups from "../../components/meetups/AllMeetups";



function showMeetups(props){
    return (
      <Fragment>
        <section>
          <div className="w-full h-full">
          <AllMeetups  meetups={props.meetups} />
          </div>
        </section>
      </Fragment>
    );
}


export const getStaticProps = async() => {
  const {URL} = process.env;
  const res = await fetch(URL + "/api/meetups");
  const {meetups} = await res.json();
  console.log(meetups);

  return {
    props: {
      meetups: meetups.map((meetup) => {
        console.log(meetup);
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          subtitle: meetup.subtitle,
          meetID: meetup.meetID,
          createdAt: meetup.createdAt
        } 
      })
    },
    revalidate: 1,
  };
}

export default showMeetups;