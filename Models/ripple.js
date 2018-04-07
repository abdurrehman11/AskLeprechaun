
module.exports = function(sequelize, Sequelize) {

   // User Sequelize Schema
   const Ripple = sequelize.define('ripple', {
    actualClose: { type: Sequelize.DOUBLE, notNull: true },
    predictedClose: { type: Sequelize.DOUBLE, notNull: true }
  });

return Ripple;

}