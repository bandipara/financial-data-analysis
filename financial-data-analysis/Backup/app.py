from flask import Flask, render_template, jsonify, request
from flask_pymongo import MongoClient
from flask_cors import CORS, cross_origin
# import json
# from bson import json_util
# from bson.json_util import dumps

app = Flask(__name__)

# app.config['MONGO_DBNAME'] = 'financialdata'
# app.config['MONGO_URI'] = 'mongodb://datauser:Data412020@dataproject-shard-00-00-lmcpx.mongodb.net:27017,dataproject-shard-00-01-lmcpx.mongodb.net:27017,dataproject-shard-00-02-lmcpx.mongodb.net:27017/test?ssl=true&replicaSet=dataproject-shard-0&authSource=admin&retryWrites=true&w=majority'
# mongo = PyMongo(app)


client = MongoClient("mongodb://datauser:Data412020@dataproject-shard-00-00-lmcpx.mongodb.net:27017,dataproject-shard-00-01-lmcpx.mongodb.net:27017,dataproject-shard-00-02-lmcpx.mongodb.net:27017/test?ssl=true&replicaSet=dataproject-shard-0&authSource=admin&retryWrites=true&w=majority")
db = client.financialdata

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/aig', methods=['GET'])
@cross_origin()
def aigdata():
    dbcollection = db['AIG']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})
    #collection = mongo.db.AIG
    # documents = [doc for doc in collection.find({}, {"_id":0})]
    # return jsonify({'cursor': documents})
    # documents = [doc for doc in collection.find({})]
    # return json_util.dumps({'cursor': documents})

    #results = collection.find()
    # output = []
    # for q in collection.find():
    #     output.append({
    #         'Date_Readable': q['Date_Readable'], 'Date_Unix_UTC': q['Date_Unix_UTC'], 'Open': q['Open'], 'Close': q['Close'], 'High': q['High'], 'Low': q['Low'], 'Volume': q['Volume']})
    # return jsonify({'result': output})

if __name__ == '__main__':
    app.run(debug=True)