import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import innertext from 'innertext'

const BlogpostLayout = ({data}) => {
    const post = data.wordpressPost
    return (
        <div>
            <SEO
                title={innertext(post.title)}
                description={innertext(post.excerpt)}
                image={post.featured_media.source_url}
                keywords={post.categories.map(res => res.name).join(', ')}
            />
            <Header></Header>
            <main>
                <div className="container">
                    <div className="row justify-content-md-center col-8">
                        <img alt={post.featured_media.slug} src={post.featured_media.source_url}/>
                        <h1>{post.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.content}} />
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default BlogpostLayout

export const query = graphql `
    query($slug: String!) {
        wordpressPost(slug: {eq: $slug}) {
            title
            content
            featured_media {
                source_url
                slug
              }
              categories {
                name
              }
              excerpt
        }
    }
`