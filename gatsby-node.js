const path = require('path');


// Runs a GraphQL Call
exports.createPages = async ({actions, graphql}) => {
    const { createPage } = actions;


    // This is specifically for article pages
    const articles = await graphql(`
    {
        allNodeArticle {
          nodes {
            id
            title
            path {
                alias
            }
          }
        }
      }
    `);

    // Looping through the data gathered, creating a page for each component
    articles.data.allNodeArticle.nodes.map(articleData =>
        createPage({
            path: articleData.path.alias,
            component: path.resolve(`src/templates/article.js`),
            context: {
                ArticleId: articleData.id,
            },
        })
    );
}