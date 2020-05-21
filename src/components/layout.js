import React from "react"
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/style.scss';
import layoutStyles from '../styles/layout.module.scss';

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
            <Header headerText={props.headerText}></Header>
            {props.children}
            </div>
            <Footer></Footer>
            
        </div>
        
    )
}

export default Layout;