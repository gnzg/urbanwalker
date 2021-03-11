# Urbanwalk

## About
Urbanwalk is a simplistic game intended as a technical demnostration of cloud-based RESTful communication via a NEM stack (Node.js, Express and MongoDB).

In this game, the protagonist makes his way across a post-apocalyptic megapolis where every interaction with the world is a RESTful request under the hood.

## Installation

First, install dependencies

```bash
npm install
```

Create an `.env` file in the project root directory and supply it your MongoDB credentials
```bash
API_URI=<credentialsAndMongoDbURI>
```

Once that is done, start the server
```bash
npm start
```

Once the world is generated, you are ready to venture out!