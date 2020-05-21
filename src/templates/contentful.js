import React from 'react';
import {graphql} from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout';



const Blog =(props)=>{
    const options={
        renderNode: {
            "embedded-asset-block": (node)=>{
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img src={url} alt={alt} width="300"/>
            }
        }
    }

    return (
        <Layout headerText={props.data.contentfulBlogPost.title}>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <small>{props.data.contentfulBlogPost.publishedDate}</small>
            <img src={props.data.contentfulBlogPost.blogImage.file.url} alt={props.data.contentfulBlogPost.blogImage.title} width="300px"></img>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json,options)}

        </Layout>
    )
}

export default Blog;

export const query = graphql`
    query($slug:String){
        contentfulBlogPost(
            slug: {eq: $slug}
        ){
            title
            publishedDate(formatString:"DD.MM.YYYY")
            body{
                json
            }
            blogImage{
                title
                file{
                  url
                }
            }
        }
    }
`;
