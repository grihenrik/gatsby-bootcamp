import React from "react";

import Layout from "../components/layout";
import {Link, graphql, useStaticQuery} from "gatsby";

import blogStyles from "../styles/blog.module.scss";

const ContentfulPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
            sort: {
                fields: publishedDate,
                order: DESC
            }
        ){
          edges{
            node{
              title
              publishedDate(formatString:"DD.MM.YYYY")
              slug
            }
          }
        }
      }
      `);
    function ListItem(d, idx){
        const link = `/contentful/${d.node.slug}`;
        return(
        <li key={idx} className={blogStyles.post}><Link className={blogStyles.link} to={link}>
            <h2>{d.node.title}</h2>
            <p>Date: {d.node.publishedDate}</p>
            <p>{d.node.excerpt}</p>
            </Link>
        </li>);
    }
    
    
    return(
        <Layout headerText="Blog">
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map((d,idx)=>ListItem(d,idx))}
            </ol>
        </Layout>
        
    )
}

export default ContentfulPage;
