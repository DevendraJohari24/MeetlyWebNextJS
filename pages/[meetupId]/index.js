import { useRouter } from "next/router";
import MeetupDescription from "../../components/meetups/MeetupDescription";

function showMorePage({ meetupData }) {
  const router = useRouter();
  const deleteMeetHandler = async (id) => {
    console.log("Request Come");
    const { URL } = process.env;
    console.log(URL)
    const res = await fetch("/api/meetup/" + id, { method: "DELETE" });
    if (res.status === 204) {
      alert("Meetup Deleted Successfully!");
      router.push("/");
    }
  };
  return (
   meetupData ? ( <MeetupDescription
      id={meetupData.id}
      title={meetupData.title}
      description={meetupData.description}
      image={meetupData.image}
      subtitle={meetupData.subtitle}
      meetID={meetupData.meetID}
      createdAt={meetupData.createdAt}
      deleteMeetHandler={deleteMeetHandler}
    />) : (<div><p className="text-xl text-white">No data Found!</p></div>)
  );
}

export async function getStaticPaths() {
  const { URL } = process.env;
  const res = await fetch(URL + "/api/meetup-ids");
  const { meetups } = await res.json();
  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup.toString() },
  }));
  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const { URL } = process.env;
  const res = await fetch(URL + "/api/meetup/" + meetupId);
  const { meetups } = await res.json();
  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        title: meetups.title,
        image: meetups.image,
        subtitle: meetups.subtitle,
        description: meetups.description,
        meetID: meetups.meetID,
        createdAt: meetups.createdAt,
      },
    },
  };
}

export default showMorePage;