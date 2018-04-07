
module.exports = function(sequelize, Sequelize) {

   // User Sequelize Schema
   const Digibyte = sequelize.define('digibyte', {
    actualClose: { type: Sequelize.DOUBLE, notNull: true },
    predictedClose: { type: Sequelize.DOUBLE, notNull: true }
  });

return Digibyte;

}