from asyncio import all_tasks
from flask import Flask,request
from flask_restful import Resource, Api
from pymongo import MongoClient,ReturnDocument
from bson import json_util,ObjectId
import json
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
CORS(app)
# app.config['CORS_METHODS'] = ["GET", "HEAD", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"]
# app.config['CORS_AUTOMATIC_OPTIONS'] = True

client = MongoClient('localhost', 27017)
db = client["jets"]
tasks = db["tasks"] #Tasks Collection


class TasksList(Resource):
    def get(self):
        all_tasks = tasks.find({})
        all_taks_json = [];
        for t in all_tasks:
            print(t)
            all_taks_json.append(json.loads(json.dumps(t,default=str)))
        return all_taks_json,200

    def post(self):
        data = request.get_json()
        tasks.insert_one(data)
        return json.loads(json.dumps(data,default=str)),201


class SingleTask(Resource):

    def get_or_404(self,id):
        task = tasks.find_one({"_id":ObjectId(id)})
        if task:
            return json.loads(json.dumps(task,default=str))
        else:
            raise Exception("404 Not Found")

    def get(self,id):
        try:
            return self.get_or_404(id)
        except Exception as e:
            return {"message":str(e)},404 

    def put(self,id):
        try:
            data = request.get_json()
            task = tasks.find_one_and_update({"_id":ObjectId(id)},{"$set":data},return_document=ReturnDocument.AFTER)
            return json.loads(json.dumps(task,default=str)),204
        except Exception as e:
            return {"message":str(e)},400 

    def delete(self,id):
        task = tasks.find_one_and_delete({"_id":ObjectId(id)})
        if task:
            return json.loads(json.dumps(task,default=str)),200
        else:
            return {"message":"Object not found!"},404 


api.add_resource(TasksList, '/api/tasks/')
api.add_resource(SingleTask, '/api/tasks/<string:id>/')


# Deals with CORS for Now!
# @app.after_request
# def after_request(response):
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#     response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
#     return response


if __name__ == '__main__':
    app.run(debug=True)