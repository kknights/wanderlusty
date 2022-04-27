import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if blog title (which is inside of <header> is on the main page, then its an H1; otherwise its a text link back to the main page
  // TODO: find a way to make this class based, to not confuse it with other headers in use on the site
  
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      
      <header className="global-header">
        <div className="content-wrapper">{header}</div>
      </header>


      <main>{children}</main>
      <footer className="global-footer">
        <p>&copy; {new Date().getFullYear()}, built with <a href="https://www.gatsbyjs.com">Gatsby</a></p>
      </footer>
    </div>
  )
}

export default Layout
