const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/tailo/Desktop/site/src/templates/blog-post.js"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("/home/tailo/Desktop/site/src/templates/blog-list.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tailo/Desktop/site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/tailo/Desktop/site/src/pages/404.js")))
}

