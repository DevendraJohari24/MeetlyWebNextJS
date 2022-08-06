import { useRouter } from "next/router";
import { Fragment } from "react";
import CardVertical from "./CardVertical";

function Meetups({meetups}) {
  const router = useRouter();
  function onClickHandler(event){
      router.push("/meetups");
  }
  return (
    <Fragment>
      <section id="meetups">
        <div className="container max-w-6xl mx-auto my-20 md:my-32 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Top Meetups
            </h2>
            <button className="hidden btn md:block" onClick={onClickHandler}>
              See All
            </button>
          </div>
          <div className="item-container">
            {meetups.map((meetup) => (
              <CardVertical
                image={meetup.image}
                title={meetup.title}
                key={meetup._id}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Meetups;