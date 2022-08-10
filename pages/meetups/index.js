import { Fragment, useEffect, useState } from "react";
import { getMeetupsData } from "../api/meetups";
import NoMeetupPage from "../../components/meetups/NoMeetupPage";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MeetupsPage({ meetups }) {
  const [allMeetups, setAllMeetups] = useState(meetups);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getMeetups = async () => {
      setIsLoading(true);
      await fetch("/api/meetups")
        .then((response) => response.json())
        .then((data) => {
          const meetups = data.meetups;
          const meetupItems = [];
          for (const key in meetups) {
            meetupItems.push({
              id: meetups[key]._id.toString(),
              title: meetups[key].title,
              subtitle: meetups[key].subtitle,
              image: meetups[key].image,
              createdAt: meetups[key].createdAt,
            });
          }
          setAllMeetups(meetupItems);
          setIsLoading(false);
        });
    };
    getMeetups();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p className="text-white">Loading.........</p>
      </div>
    );
  }

  if (allMeetups.length === 0) {
    return (
      <Fragment>
        <NoMeetupPage />
      </Fragment>
    );
  }

  function onLoadDescription(id) {
    router.push("/meetup/" + id);
  }

  function onImageLoader({ src, width, quality }) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  return (
    <Fragment>
      <div className="container mx-auto max-w-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8 p-6 pb-32">
        {allMeetups.map((meetup, index) => {
          return (
            <div key={index}>
              <div>
                <Image
                  loader={onImageLoader}
                  src={meetup.image}
                  alt=""
                  className="object-cover object-center rounded-lg shadow-md hover:translate-y-4"
                  width="350vh"
                  height="250vh"
                />

                <div
                  className="relative px-4 -mt-16 hover:scale-90"
                  onClick={onLoadDescription.bind(null, meetup.id)}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg active:opacity-75">
                    <div className="flex items-baseline">
                      {index === 0 ? (
                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          New
                        </span>
                      ) : null}
                      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                        {meetup.createdAt}
                      </div>
                    </div>

                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                      {meetup.title}
                    </h4>

                    <div className="mt-1">{meetup.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await getMeetupsData();
  const meetupItems = [];

  for (const key in data) {
    meetupItems.push({
      id: data[key]._id.toString(),
      title: data[key].title,
      subtitle: data[key].subtitle,
      image: data[key].image,
      createdAt: data[key].createdAt,
    });
  }
  return {
    props: {
      meetups: meetupItems,
    },
    revalidate: 1800,
  };
}

