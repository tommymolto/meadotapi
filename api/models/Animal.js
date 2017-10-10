"use strict";

/**
 * Animal
 * @description :: Model for storing Animal records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    nome:{
      type:"string"
    },descricao:{
      type:"string"
    },contato:{
      type:"string"
    },foto:{
      type:"string"
    },tipo:{
      type:"string"
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
