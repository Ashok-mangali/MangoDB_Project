from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb+srv://aashok59238:Ashok%402003@cluster0.rilh5me.mongodb.net/")
db = client['Profile']

@app.route('/api/data', methods=['GET', 'POST'])
def manage_data():
    if request.method == 'POST':
        # Insert data into MongoDB
               
        content = request.json
        db.Products.insert_one(content)
        return jsonify({'status': 'Data added'})
    elif request.method == 'GET':
        # Retrieve data from MongoDB

        data = list(db.Products.find({}, {'_id': 0})) 
        return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)