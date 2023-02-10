import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Functional Article Component
// This Function will find all the article components on the drupal site, and create a page
// on the gatsby site for each component
function Article({data}) {
    const post = data.nodeArticle;

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.relationships.field_image.localFile.url}></img>
            <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
        </div>
    );
}



// These are the graphql queries to pull the drupal site data
Article.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query($ArticleId: String!) {
        nodeArticle(id: { eq: $ArticleId }) {
        id
        title
        body {
            processed
        }
        relationships {
            field_image {
                localFile {
                    url
                }
            }
        }
    }
}
`;

export default Article;