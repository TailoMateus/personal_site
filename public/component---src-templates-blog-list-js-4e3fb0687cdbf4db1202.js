(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{eWDE:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),o=n("Zttt"),r=n("vrFN"),l=n("vOnD"),c=(n("ibEc"),n("kOA+")),s=n.n(c),d=Object(l.c)(s.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1w5cmwb-0"})(["color:#8899a6;display:inline-block;width:100%;padding:20px;margin:1%;box-sizing:border-box;border-bottom:1px solid #eee;text-decoration:none;vertical-align:top;&:hover{color:#1fa1f2;}"]),m=l.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1w5cmwb-1"})(["align-items:center;display:inline-block;width:100%;"]),p=l.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1w5cmwb-2"})(["display:inline-block;"]),g=l.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-1w5cmwb-3"})(["vertical-align:top;font-size:1.1rem;display:inline-block;margin:8px 30px 10px 0;min-width:160px;"]),f=l.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1w5cmwb-4"})(["font-size:1.6rem;font-weight:700;margin:0;display:inline-block;line-height:30px;overflow:hidden;"]),w=function(e){var t=e.slug,n=e.date,i=e.title;return a.a.createElement(d,{to:t,cover:!0,direction:"right",bg:"#fff",duration:.6},a.a.createElement(m,null,a.a.createElement(p,null,a.a.createElement(g,null,n),a.a.createElement(f,null,i))))},u=l.c.section.withConfig({displayName:"styled__PaginationWrapper",componentId:"yo2rsq-0"})(["align-items:center;margin:20px 0;text-align:center;padding:1.5rem 3rem;justify-content:space-between;a{text-decoration:none;transition:color 0.5s;font-size:1.6rem;font-weight:700;margin-right:20px;&:hover{color:#1fa1f2;}}"]),b=function(e){var t=e.isFirst,n=e.isLast,i=e.prevPage,o=e.nextPage;return a.a.createElement(u,null,!t&&a.a.createElement(s.a,{to:i,cover:!0,direction:"left",bg:"#fff",duration:.6},"← Prev"),!n&&a.a.createElement(s.a,{to:o,cover:!0,direction:"right",bg:"#fff",duration:.6},"Next →"))};n.d(t,"query",(function(){return h}));var h="97308302";t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=e.pageContext,i=n.currentPage,l=1===i,c=i===n.numPages,s=i-1==1?"/":"/page/"+(i-1),d="/page/"+(i+1);return a.a.createElement(o.a,{home:!0},a.a.createElement(r.a,{title:"Home"}),t.map((function(e){var t=e.node,n=t.frontmatter,i=n.date,o=n.title,r=t.fields.slug;return a.a.createElement(w,{slug:r,date:i,title:o})})),a.a.createElement(b,{isFirst:l,isLast:c,prevPage:s,nextPage:d}))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-4e3fb0687cdbf4db1202.js.map