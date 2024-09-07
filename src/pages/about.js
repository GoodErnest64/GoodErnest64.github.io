import Layout from "./components/layout";
import * as React from "react";

export default function About() {
  return (<Layout>
    <h1 className="w-full text-center text-6xl font-extrabold pt-12">About</h1>
    <p className="w-full text-center md:p-0 px-3 md:px-96 text-3xl font-semibold">Hey There !</p>
    <p className="w-full text-center md:p-0 px-3 md:px-96 text-2xl font-semibold my-2">I'm Ernest Reynolds Also Known As GoodErnest64 Or Ge64 In The Internet !<br /> I Am A Programmer And A Computer Geek Who Is Intrested In Anything Ranging From Web Development And Artificial Intelligence To Hacking And Penetration Testing. I Do All Of These As A Hobby And I Like To Share My Experience With Others Which Is Why This Blog Was Made.</p>
    <p className="w-full text-center md:p-0 px-3 md:px-96 text-2xl font-semibold my-2">If You Want To Contact Me You Can Email Me At goodernest64@gmail.com And I'll Try To Answer You As Soon As I Can !<br /></p>
  </Layout>);
}