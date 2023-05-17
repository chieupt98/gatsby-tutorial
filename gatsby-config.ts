import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass",
  "gatsby-plugin-image",
  {
    resolve: "gatsby-source-prismic", 
    options: {
      repositoryName: 'my-gatsby-demo1',
      customTypesApiToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6Im15LWdhdHNieS1kZW1vMS1hZDY0YmIzYS1kYTA4LTQyZjItOGQwYi1mMDAzZmQxODdmMWZfNCIsImRhdGUiOjE2ODQyOTgwNjIsImRvbWFpbiI6Im15LWdhdHNieS1kZW1vMSIsImlhdCI6MTY4NDI5ODA2Mn0.W9rWY3jjLtzm_7DBTVlvcnm9SL9NNmGGhW_5Fl2z2fE',
    }
  }
],
  
};

export default config;
