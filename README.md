# Todo-App-Express-Vue
Simple Todo App with Express and Vue.

There is possible to add a new todo.
 
Filter todos that already exist in the database.

You can delete all the todos in the database one by one. 
>## Client Setup
---
   **Main folder:**
    
    First: cd client

    Second: npm install
---
**Compiles and hot-reloads for client development**

    npm run serve
---
**Compiles and minifies for production**

It builds production files to **server/src/client/public** folder

    npm run build
---
**Lints and fixes files**

    npm run lint    
---
> ## Server Setup
---
   **Main folder:**
    
    npm install
---
**Compiles and hot-reloads for server development (uses nodemon)**

    npm run dev
---
**Run server in production mode**

    npm run start
---
**Add your database details**

    server/src/config/config.js
        Replace:
        YOUR_DB_USER = your database username (must be STRING)
        YOUR_DB_PASSWORD = your database password (must be STRING)

    server/src/app.js 
        Replace: 
        YOUR_DB_URL = your database URL (must be STRING)
---
**Routes**

    localhost:5000

    GET: /todos:limit?
    POST: /todos/add
    PUT: /todos/edit/:id
    DELETE: /todos/delete/:id
---
        