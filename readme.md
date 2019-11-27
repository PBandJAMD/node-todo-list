<!-- ![ToDo](https://media.giphy.com/media/YLHwkqayc1j7a/giphy.gif)

# To Do List
Let's make a full CRUD app!

## Learning Objectives
* Express (MVC pattern)
* Mustache Templating
* CRUD Functionality
* PG-Promise (Postgresql Integration)

## Setup
No starter files!

## Completion
Parts 1 - 5 are required for completion
parts 6 - 8 are BONUS!

## Submission
Homework is due Tuesday

## Assignment
Tonight we're going to make our ~~first~~ second real, To Do List app! To Do Lists might not be the most exciting app to build, but it's a great way to practice implementing full CRUD functionality in a web application.

#### Part 1 - Create a new Node App
Directions are going to be a little more sparse as you should be able to start remembering all the steps you need to perform.

* Create a folder for your application
* Initialize your Node app
* Set up the folder structure for your app - For example: `views`, `controllers`, `models`, `public`, etc
* `npm install --save` any modules you might need
    - express
    - mustache-express
    - body-parser
    - pg-promise
* Add a `.gitignore` file and add the following text to it:
    - `node_modules/`

* Prepare as much of the app structure as you can remember. Before you actually start coding, perform an initial `git commit`.

#### Part 2 - Set Up the Database

* Enter `psql` and create a new database called `todo_app` OR Mac users can simply do `createdb todo_app` in terminal.
* Create a `migrations.sql` file in the folder `db/`
* In `migrations.sql`, create a table called `tasks`
* `tasks` should have columns for:
    - id
    - subject
    - content
* Once your migration is ready, to run it with the command `psql -d todo_app -f ./db/migrations.sql`
* Make sure your database is set up properly before moving on

#### Part 3 - Core App Functionality

Hopefully at this point the setup process for Node/Express apps is becoming more familiar. Set up the following files/folders:

**public/js**
* `index.js`
* **Controllers**
    - `index.js`
    - `controller.js`
* **Views**
    - `index.html` This should just be the landing page, with a link to all.html
    - `all.html` This should list all of the Todo items. Just the subject is fine
    - `show.html` This should only show ONE Todo item, showing the subject AND content
    - `new.html` This should be a form where you can create a new Todo item

Before moving on, make sure that your To Do app starts without any errors and can display a simple index page.

#### Part 4 - Set Up Our Model

Now let's connect our Postgres database with our app using **pg-promise**.

* Within `db/`, create a `index.js` file
* In `index.js`, using **pg-promise**, establish a connection to your postgres database called `todo_app`
* Export this database
* Within `models`, create a `task.js` file. This should look like controller.js from the Pokemon app we did in class
* In `task.js`, create a `Task` object with methods for findAll, findById, and create
* Remember to export this model
* Now would be a good time to open `psql` it the terminal and manually insert a row into our `tasks` table so that we can test our **model** later

#### Part 5 - Confirm Everything Works

Let's put the finishing touches on this To Do app and confirm everything works.

* Make sure there is something in your `tasks` table so that we can test our To Do app
* Update your **controller** to `require` the `Task` model and pass data to the view (something like `router.get(...)`)
* Update your **views** to incorporate the data being fed from the **controller** (I mean using `{{ mustache }}` )
* Spin up your server, navigate to `localhost:8000/tasks` and confirm that your `all.html` is being rendered with data from your `tasks` table

If you made it this far, congrats! You finished the required portion of the homework. If you have the time or energy, it would be a really good idea to tackle the bonus for this homework.

#### Part 6 - BONUS - Edit Functionality

Implement UPDATE functionality. You'll need to add an Edit **view** and update the **controller** and **model**.

#### Part 7 - BONUS - Delete Functionality

Implement DELETE functionality. Think about what files need to be updated to make this work.

#### Part 8 - BONUS - Style this bad boy so it looks nice! -->
