import { Fragment, useEffect, useState } from "react";
import NoMeetupPage from "../../../components/meetups/NoMeetupPage";
import Image from "next/image";
import { getMeetupById, getMeetupsData } from "../../api/meetups";
import { useRouter } from "next/router";

function MeetupDescription({selectedMeetup, meetupId}) {
  const [meetup, setMeetup] = useState(selectedMeetup);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const getMeetup = async (meetId) => {
      setIsLoading(true);
      await fetch(`/api/meetup/${meetId}`)
        .then((response) => response.json())
        .then((data) => {
          const selectedMeetup = data.meetup;
          const newMeetup = {
            id: selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            subtitle: selectedMeetup.subtitle,
            image: selectedMeetup.image,
            meetID: selectedMeetup.meetID,
            description: selectedMeetup.description,
            createdAt: selectedMeetup.createdAt
          };

          setMeetup(newMeetup);
          setIsLoading(false);
        });
    };
    getMeetup(meetupId);
  }, [meetupId]);

  if (isLoading) {
    return (
      <Fragment>
        <p>Loading..........</p>
      </Fragment>
    );
  }

  if (!meetup) {
    return (
      <Fragment>
        <NoMeetupPage />
      </Fragment>
    );
  }
  function onImageLoader({ src, width, quality }) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  const deleteMeetHandler = async (id) => {
    const res = await fetch(`/api/meetup/${id}`, { method: "DELETE" });
    if (res.status === 201) {
      alert("Meetup Deleted Successfully!");
      router.push("/");
    }
  };

  return (
    <Fragment>
      {showModal ? (
        <>
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Delete Meetup</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      Do you really want to delete that Meet? Think again!
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={deleteMeetHandler.bind(null, meetup.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </>
      ) : (
        <section>
          <div className="flex flex-col mt-32 md:mt-0 md:max-w-6xl md:mx-auto md:mb-32 w-full md:space-y-7 md:bg-white pt-4 h-auto">
            <div className="flex flex-row">
              <div className="flex flex-col w-2/3 items-end text-lg ml-0.5 md:ml-0 space-y-1 md:pr-16">
                <p className="text-green-700 md:text-lg">
                  {meetup.createdAt} / #{meetup.meetID}
                </p>
                <p className="new Date(meetup.createdAt).toLocaleString()text-black uppercase underline underline-offset-4 text-xl md:text-5xl font-alanta">
                  {meetup.title}
                </p>
              </div>
              <div className="w-1/3 flex justify-end pr-5 pt-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 p-2 border-2 shadow-xl rounded-lg hover:scale-110"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => setShowModal(true)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full items-center shadow-sm pb-8">
              <div className="w-full md:h-[750px] p-2">
                <Image
                  src={meetup.image}
                  loader={onImageLoader}
                  alt=""
                  width="2048w"
                  height="1336vh"
                  className="object-cover"
                />
              </div>
              <div className="w-3/4 h-auto bg-white p-5 -mt-20 shadow-lg hover:scale-110 z-10">
                <p className="text-xl text-center underline p-2">
                  {meetup.subtitle}
                </p>
                <div className="bg-slate-500 border"></div>
                <div className="block  w-full h-auto my-2">
                  <p className="md:text-2xl overflow-hidden text-center">
                    {meetup.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}

export async function getStaticPaths(){
  const meetups = await getMeetupsData();
  const paths = meetups.map(event => ({params: {meetupId: event._id.toString()}}));

  return {
    paths: paths,
    fallback: true
  }
}


export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    const selectedMeetup = await getMeetupById(meetupId);
    return {
      props: {
        selectedMeetup: {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          subtitle: selectedMeetup.subtitle,
          image: selectedMeetup.image,
          description: selectedMeetup.description,
          meetID: selectedMeetup.meetID,
          createdAt: selectedMeetup.createdAt
        },
        meetupId: meetupId
      }
    }
}





export default MeetupDescription;