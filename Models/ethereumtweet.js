
module.exports = function(sequelize, Sequelize) {

   // Ethereum Tweets Sequelize Schema
   const EthereumTweet = sequelize.define('ethereumtweet', {
    polarity: { type: Sequelize.DOUBLE, notNull: true },
    timestamp: { type: Sequelize.BIGINT, notNull: true }
  });

return EthereumTweet;

}