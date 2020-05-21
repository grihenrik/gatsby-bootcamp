import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import headerStyles from "../styles/header.module.scss";

import Head from "../components/head";

const Header = (props) => {
    console.log(props.headerText);
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
        
        <header className={headerStyles.header}>
            <Head title={props.headerText} ></Head>
            <h1 ><Link className={headerStyles.title} to='/'>
                {data.site.siteMetadata.title}
                </Link>
            </h1>
        <nav>
            <ul className={headerStyles.navList} >
                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} to={"/"}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} 
                    activeClassName={headerStyles.activeNavItem} to={"/contentful"}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} 
                    activeClassName={headerStyles.activeNavItem} to={"/about"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} 
                    activeClassName={headerStyles.activeNavItem} to={"/contact"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
        
        
        </header>
    )
}

export default Header;

