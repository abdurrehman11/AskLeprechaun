
module.exports = function(sequelize, Sequelize) {

   // User Sequelize Schema
   const Lite = sequelize.define('lite', {
    actualClose: { type: Sequelize.DOUBLE, notNull: true },
    predictedClose: { type: Sequelize.DOUBLE, notNull: true }
  });

return Lite;

}