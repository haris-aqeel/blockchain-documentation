const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://blockchaindocumentation.gtsb.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      "",
    githubUrl: 'https://github.com/haris-aqeel/blockchain-documentation',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://www.linkedin.com/in/haris-aqeel/" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent-Background-PNG-.png' alt={'Linkedin'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'BLOCKCHAIN', link: 'https://blockchaindocumentation.gtsb.io/' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'BLOCKCHAIN SOLIDITY',
    description: 'https://blockchaindocumentation.gtsb.io/ ',
    ogImage: null,
    docsLocation: 'https://blockchaindocumentation.gtsb.io/',
    favicon: 'https://blockchaindocumentation.gtsb.io/',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Blockchain Documentation',
      short_name: 'Solidity',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
