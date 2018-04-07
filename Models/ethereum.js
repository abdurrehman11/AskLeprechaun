
module.exports = function(sequelize, Sequelize) {

   // User Sequelize Schema
   const Ethereum = sequelize.define('ethereum', {
    actualClose: { type: Sequelize.DOUBLE, notNull: true },
    predictedClose: { type: Sequelize.DOUBLE, notNull: true }
  });

return Ethereum;

}