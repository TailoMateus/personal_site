module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":960,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Tailo Mateus Gonsalves","short_name":"Tailo Mateus Gonsalves","start_url":"/","background_color":"#fff","theme_color":"#fff","display":"minimal-ui","icon":"src/images/profiles.jpg"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
