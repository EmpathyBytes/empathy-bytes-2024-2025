import * as React from "react"

function IndexPage() {
  return (
    <div>
      <h1>Welcome to EmpathyBytes!</h1>

      <a href="/articles/meeting2/">Click to See the Article Page from Drupal</a>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
