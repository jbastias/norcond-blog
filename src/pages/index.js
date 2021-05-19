import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
  
     1. Musculación y Cardio:
    <a href="https://calendly.com/moraviapesas/moravia-area-de-musculacion-y-cardio">Musculación y Cardio</a>
    <br />
    2. Grupales: <a href="https://calendly.com/moraviagrupales">Grupales</a>
    <br />
    3. HIIT: <a href="https://calendly.com/moraviahiit/moravia-hiit">HIIT</a>
    <br />
    4.Piscina: <a href="https://calendly.com/moraviapiscina/moravia-piscina">Piscina</a>
    <br />
    5. Natación: <a href="https://calendly.com/moraviapiscina/natacion">Natación</a>
    <br />
  
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
