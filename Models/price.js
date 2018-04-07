
module.exports = function(sequelize, Sequelize) {

   // User Sequelize Schema
   const Price = sequelize.define('price', {
    actualClose: { type: Sequelize.DOUBLE, notNull: true },
    predictedClose: { type: Sequelize.DOUBLE, notNull: true }
  });

return Price;

}