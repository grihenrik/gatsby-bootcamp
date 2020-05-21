import React from "react"
import { graphql, useStaticQuery} from "gatsby";
import footerStyles from "../styles/footer.module.scss";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            title
            author
          }
        }
      }
      `);
    return(
        <footer className={footerStyles.footer}>
            <div>
                &copy; 2020 {data.site.siteMetadata.author} All rights reserved
            </div>
        </footer>
    )
}

export default Footer;