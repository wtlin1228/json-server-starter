const { resolve, extend } = require("json-schema-faker");
const fs = require("fs");

// schemas
const { user } = require("./schemas/user.schema");

extend("faker", () => require("faker"));

const schema = {
  type: "object",
  required: ["users"],
  properties: {
    users: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/user" },
    },
  },
  definitions: {
    user,
    positiveInt: {
      type: "integer",
      minimum: 0,
      exclusiveMinimum: true,
    },
  },
};

resolve(schema).then((sample) => {
  console.log("Writing to db.json");
  fs.writeFile(`./dist/db.json`, JSON.stringify(sample), function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("done");
    }
  });
});
