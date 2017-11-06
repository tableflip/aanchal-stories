module.exports = {
  siteMetadata: {
    title: 'Aanchal'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'facts',
        path: `${__dirname}/facts.json`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/pages/`
      }
    },
    'gatsby-transformer-json'
  ]
}
