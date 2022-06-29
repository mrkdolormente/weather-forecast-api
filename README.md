# Weather Forecast App

This project is develop to easily monitor and access weather updates within the specific location of the user choice. It is build and design in angular framework as the client-side and node.js for the server-side. Click here to know more about [Angular](https://angular.io/) and [Node.js](https://nodejs.org/en/).

## Get Started

The back-end service is running using Express.js as framework and PostgreSQL as the database.

### Clone the Repo

```shell
git clone https://github.com/mrkdolormente/weather-forecast-api.git
cd weather-forecast-api
```

### Install npm packages

```shell
npm install
```

### Development server

Run `npm start` command to run the development server locally. After running the dev server, open [postman](https://www.postman.com/) and create a GET request to `http://localhost:3000/`. The application will automatically reload if you change any of the source files with the use of [nodemon](https://www.npmjs.com/package/nodemon).

### Database

Since the application is using PostgreSQL as database, you need to install PostgreSQL in your local environment to run it locally. Download PostgreSQL [here](https://www.postgresql.org/download/).

### Env

Rename the `local.env` to `.env` and assign a value to the required properties

## Dependencies

### bcrypt

[bcrypt](https://www.npmjs.com/package/bcrypt) is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999.

### Body Parser

[Body Parser](https://www.npmjs.com/package/body-parser) is a Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.

### CORS

[CORS](https://www.npmjs.com/package/cors) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Dotenv

[Dotenv](https://www.npmjs.com/package/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### Express

[Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### JSON Web Token

[JSON Web Token (JWT)](https://jwt.io/introduction) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

### Knex

[Knex.js](http://knexjs.org/) is a SQL query builder for PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.

### pg

[pg](https://www.npmjs.com/package/pg) is Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings. To read more about PostgreSQL click [here](https://www.postgresql.org/).

## Git Convention

### Branch

- `feature/*` - for new feature, functionality and breaking changes
- `bug/*` - for bug fixes
- `release/*` - for production releases

### Additional Note

Always rebase the current branch to the main branch before pusing to the origin.
