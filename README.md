# Cincy FCM Website
This is the source for the Greater Cincinnati Fellowship of Christian Magicians website.

## Member Pages
If you're an active member, you can have a page on the site. The pages are located in the source/members/ directory. The files should be named your-name.md. The front matter data appearing at the top of the file controls various aspects of the page, such as how it appears in the site menu and what is displayed when the page appers in Google. The details are described below. The text following the front matter is the contents of the page, and is in [Markdown format](https://www.markdownguide.org/cheat-sheet/).

    title: Your Name (Appears on the browsers title bar, and in Gogle or other search engines.)

    description: Description to appear when the page appears in Google or other serch engine (Optional)
    
    featured: (Optional)
      image: /img/inage-file-name.jpg (Featured image at top of your page. Image must be in source/img directory.)
      alt: Alt text (Description of your image. Used by screen readers.)
    
    tags: member (Must be set to "member" to appear on the member page.
    
    eleventyNavigation:
      key: Lastname (Used to sort members in the menu)
      title: Your Name (Text appearing in the menu)
      parent: Members (Controls where the page appers in the menu. Must be set to "Members.")

If you're technically inclined, you can do a pull request to add or change your page. Otherwise,
just contact me with the requested changes and I'll take care of it.

## Technical Details
This is a simple website generated using [Eleventy](https://www.11ty.dev/) and hosted by [Netlify](https://www.netlify.com/). Any changes committed to the master brach here are automatically deployed to the live site: <https://www.cincyfcm.org>.
