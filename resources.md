# Resources

TODO

- General things to finish

  - (done) Add colors
  - (done) Add text sizes
  - (done) Add focus ring colors
  - (done) Add Radix UI (along with tailwind stuff)
  - (done) Style links and buttons
  - (done) Create search
  - (done) Add CMS (Sanity or Contentful; look for one that supports Brazilian Portuguese)

- Fine details to finish

  - (done) Resize X button in dialog view
  - (done) Create reusable dialog component for dialog trigger grid (large screens)
  - (done) Add styling to footer links (hover, pressed) like nav
  - (done) Fix scroll padding on sections (add some on top)
  - (done) Add "NOVO" tag onto the dialog triggers
  - (done) Add hover/active styles to all buttons/links
  - (done) Fix h1 in the hero section
  - (done) Create search function (combine title, tag, text, description into string to be search)(WITHOUT ZOOM)
  - (done) Change search input (I want one that includes a search icon. GOOGLE)
  - (done) Create "Curso" model to input into the CMS for Carla
  - (done) Add data fetching (SSG with refresh) in index.tsx (for getting data from CMS)
  - (done) Fix "prose" colors for light and dark mode
  - (done) Add refresh rate for SSG
  - (done) Make function to show "NOVO" tag for certain amount of time after the item has originally been published (like 10 days)
  - Add all things to make website seem like "mobile app" (There is a tutorial somewhere)
  - (done) Create favicon
  - Create og images
  - Add validation/required on fields for "Curso" model in Sanity
  - Configuration for site in CMS
  - Add accessibility logo (BIG maybe)

- Fixes

  - (done) Remove zooming from search input
  - Fix viewport calculation for homescreen. (Apparently, "svh" units may not be working on Carla's phone. I have to do a different calculation. Both in "index.tsx" and "LayoutWrapper.tsx" and "constant/index.ts")

- Final touches
  - Add web domain to CORS in CMS (https://www.sanity.io/docs/connect-your-content-to-next-js)

https://medium.com/@nirbenyair/headless-components-in-react-and-why-i-stopped-using-ui-libraries-a8208197c268

https://react-spectrum.adobe.com/react-aria/index.html

https://github.com/ecklf/tailwindcss-radix

https://github.com/radix-ui/primitives/discussions/1000

https://github.com/pacocoursey/cmdk

https://icons.radix-ui.com/

https://design-system.modulz-deploys.com/#

https://blog.makerx.com.au/styling-radix-ui-components-using-tailwind-css/

How stick position works:
https://elad.medium.com/css-position-sticky-how-it-really-works-54cd01dc2d46
