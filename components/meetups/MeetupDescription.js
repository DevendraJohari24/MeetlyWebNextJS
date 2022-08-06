import { Fragment, useEffect, useState } from "react";
import Modal from "../Modal/Modal";

function MeetupDescription(
  {id, title, description, subtitle, meetID, image, createdAt, deleteMeetHandler },
  
) {
    const [meetId, setMeetId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [meetTitle, setTitle] = useState("");
  const [meetDescription, setDescription] = useState("");
  const [meetSubtitle, setSubtitle] = useState("");
  const [meetMeetID, setMeetID] = useState("");
  const [meetImage, setMeetImage] = useState("");
  const [meetDate, setMeetDate] = useState("");

  const date = new Date(createdAt).toLocaleString();
  useEffect(() => {
    setDescription(description);
    setMeetID(meetID);
    setTitle(title);
    setSubtitle(subtitle);
    setMeetImage(image);
    setMeetId(id);
    setMeetDate(date);
  }, []);

  const handleCloseModal = (value) => {
    if (!value) {
      setShowModal(false);
    }
  };

  const handleDeleteMeet = (value) => {
    if (value) {
        deleteMeetHandler(meetId);
    }
  };
  
  return (
    <Fragment>
      {showModal ? (
        <>
          {" "}
          <Modal
            handleCloseModal={handleCloseModal}
            handleDeleteMeet={handleDeleteMeet}
          />{" "}
        </>
      ) : (
        <section>
          <div className="flex flex-col mt-32 md:mt-0 md:max-w-6xl md:mx-auto md:mb-32 w-full md:space-y-7 md:bg-white pt-4 h-auto">
            <div className="flex flex-row">
              <div className="flex flex-col w-2/3 items-end text-lg space-y-1 pr-16">
                <p className="text-green-700 text-sm md:text-lg">
                  {meetDate} / #{meetMeetID}
                </p>
                <p className="text-black uppercase underline underline-offset-4 text-xl md:text-5xl font-alanta">
                  {meetTitle}
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
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-full items-center shadow-sm pb-8">
              <div className="w-full h-full p-2">
                <img
                  src={meetImage}
                  alt=""
                  className="w-full h-full border-2 p-2"
                />
              </div>
              <div className="w-3/4 h-auto bg-white p-5 -mt-20 shadow-lg hover:scale-110">
                <p className="text-xl text-center underline p-2">
                  {meetSubtitle}
                </p>
                <div className="bg-slate-500 border"></div>
                <div className="block  w-full h-auto my-2">
                  <p className="md:text-2xl overflow-hidden text-center">
                    {meetDescription}
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

export default MeetupDescription;
