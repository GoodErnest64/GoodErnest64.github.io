import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { CookiesProvider, useCookies } from 'react-cookie'
import Footer from './footer';
import { Helmet } from "react-helmet";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  //document.body.style.backgroundColor = "white";
}

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [cookies, setCookies] = useCookies(["darkMode"])

  //setCookies("darkMode", true, { path: "/" })

  if (cookies.darkMode) {
    //document.documentElement.classList.add("dark")
  } else {
    //document.documentElement.classList.remove("dark")
  }

  function darkMode() {
    document.documentElement.classList.add("dark")
    setCookies("darkMode", true, { path: "/" })
  }

  function lightMode() {
    //document.documentElement.classList.remove("dark")
    setCookies("darkMode", false, { path: "/" })
  }

  function toggleTheme() {
    if (cookies.darkMode) {
      lightMode();
    }
    else {
      darkMode()
    }
  }

  return (
    <CookiesProvider>
      <Helmet>
        <html lang="en" className={cookies.darkMode ? "dark" : ""} />
      </Helmet>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={closeNav}>&times;</button>
        <Link className="mainlink" to="/">Home</Link>
        <Link className="mainlink" to="/blog">Blog</Link>
        <Link className="mainlink" to="/projects">Projects</Link>
        <Link className="mainlink" to="/about">About</Link>
        <div className="flex justify-around mb-5 links">
          <a href="https://github.com/" className="outside">
            <svg class="size-8 fill-white hover:fill-purple-700" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </a>
          <a href="https://twitter.com/" className="outside">
            <svg class="size-8 stroke-white hover:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.643 13.346L4.26862 4.86856C3.85863 4.32329 4.2478 3.54408 4.93001 3.54431L7.2184 3.54508C7.47633 3.54517 7.71945 3.66557 7.87585 3.87066L12.9065 10.4675M10.643 13.346L5.19311 20.5093M10.643 13.346L15.8028 20.077C15.9588 20.2805 16.2003 20.4001 16.4567 20.4009L18.7925 20.4082C19.4778 20.4104 19.8683 19.6261 19.4536 19.0805L12.9065 10.4675M12.9065 10.4675L18.2181 3.50928" stroke-width="1.5" stroke-linecap="round"></path></svg>
          </a>
          <a href="/" className="outside">
            <svg class="size-8 fill-white hover:fill-lime-500" viewBox="0 0 24 24"><path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39M11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"></path></svg>
          </a>
          <a href="/rss.xml" className="outside">
            <svg class="size-8 fill-white hover:fill-orange-500" viewBox="0 0 448 512"><path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"></path></svg>
          </a>
        </div>
      </div>
      <div className="flex bg-gray-700 p-3" id="main">
        <header className="text-4xl flex items-center">
          <button className="rounded-xl" onClick={openNav}>
            <svg xmlns="http://www.w3.org/2000/svg" className="md:size-10 size-7 hover:stroke-2 transition-all stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <Link to="/">
            <h1 className="text-white font-extrabold md:text-5xl text-2xl px-1 md:px-3">{capitalizeFirstLetter(data.site.siteMetadata.title)}</h1>
          </Link>
        </header>
        <nav className="w-full justify-end flex">
          <button className="hover:bg-gray-600 transition duration-300 rounded-full p-1" onClick={toggleTheme}>
            {!cookies.darkMode ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-10 size-7 stroke-white transition-all duration-300 stroke-1 hover:stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-10 size-7 stroke-white transition-all duration-300 stroke-1 hover:stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            }
          </button>
          <a href="/search" className="hover:bg-gray-600 transition duration-300 rounded-full p-1 md:mr-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-10 size-7 stroke-white transition-all duration-300 stroke-1 hover:stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </a>
        </nav>
      </div>
      <main className="dark:bg-gray-800 min-h-screen dark:text-white">
        {children}
      </main>
      <Footer />
    </CookiesProvider>
  )
}

export default Layout