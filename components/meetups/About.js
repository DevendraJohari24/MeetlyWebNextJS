import { Fragment } from "react";

function About(){
    return (
      <Fragment>
        <section id="about">
          <div className="relative container flex flex-col max-w-6xl mx-auto md:my-36 mt-5 px-6 text-gray-900 md:flex-row md:px-0">
            <img src="/image/aboutImage.jpg" alt="" className="md:w-3/4" />
            <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
              <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                The Quad of Pshyco Geeks
              </h2>
              <p className="max-w-md text-center md:text-left">
               We are a group of four friends in which all four have different skills and vibes.
               Our Team contains: 
               Priya, Doman, Kushagra, Devendra.
               Each have different powers: Priya - great at designing skills also a Fashion ICON,
               Doman - our hardware guy , speciallised in IOT, Kushagra - our bag of awesome Ideas also speciallised in Cloud,
               Devendra - it's me , developer , good in React and React Native 
              </p>
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default About;