from flask import Flask, render_template, jsonify, request
from flask_pymongo import MongoClient
from flask_cors import CORS, cross_origin

app = Flask(__name__)

client = MongoClient("mongodb://datauser:Data412020@dataproject-shard-00-00-lmcpx.mongodb.net:27017,dataproject-shard-00-01-lmcpx.mongodb.net:27017,dataproject-shard-00-02-lmcpx.mongodb.net:27017/test?ssl=true&replicaSet=dataproject-shard-0&authSource=admin&retryWrites=true&w=majority")
db = client.financialdata

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/AIG', methods=['GET'])
@cross_origin()
def AIG():
    dbcollection = db['AIG']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/ALL', methods=['GET'])
@cross_origin()
def ALL():
    dbcollection = db['ALL']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/AON', methods=['GET'])
@cross_origin()
def AON():
    dbcollection = db['AON']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/AXP', methods=['GET'])
@cross_origin()
def AXP():
    dbcollection = db['AXP']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/BAC', methods=['GET'])
@cross_origin()
def BAC():
    dbcollection = db['BAC']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/BK', methods=['GET'])
@cross_origin()
def BK():
    dbcollection = db['BK']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/BLK', methods=['GET'])
@cross_origin()
def BLK():
    dbcollection = db['BLK']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/BRKB', methods=['GET'])
@cross_origin()
def BRKB():
    dbcollection = db['BRKB']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/C', methods=['GET'])
@cross_origin()
def C():
    dbcollection = db['C']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/CB', methods=['GET'])
@cross_origin()
def CB():
    dbcollection = db['CB']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/COF', methods=['GET'])
@cross_origin()
def COF():
    dbcollection = db['COF']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/GS', methods=['GET'])
@cross_origin()
def GS():
    dbcollection = db['GS']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/ICE', methods=['GET'])
@cross_origin()
def ICE():
    dbcollection = db['ICE']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/JPM', methods=['GET'])
@cross_origin()
def JPM():
    dbcollection = db['JPM']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/MCO', methods=['GET'])
@cross_origin()
def MCO():
    dbcollection = db['MCO']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/MET', methods=['GET'])
@cross_origin()
def MET():
    dbcollection = db['MET']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/MMC', methods=['GET'])
@cross_origin()
def MMC():
    dbcollection = db['MMC']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/MS', methods=['GET'])
@cross_origin()
def MS():
    dbcollection = db['MS']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/PGR', methods=['GET'])
@cross_origin()
def PGR():
    dbcollection = db['PGR']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/PNC', methods=['GET'])
@cross_origin()
def PNC():
    dbcollection = db['PNC']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/SCHW', methods=['GET'])
@cross_origin()
def SCHW():
    dbcollection = db['SCHW']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/SPGI', methods=['GET'])
@cross_origin()
def SPGI():
    dbcollection = db['SPGI']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/TFC', methods=['GET'])
@cross_origin()
def TFC():
    dbcollection = db['TFC']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/USB', methods=['GET'])
@cross_origin()
def USB():
    dbcollection = db['USB']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/WFC', methods=['GET'])
@cross_origin()
def WFC():
    dbcollection = db['WFC']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

@app.route('/REALTIME', methods=['GET'])
@cross_origin()
def REALTIME():
    dbcollection = db['REALTIME']
    documents = [doc for doc in dbcollection.find({}, {"_id":0})]
    return jsonify({'result': documents})

if __name__ == '__main__':
    app.run(debug=True)