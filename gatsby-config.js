module.exports = {
	siteMetadata: {
		title: 'Oils Unlimited',
		author: 'Michael Warf',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'Oils Unlimited is a family owned and operated business in Calgary.  Supplying industrial, automotive, and food service lubricants since 1993. A Howes distributor; we also feature Conoco Phillips, 76, Quaker State, and Castrol.ilsunlimited Landing Page',
		keywords: `Oil, Retail, Calgary`,
		twitter: 'https://twitter.com/warfeous',
		github: `https://github.com/mwarf`,
		medium: 'https://medium.com/@amanhimself',
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `https://www.oilsunlimited.ca`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
