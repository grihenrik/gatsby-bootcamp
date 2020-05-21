import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"

const NotFound = () => {
    return(
        <div>
            <Layout>
            <h1>Page not found 404</h1>
            <p>This is not the page you are looking for</p>
            <p><Link to="/">Home</Link></p>
            </Layout>
        </div>
        
    )
}



export default NotFound;