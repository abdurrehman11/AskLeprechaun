
module.exports = function(sequelize, Sequelize) {

   // User Sequelize Schema
   const Tweet = sequelize.define('tweet', {
    polarity: { type: Sequelize.DOUBLE, notNull: true }
  });

return Tweet;

}