import { Fragment } from "react";
import About from "./About";
import Meetups from "./Meetups";
import Title from "./Title";

function HomeScreen({meetups}){
    return (
      <Fragment>
        <div>
          <section>
            <Title />
          </section>
          <section>
            <About />
          </section>
          <section>
            <Meetups meetups={meetups} />
          </section>
        </div>
      </Fragment>
    );
}




export default HomeScreen;