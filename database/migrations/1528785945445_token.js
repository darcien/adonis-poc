"use strict";

const Schema = use("Schema");

class TokensSchema extends Schema {
  up() {
    this.create("tokens", table => {});
  }

  down() {
    this.drop("tokens");
  }
}

module.exports = TokensSchema;
