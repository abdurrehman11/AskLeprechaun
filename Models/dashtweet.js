
module.exports = function(sequelize, Sequelize) {

   // Dash Tweets Sequelize Schema
   const DashTweet = sequelize.define('dashtweet', {
    polarity: { type: Sequelize.DOUBLE, notNull: true },
    timestamp: { type: Sequelize.BIGINT, notNull: true }
  });

return DashTweet;

}