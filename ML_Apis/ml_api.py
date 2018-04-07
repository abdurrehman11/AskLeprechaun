from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'askleprechaun'
app.config['MYSQL_HOST'] = 'localhost'

mysql = MySQL(app)

@app.route('/predict', methods=['POST'])
def addOne():
	idval = request.json['val1']
	predict = request.json['val2']
	actual = request.json['val3']
	created = request.json['val4']
	updated = request.json['val5']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO prices (id, actualClose, predictedClose, createdAt, updatedAt) VALUES (%s, %s, %s, %s, %s)''', (idval, actual, predict, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# Ethereum route
@app.route('/ethereum', methods=['POST'])
def addEthereumPrice():
	predict = request.json['val1']
	actual = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO ethereums (actualClose, predictedClose, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (actual, predict, created, updated))
	mysql.connection.commit()
	return "Value inserted into database" 

# Lite route
@app.route('/lite', methods=['POST'])
def addLitePrice():
	predict = request.json['val1']
	actual = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO lites (actualClose, predictedClose, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (actual, predict, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# Dash route
@app.route('/dash', methods=['POST'])
def addDashPrice():
	predict = request.json['val1']
	actual = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO dashes (actualClose, predictedClose, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (actual, predict, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# Digibyte route
@app.route('/digibyte', methods=['POST'])
def addDigibytePrice():
	predict = request.json['val1']
	actual = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO digibytes (actualClose, predictedClose, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (actual, predict, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# Ripple route
@app.route('/ripple', methods=['POST'])
def addRipplePrice():
	predict = request.json['val1']
	actual = request.json['val2']
	created = request.json['val3']
	updated = request.json['val4']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO ripples (actualClose, predictedClose, createdAt, updatedAt) VALUES (%s, %s, %s, %s)''', (actual, predict, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"

# Tweets route
@app.route('/tweet', methods=['POST'])
def addTweetPolarity():
	#idval = request.json['val1']
	polarity = request.json['val1']
	created = request.json['val2']
	updated = request.json['val3']
	cur = mysql.connection.cursor()
	cur.execute('''INSERT INTO tweets (polarity, createdAt, updatedAt) VALUES (%s, %s, %s)''', (polarity, created, updated))
	mysql.connection.commit()
	return "Value inserted into database"
	
if __name__ == '__main__':
	app.run(debug=True)	