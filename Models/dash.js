
module.exports = function(sequelize, Sequelize) {

   // User Sequelize Schema
   const Dash = sequelize.define('dash', {
    actualClose: { type: Sequelize.DOUBLE, notNull: true },
    predictedClose: { type: Sequelize.DOUBLE, notNull: true }
  });

return Dash;

}