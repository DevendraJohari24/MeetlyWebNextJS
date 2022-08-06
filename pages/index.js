import { Fragment } from "react";
import HomeScreen from "../components/meetups/HomeScreen";

function HomePage({meetups}) {
  return (
    <Fragment>
      <HomeScreen meetups={meetups} />
    </Fragment>
  );
}



export const getStaticProps = async () => {
  const { URL } = process.env;
  const res = await fetch(URL + "/api/some-meetups");
  const { meetups } = await res.json();
  console.log(meetups);

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
        };
      }),
    },
    revalidate: 1,
  };
};


export default HomePage;
