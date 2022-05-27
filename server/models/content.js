'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    static getContentByPage = async function (page) {
      try {
        const contentData = await Content.findAll({
          where: { page: page },
        });
        let contentLast = {};
        contentData.forEach(cont => {
          let field = cont.dataValues.field;
          contentLast[field] = cont.dataValues.text;
        });
        return contentLast;
      } catch (error) {
        throw error;
      }
    };

  }
  Content.init({
    page: DataTypes.STRING,
    field: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};