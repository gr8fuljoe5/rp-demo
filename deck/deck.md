---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# Next.js

Joe Kanakaraj, *Lead Frontend Developer*

---

## What is Next.js

- Open-source React front-end development web framework
- Known for it's ability to pre-render (SSG and SSR)
- Also offers OOTB code splitting and bundling, CSS support, routing, and much more!

---

## About Next.js
### History
- First released as an open-source project on GitHub on October 25, 2016
- Created by Guillermo Rauch
    - Current CEO of Vercel

---
# Getting Started

- `create-next-app` (https://nextjs.org/docs/api-reference/create-next-app)
- `package.json`
```
"scripts": {
  "dev": "next dev", //  Runs next dev which starts Next.js in development mode
  "build": "next build", // Runs next build which builds the application for production usage
  "start": "next start" // Runs next start which starts a Next.js production server
}
```
---

# The Basics

- Routing (Basic, Dynamic, API)
- Built in CSS Support
- Image Optimization


---
# Data Fetching
- Client-Side Rendering (CSR)
- Server-side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ICR)

___
# Server Side Rendering (SSR)
- Each HTML page is generated per request
- Next allows the first page load to be rendered by the server 
  - Great for SEO and performance
  - No need to rebuild when content changes
  
``` 
getServerSideProps() - Next will pre-render the page on each request
```

---
# Static Site Generation (SSG)

- Fetches data at build time
- Can specify dynamic routes to pre-render pages based on data. 
- Newspaper stand

```
getStaticProps() - use when your page content depends on extendal data
getStaticPaths() - used when your paths depend on external data (usually used in addition to getStaticProps) 
```
___
# Incremental Static Regeneration (ICR)
With `getStaticProps` you don't have to stop relying on dynamic content, as static content can also be dynamic. Incremental Static Regeneration allows you to update existing pages by re-rendering them in the background as traffic comes in.

___
# Dynamic Imports
Next.js supports ES2020 `dynamic import()` for JavaScript. 
With it, you can import JavaScript modules dynamically and work with them. 

- Control how to split and bundle components
- Dynamically import 3rd party libs as needed 
- Works with SSR!

___
# Deployment

