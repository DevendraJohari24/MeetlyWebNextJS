import { Fragment } from "react";
import CardItem from "./CardItem";
import NoMeetupPage from "./NoMeetupPage";

function AllMeetups({ meetups }) {
  return (
    <Fragment>
      {meetups.length > 0 ? (<div className="container mx-auto max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8 p-6 pb-32">
        {meetups.length > 0
          ? meetups.map((item, index) => {
              return (
                <CardItem
                  key={index}
                  id={item.id}
                  meetID={item.meetID}
                  title={item.title}
                  description={item.description}
                  subtitle={item.subtitle}
                  image={item.image}
                  createdAt={item.createdAt}
                  index={index}
                />
              );
            })
          : null}
      </div>) : <NoMeetupPage />}
    </Fragment>
  );
}

export default AllMeetups;
