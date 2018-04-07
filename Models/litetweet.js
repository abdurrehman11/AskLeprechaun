
module.exports = function(sequelize, Sequelize) {

   // Lite Tweets Sequelize Schema
   const LiteTweet = sequelize.define('litetweet', {
    polarity: { type: Sequelize.DOUBLE, notNull: true },
    timestamp: { type: Sequelize.BIGINT, notNull: true }
  });

return LiteTweet;

}