import * as React from "react"
import { Link } from "gatsby"
import "../styles/inProgress.css";


// This page is not currently used as the actual 404 page for some reason atm

// TODO: move stylings to a separate css file and update / actually implement the design of the 404 page

// These are basically the css styling for 404 page
// but they were commented out previously
// (Fall 2024 comment)

// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }
// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

const NotFoundPage = () => {
  return (
    <main className="pageStyles">
      <h1 className="headingStyles">Page not found</h1>
      <p className="paragraphStyles">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className="codeStyles">src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
