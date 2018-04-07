from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'askleprechaun'
app.config['MYSQL_HOST'] = 'localhost'

mysql = MySQL(app)

# Tweets route
@app.route('/tweet', methods=['POST'])
def addTweetPolarity():
	polarity = request.json['val1']
	timestamp = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO tweets (polarity, timestamp, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (polarity, timestamp, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# EthereumTweet route
@app.route('/ethereumtweet', methods=['POST'])
def ethereumTweetPolarity():
	polarity = request.json['val1']
	timestamp = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO ethereumtweets (polarity, timestamp, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (polarity, timestamp, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# LiteTweet route
@app.route('/litetweet', methods=['POST'])
def liteTweetPolarity():
	polarity = request.json['val1']
	timestamp = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO litetweets (polarity, timestamp, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (polarity, timestamp, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# DigibyteTweet route
@app.route('/digibytetweet', methods=['POST'])
def digibyteTweetPolarity():
	polarity = request.json['val1']
	timestamp = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO digibytetweets (polarity, timestamp, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (polarity, timestamp, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# DashTweet route
@app.route('/dashtweet', methods=['POST'])
def dashTweetPolarity():
	polarity = request.json['val1']
	timestamp = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO dashtweets (polarity, timestamp, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (polarity, timestamp, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# RippleTweet route
@app.route('/rippletweet', methods=['POST'])
def rippleTweetPolarity():
	polarity = request.json['val1']
	timestamp = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO rippletweets (polarity, timestamp, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (polarity, timestamp, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"	
	
if __name__ == '__main__':
	app.run(debug=True)	