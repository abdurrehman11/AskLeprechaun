
module.exports = function(sequelize, Sequelize) {

   // Ripple Tweets Sequelize Schema
   const RippleTweet = sequelize.define('rippletweet', {
    polarity: { type: Sequelize.DOUBLE, notNull: true },
    timestamp: { type: Sequelize.BIGINT, notNull: true }
  });

return RippleTweet;

}