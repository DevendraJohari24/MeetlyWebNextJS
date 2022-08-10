import { Fragment } from "react";
import NavbarNew from "../Navbar/NavbarNew";
import Footer from "./Footer";

function MainLayout(props){
    return (
      <Fragment>
        <section
          style={{
            backgroundImage: `url("image/meetlyBgImage.jpg")`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <NavbarNew />
          <main>{props.children}</main>
          <Footer />
        </section>
      </Fragment>
    );
}

export default MainLayout;