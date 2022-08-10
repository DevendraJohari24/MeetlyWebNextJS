import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";


function Footer() {
  return (
    <Fragment>
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="ml-2">
                <p className="text-4xl font-serif text-white capitalize underline tracking-wider hover:scale-110 hover:-translate-y-4">
                  Meetly
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <div className="h-10 group">
                  <Link href="/">Home</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <Link href="/#about">About</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <Link href="/new-meetup">New Meetup</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <Link href="/meetups">Meetups</Link>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                <div className="h-8 group">
                    <Image
                      src="/image/icon-facebook.svg"
                      alt=""
                      className="h-6"
                      width="25"
                      height="25"
                    />
                </div>
                <div className="h-8 group">
                    <Image
                      src="/image/icon-twitter.svg"
                      alt=""
                      className="h-6"
                      width="25"
                      height="25"
                    />
                </div>
                <div className="h-8 group">
                    <Image
                      src="/image/icon-pinterest.svg"
                      alt=""
                      className="h-6"
                      width="25"
                      height="25"
                    />
                </div>
                <div className="h-8 group">
                    <Image
                      src="/image/icon-instagram.svg"
                      alt=""
                      className="h-6"
                      width="25"
                      height="25"
                    />
                </div>
              </div>
              <div className="font-bold">
                &copy; 2022 Meetly. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
