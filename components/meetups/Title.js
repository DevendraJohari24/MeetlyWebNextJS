import { Fragment } from "react";

function Title() {
  return (
    <Fragment>
      <section id="title" className="">
        <div className="container md:max-w-6xl mx-auto px-6 md:py-12">
          <div className="md:max-w-lg md:mt-32 md:mb-32 p-4 font-sans text-2xl text-white uppercase border-2 md:m-32 md:mx-0 md:text-6xl">
            Meetly That Keep You Connected
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Title;
