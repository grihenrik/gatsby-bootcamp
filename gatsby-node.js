const path = require('path');
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    
    // get the blog template
    const blogTemplate = path.resolve('./src/templates/contentful.js');

    //Get contentful page slugs
    const res = await graphql(`
        query{
            allContentfulBlogPost{
              edges{
                node{
                  slug
                }
              }
            }
        }
    
    `);
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage(
            {
            component: blogTemplate,
            path: `/contentful/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
                },
            }
        )
        
    });
}