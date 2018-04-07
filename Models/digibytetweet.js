
module.exports = function(sequelize, Sequelize) {

   // Digibyte Tweets Sequelize Schema
   const DigibyteTweet = sequelize.define('digibytetweet', {
    polarity: { type: Sequelize.DOUBLE, notNull: true },
    timestamp: { type: Sequelize.BIGINT, notNull: true }
  });

return DigibyteTweet;

}