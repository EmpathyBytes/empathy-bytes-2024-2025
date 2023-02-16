import * as React from "react"
import {Link} from "gatsby";

function IndexPage() {
  return (
    <div>
      <h1>Welcome to EmpathyBytes!</h1>

      <a href="/articles/meeting2/">Click to See the Article Page from Drupal</a>
      <Link className="contactpage" to='/contact'>Go to Contact</Link>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
