import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Colors = {
  web: "bg-green-500/75 ring-green-900 hover:bg-green-700",
  python: "bg-blue-500/75 ring-blue-900 hover:bg-blue-700",
  rust: "bg-red-500/75 ring-red-900 hover:bg-red-700",
  gatsby: "bg-purple-500/75 ring-purple-900 hover:bg-purple-700",
  featured: "bg-gray-500/75 ring-gray-900 hover:bg-gray-700",
  javascript: "bg-yellow-300/75 ring-yellow-700 hover:bg-yellow-600"
}

function captalize(s) {
  return s[0].toUpperCase() + s.substring(1);
}

export default function Card(props) {
  return (
    <article className="flex flex-col justify-between my-2 ring-1 h-full ring-gray-600 rounded-xl" key={props.id}>
      <div>
        <Link to={`/${props.link}/${props.slug}`}>
          <GatsbyImage
            className="rounded-t-xl"
            image={getImage(props.hero_image)}
            alt={props.hero_image_alt}
          />
        </Link>
        <h2 className="md:text-4xl text-2xl px-3 pt-2 transition-all hover:text-sky-400 duration-300 text-wrap font-bold">
          <Link to={`/${props.link}/${props.slug}`}>
            {props.title}
          </Link>
        </h2>
        <div className="p-3 md:text-xl rounded-b-xl text-gray-700 dark:text-gray-400">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p>{props.date}</p>
          </div>
          <p className="p-2 text-gray-700 dark:text-gray-400">{props.excerpt}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-0 md:flex-row md:justify-between justify-start items-start md:items-center px-3 pb-3">
        <Link to={`/${props.link}/${props.slug}`} class="inline-flex items-center mt-2 px-3 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
        <ul className="flex md:self-auto self-end">
          {props.tags?.split(" ").map(tag => (
            <li className={"cursor-pointer text-white rounded-full font-normal " + Colors[tag] + " ring-2 m-1 p-2"}>{captalize(tag)}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}