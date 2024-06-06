# Node With React Setup

To create a new Node application with react, do the following:

```
mkdir MyReactNodeApp
cd MyReactNodeApp
mkdir api
cd api
npm init -y
npm i express mssql msnodesqlv8 camelcase-object-deep
cd ..
npm create vite@latest clientapp //Note: make sure to choose React and then Javascript
cd clientapp
npm i axios bootstrap react-router-dom
```

At this point, you'll have the folder structure with both the backend (in the `api` folder) and the front end (in the `clientapp` folder).

Then, open the vite.config.js file and paste the following:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort : true,
    proxy: {
      '/api' : {
        target: 'http://localhost:4000', //this is assuming your node app is running on port 4000
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
```

To run this, you'll need two terminals. In the API folder, run `nodemon app.js` and then in the clientapp folder (in a different terminal) run `npm run dev`

When pushing to Github, you can open the folder in Visual Studio like so:

<img width="909" alt="image" src="https://github.com/LITW11/NodeReactPeopleCars/assets/159099703/2823b7ec-bd18-4c6a-81f6-47d583da6eb4">

From there, navigate to the root (top level) folder of your Node app, and click "Select Folder". Then when setting up Git and choosing "Local Only" make sure to follow the screenshot below:

<img width="699" alt="Screenshot 2024-06-05 at 10 01 26 PM" src="https://github.com/LITW11/NodeReactPeopleCars/assets/159099703/4cb9487a-b9bc-439a-bcd4-c161804e78f0">

After that, it's the same that we've always done.
