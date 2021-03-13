# Urbanwalker

## About
Urbanwalker is a simplistic game intended as a technical demnostration of cloud-based RESTful communication via a NEM stack (Node.js, Express and MongoDB Atlas).

In this game, the protagonist makes his way across a post-apocalyptic megapolis where every interaction with the world is composed of one or more RESTful request under the hood.

<br/>

## Installation

First, install dependencies

```bash
npm install
```

Create an `.env` file in the project root directory and supply it your MongoDB Atlas credentials in the below format
```bash
DB_URI=<credentialsAndMongoDbURI>
```

Once that is done, start the server
```bash
npm start
```
<br/>

Once the world is generated, you are ready to venture out!