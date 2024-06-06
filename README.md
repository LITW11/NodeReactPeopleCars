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
