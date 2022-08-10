import { Fragment } from "react";
import About from "../components/meetups/About";
import Title from "../components/meetups/Title";
import { getMeetupsData } from "./api/meetups";
import Image from "next/image";

import { useRouter } from "next/router";

function HomePage({meetups}) {
  const router = useRouter();
  function onLoadImage({src, width, quality}){
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  const onSeeAllHandler = () => {
      router.push("/meetups");
  }

  function onLoadDescription(id) {
    router.push("/meetup/" + id);
  }

  return (
    <Fragment>
      <div>
        <Title />
        <About />
        {meetups.length > 0 ? (
          <section id="meetups">
            <div className="container max-w-6xl mx-auto my-20 md:my-32 px-6 text-gray-900 md:px-0">
              <div className="flex justify-center mb-20 md:justify-between">
                <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                  Top Meetups
                </h2>
                <button
                  className="hidden btn md:block"
                  onClick={onSeeAllHandler}
                >
                  See All
                </button>
              </div>
              <div className="item-container">
                {meetups.map((meetup, index) => {
                  return (
                    <div
                      className="group item"
                      key={index}
                      onClick={onLoadDescription.bind(null, meetup.id)}
                    >
                      <div className="hidden md:block">
                        <Image
                          src={meetup.image}
                          loader={onLoadImage}
                          alt=""
                          width="700"
                          height="1200"
                          className="object-cover duration-200 md:block group-hover:scale-110"
                        />
                      </div>
                      <div className="md:hidden">
                        <Image
                          src={meetup.image}
                          loader={onLoadImage}
                          alt=""
                          width="750"
                          height="500"
                          className="object-cover duration-200 md:block group-hover:scale-110"
                        />
                      </div>
                      <div className="item-gradient"></div>
                      <h5>{meetup.title}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </Fragment>
  );
}



export const getStaticProps = async () => {
  const meetups = await getMeetupsData();
  const featuredMeetups = meetups.slice(-8);
  return {
    props: {
      meetups: featuredMeetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
        };
      }),
    },
    revalidate: 10,
  };
};


export default HomePage;
