import { Fragment, useState } from "react";
import Link from "next/link";

function NavbarNew(){  
  const [showHamburger, setShowHamburger] = useState(false);
  function onhamburgerHandler(){
      setShowHamburger((e) => (!e));
  }
    return (
      <Fragment>
        <section id="hero">
          {/* Hero Container */}
          <div
            className={`container max-w-6xl mx-auto px-6 md:py-12 pt-12 pb-3 ${
              showHamburger ? "mb-96" : ""
            }`}
          >
            {/* Nav/Logo Container*/}
            <nav className="flex items-center justify-between font-bold text-white">
              <div>
                <p className="md:text-4xl text-3xl capitalize underline font-sans tracking-wider hover:scale-110 hover:translate-y-4">
                  Meetly
                </p>
              </div>
              <div className="hidden h-10 font-alata md:flex md:space-x-8 z-20">
                <div className="group">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                  <Link href="/#about">
                    <a>About</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/new-meetup">
                    <a>New Meetup</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                  <Link href="/meetups">
                    <a>Meetups</a>
                  </Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  className="z-40 block hamburger md:hidden focus:outline-none"
                  id="menu-button"
                  type="button"
                  onClick={onhamburgerHandler}
                >
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </button>
              </div>
            </nav>
            {showHamburger ? (
              <>
                <div
                  id="menu"
                  className="absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
                >
                  <Link href="/" class="hover:text-pink-500">
                    <a>Home</a>
                  </Link>
                  <Link href="/#about" className="hover:text-pink-500">
                    <a>About</a>
                  </Link>
                  <Link href="/new-meetup" class="hover:text-pink-500">
                    <a>New Meetup</a>
                  </Link>
                  <Link href="/meetups" class="hover:text-pink-500">
                    <a>Meetups</a>
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </section>
      </Fragment>
    );
}

export default NavbarNew;