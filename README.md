# Junyi Frontend JSON Server

## Setup

1. `$ npm install`
2. `$ npm run db:reset`
3. `$ npm start`

## Add new schema

1. `$ touch src/schemas/<FILE_NAME>.schema.js`
2. create your schema and export it
3. import your schema into `src/index.js`
4. modify `required`, `properties`, `definitions` in schema
5. `$ npm run db:reset`

## Useful resource

1. [json-server](https://github.com/typicode/json-server)
2. [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker/blob/master/docs/USAGE.md)
3. [json-schema-faker live demo](https://json-schema-faker.js.org/)
4. [faker](https://github.com/Marak/Faker.js)
