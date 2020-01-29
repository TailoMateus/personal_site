module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-104345063-1","head":true},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":960,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Tailo Mateus Gonsalves","short_name":"Tailo Mateus Gonsalves","start_url":"/","background_color":"#fff","theme_color":"#fff","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
