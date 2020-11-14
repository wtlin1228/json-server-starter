const user = {
  type: "object",
  required: [
    "id",
    "firstName",
    "lastName",
    "age",
    "email",
    "username",
    "avatar",
  ],
  properties: {
    id: {
      $ref: "#/definitions/positiveInt",
    },
    firstName: {
      type: "string",
      faker: "name.firstName",
    },
    lastName: {
      type: "string",
      faker: "name.lastName",
    },
    age: {
      type: "integer",
      maximum: 70,
      minimum: 18,
    },
    email: {
      type: "string",
      faker: "internet.email",
    },
    username: {
      type: "string",
      faker: "internet.userName",
    },
    avatar: {
      type: "string",
      faker: "internet.avatar",
    },
  },
};

module.exports = { user };
