# Hypermedia Applications - Dua Tiranën

#### Opening the app

[Deployment on Heroku](https://dua-tiranen.herokuapp.com/)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# Backend Documentation

## General group information

**Course:** Hypermedia Applications (Web and Multimedia)

**Group Name:** Alit

| Member | First name | Last Name | Person Code | Email address                     |
| ------ | ---------- | --------- | ----------- | --------------------------------- |
| 1      | Alessio    | Ferrara   | 10826871    | alessio2.ferrara@mail.polimi.it   |
| 2      | Francesco  | Mazzola   | 10864060    | francesco2.mazzola@mail.polimi.it |
| 3      | Kristina   | Ropi      | 10801067    | francesco2.mazzola@mail.polimi.it |
| 3      | Ermenda    | Hoxha     | 10801074    | francesco2.mazzola@mail.polimi.it |

## Specification

#### Web Architecture

![Web Architecture](public/backend/img/web-architecture.jpg "Web Architecture")

Our web application's architecture is built on three layers:

<ul>
<li>Data layer</li>
<li>Application</li>
<li>Presentation</li>
</ul>

The data layer is implemented through the <code>PostgreSQL</code> database, which contains the application data.

The application layer is implemented through the backend software which exposes a REST API (under the endpoint <code>/api</code>) to the public in order to enable the interaction with frontend using a <code>Express</code> server. This layer contains three components, router, controllers, and models. The models interacts with the data layer to retrieve the data from database using a SQL query builder for Postgress named <code>Sequelize</code> provided by node package manager (npm).

The presentation layer is implemented through the <code>Vue.js</code> JavaScript framework. For the frontend part <code>Bootstrap 5</code> framework together with <code>MDBootstrap </code> has been used to satisfy responsiveness.

### Data model

In our models we have:

- Content
- POI
- POI Image
- POI Itinerary
- POI Types
- Event
- Event Image
- Itinerary
- Service
- Service Types
- Opening Hours

Here is the ER diagram of the model:
![ER Diagram](public/backend/img/er_diagram.png "ER Diagram")

![Logical Design](public/backend/img/logical_design.png "Logical Design")

## Implementation

### Tools used

- <code>Nuxt.js</code>
- <code>HTML</code> / <code>CSS</code> / <code>JavaScript</code>
- <code>JSON</code>
- <code>SQL</code>
- <code>Bootstrap</code> / <code>MDBootstrap</code> / <code>axios</code> / <code>Vue.js</code> framework for frontend
- <code>Sequelize</code> framework for backend

The technology stack and tools that were used:
 - <code>Vue.js</code> and <code>Nuxt.js</code> as JavaScript frameworks.
 - <code>Javascript</code> on <code>Node.js</code> runtime using <code>npm</code> as the default package manager.
 - <code>Postman</code> for testing the API completly but we could also use [Swagger inspector](https://inspector.swagger.io/).
 - <code>Postgres</code> RDBMS and <code>pg Admin 4</code> query tool
 - <code>axios</code> to retrieve data from API
 - <code>Visual Studio Code</code> as a text editor embedded with linter to analyzes source code in order to flag programming errors, bugs, stylistic errors, and suspicious constructs.
 - <code>Developer tools</code> embedded in Google chrome.


The node packages that were used:
  - <code>pg</code> node-postgres (aka pg) is a collection of Node.js modules for interfacing with PostgreSQL database.
  - <code>sequelize</code> as an ORM tool for PostgresSQL
  - <code>nodemailer</code> to allow email sending.


### Environments

We used localhost testing environment for development. The environment composed by Vue.js, Nuxt.js, Express.js, Node.js, Postgres and PGAdmin.

The production environment is hosted on Heroku. They provide a ready to use Postgres database and a NodeJS environment.

### Project structure

```
.
└── .nuxt                 # Nuxt files
└── assets                # Contains css files.
└── components            # Contains all the components used in the frontend
└── layots                # define standard layouts for 
└── mixins                # define common methods used in   more pages.
└── pages                 # contains all the pages of the application
└── plugins               # contains all the plugins used in the pages.
└── server  
    ├── config/            # contains all the config files for the backend server.
    ├── controllers/       # contains all the files that handle application logic.
    ├── migration/         # contains all the migration files of the database.
    ├──models/             # Contains all the data models.
    ├──routes/             # Contains all the api routings.
    ├──seeders/            # Contains the seeders files of the database.
    ├──api.js              # Contains the logic of the backend server.
    ├──http-error.js       # A file used to handle backend errors messages.
├── static                # contains all the static file of the application.
├── .env                  # contains the environment variables
├── nuxt.config.js        # contains all the nuxt configuration details about the application.
├── package.json          # npm project dependencies
└── README.md             # git documentation
```

### Discussion

<blockquote>How, in your opinion, you were relevant to the best practices of the framework used?</blockquote>

We decided to adopt SSR (Server Side Rendering) in our application due to the following reasons:

- <code>Faster time-to-content: </code> 
Server-rendered markup doesn't need to wait until all JavaScript has been downloaded and executed to be displayed, so your user will see a fully-rendered page sooner. In addition, data fetching is done on the server-side for the initial visit, which likely has a faster connection to your database than the client.

- <code>Improve the SEO:</code>
The search engine crawlers will directly see the fully rendered page. Thus the position of our website on the search results will increase, increasing also the visibility of the website.
