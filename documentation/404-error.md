# Resolving 404 Errors on GitHub Pages for React Projects with Routing

## Problem

When creating a React project with routing (e.g., `/blog` or `/career`), refreshing these pages on GitHub Pages results in a 404 error, stating that the page is not found.

## Reason

This issue arises because React applications are single-page applications (SPAs). When a user navigates to a specific route and refreshes the page, GitHub Pages attempts to load that route directly from the server, which does not have a corresponding static file for the specific route.

## Solution

To resolve this issue, follow these steps:

1. **Modify `index.html`**
   
   In the `public` directory, open `index.html` and add the following script just before the `</head>` tag:

   ```html
   <script type="text/javascript">
       (function (l) {
           if (l.search[1] === "/") {
               var decoded = l.search
                   .slice(1)
                   .split("&")
                   .map(function (s) {
                       return s.replace(/~and~/g, "&");
                   })
                   .join("?");
               window.history.replaceState(
                   null,
                   null,
                   l.pathname.slice(0, -1) + decoded + l.hash
               );
           }
       })(window.location);
   </script>
   ```

2. **Create `404.html`**

   Create a file named `404.html` in your `public` directory and include the following HTML snippet:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Redirecting...</title>
       <meta http-equiv="refresh" content="0; url=/" />
   </head>
   <body>
       <h1>Redirecting...</h1>
   </body>
   </html>
   ```

3. **Ensure CNAME File Exists**

   If you are using a custom domain, make sure you have a file named `CNAME` in your `public` folder containing your custom domain.

4. **Build the Project**

   Run the following command to build your project:

   ```bash
   npm run build
   ```

5. **Rename the Build Folder**

   Change the build folder name to `docs`, as GitHub Pages by default only picks the `docs` folder for serving content.

6. **Push Changes to GitHub**

   After renaming the folder, use the following commands to push your changes to GitHub:

   ```bash
   git add .
   git commit -m "Update GitHub Pages configuration"
   git push
   ```

7. **Configure GitHub Pages**

   In your GitHub repository settings:
   - Navigate to the **Pages** section.
   - Select the branch containing the `docs` directory.
   - Choose `docs` for the directory option.
   - Click on **Save**.

By following these steps, you will successfully resolve the 404 errors on your React project hosted on GitHub Pages when refreshing routed pages.