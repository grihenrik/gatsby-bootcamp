import React from "react";

import Layout from "../components/layout";
import {Link, graphql, useStaticQuery} from "gatsby";

import blogStyles from "../styles/blog.module.scss";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
            edges{
              node{
                frontmatter{
                    title
                    date
                }
                fields{slug}
                html
                excerpt
                timeToRead
              }
            }
        }
    }
      `);
    function ListItem(d, idx){
        const link = `/blog/${d.node.fields.slug}`;
        return(
        <li key={idx} className={blogStyles.post}><Link className={blogStyles.link} to={link}>
            <h2>{d.node.frontmatter.title}</h2>
            <p>Date: {d.node.frontmatter.date}</p>
            </Link>
        </li>);
    }
    
    
    return(
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map((d,idx)=>ListItem(d,idx))}
            </ol>
        </Layout>
        
    )
}

export default BlogPage;
