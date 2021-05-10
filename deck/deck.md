---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# Next.js

Joe Kanakaraj

---

## What is Next.js

Next.js is an open-source React front-end development web framework created by Vercel. 

---

## About Next.js
### History
- First released as an open-source project on GitHub on October 25, 2016
- Created by Guillermo Rauch
    - Current CEO of Vercel

---
## About Next.js
### 6 Principals
* OOTB functionality w/ no setup
* JavaScript everywhere
* All functions written in JS
* Automatic code-splitting and server rendering
* Configurable data-fetching
* Anticipating requests
* Simplifying deployment

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

- Pages and Routing
- Built in CSS Support
- Image Optimization


---
# Data Fetching
- Client-Side Rendering (CSR)
- Static Site Generation (SSG)
- Server-side Rendering (SSR)
- Incremental Static Regeneration (ICR)

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
# Server Side Rendering (SSR)
- Each HTML page is generated per request
- Next allows the first page load to be rendered by the server 
  - Great for SEO and performance
  - Great if your 
  
``` 
getServerSideProps() - Next will pre-render the page on each request
```

___
# Incremental Static Regeneration (ICR)
With `getStaticProps` you don't have to stop relying on dynamic content, as static content can also be dynamic. Incremental Static Regeneration allows you to update existing pages by re-rendering them in the background as traffic comes in.

___
# Dynamic Imports
Next.js supports ES2020 `dynamic import()` for JavaScript. With it, you can import JavaScript modules dynamically and work with them. They also work with SSR.

___
# Deployment

