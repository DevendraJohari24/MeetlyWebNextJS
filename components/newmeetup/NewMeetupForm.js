import { Fragment, useRef, useState } from "react";

function NewMeetupForm(props) {
    const meetupIDInputRef = useRef();
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const subtitleInputRef = useRef();
    const descriptionInputRef = useRef();

    const [isFormValid, setIsFormValid] = useState(false);

    function submitHandler(event) {
      event.preventDefault();
      const enteredMeetupID = meetupIDInputRef.current.value;
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredSubtitle = subtitleInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      if(enteredMeetupID.length==0 || enteredTitle.length == 0 || enteredImage.length==0 || enteredSubtitle.length==0 || enteredDescription.length == 0){
        alert("Please Enter Appropriate Details");
        setIsFormValid(false);
      }else{
        setIsFormValid(true);
      }

      if(isFormValid){
         const enteredData = {
          meetID: enteredMeetupID,
           title: enteredTitle,
           image: enteredImage,
           subtitle: enteredSubtitle,
           description: enteredDescription
         };
         props.onAddMeetup(enteredData);
      }
    }
  return (
    <Fragment>
      <section>
        <div className="flex -mt-10 md:mt-0 items-center mx-auto max-w-6xl rounded-xl shadow-xl p-2 md:p-0">
          <form className="flex flex-col mx-auto md:w-1/2 space-y-5 p-10 shadow-xl md:hover:scale-110 transition delay-150 duration-300 ease-in-out hover:scale-95">
            {/* Form Title */}
            <div className="mx-auto border-4 p-5 rounded-xl md:mb-0 mb-3">
              <div className="text-xl font-bold font-alanta text-white underline underline-offset-4">
                Tell me where you going?
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-2">
                <div className="font-sans">Enter MeetupID</div>
                <input
                  type="text"
                  ref={meetupIDInputRef}
                  className="
              px-2 py-1.5 rounded block w-full
              placeholder-gray-500
              text-base font-normal text-gray-300 bg-white
              border border-solid border-gray-300
              m-0
              transition ease-in-out
              focus:text-gray-700 focus:border-black focus:outline-none
              "
                  id="meetupid"
                  placeholder="Enter Meetup ID"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="font-sans">Choose Image</div>
                <input
                  type="text"
                  ref={imageInputRef}
                  className="
              px-2 py-1.5 rounded block w-full
              placeholder-gray-500
              text-base font-normal text-gray-300 bg-white
              border border-solid border-gray-300
              m-0
              transition ease-in-out
              focus:text-gray-700 focus:border-black focus:outline-none
              "
                  id="image"
                  placeholder="Enter Image Link"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="">Title</div>
                <input
                  type="text"
                  ref={titleInputRef}
                  className="
              px-2 py-1.5 rounded block w-full
              placeholder-gray-500
              text-base font-normal text-gray-300 bg-white
              border border-solid border-gray-300
              m-0
              transition ease-in-out
              focus:text-gray-700 focus:border-black focus:outline-none
              "
                  id="title"
                  placeholder="Enter Title"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="">Subtitle</div>
                <input
                  type="text"
                  ref={subtitleInputRef}
                  className="
              px-2 py-1.5 rounded block w-full
              placeholder-gray-500
              text-base font-normal text-gray-300 bg-white
              border border-solid border-gray-300
              m-0
              transition ease-in-out
              focus:text-gray-700 focus:border-black focus:outline-none
              "
                  id="subtitle"
                  placeholder="Enter Subtitle"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="">Description</div>
                <textarea
                  ref={descriptionInputRef}
                  className="
              px-2 py-1.5 rounded block w-full
              placeholder-gray-500
              text-base font-normal text-gray-300 bg-white
              border border-solid border-gray-300
              m-0
              transition ease-in-out
              focus:text-gray-700 focus:border-black focus:outline-none
              "
                  id="description"
                  placeholder="Enter Description"
                />
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center w-full">
              <button
                onClick={submitHandler}
                className="block bg-green-400 w-3/4 rounded-lg 
            py-1.5 text-base font-normal border-solid border-2
            transition ease-in-out 
            opacity-75
            hover:opacity-100 hover:outline-none
            hover:scale-x-90
            active:bg-yellow-200
            "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
}

export default NewMeetupForm;
