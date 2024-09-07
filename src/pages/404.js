import * as React from "react"
import Layout from "./components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col pt-48 justify-center items-center text-center">
        <h1 className="text-6xl font-extrabold m-3">404 !</h1>
        <h2 className="text-4xl m-3">The Page You Wanted To Access Does Not Exist !</h2>
        <p className="text-2xl m-3">This Means You Either Have A Typo Or The Post Has Been Either Deleted Or Edited !</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
