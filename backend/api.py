from flask import Flask,request
from flask_restful import Resource, Api
import pymongo

app = Flask(__name__)
api = Api(app)

tasks_list = [
    {
        "id":1,
        "name":"Emailing Task",
        "description":"Build RPA Workflow for Auto Emailing Users",
        "start_time":"08:00 am",
        "end_time":"08:30 am",
    },
    {
        "id":2,
        "name":"Update Computations",
        "description":"Update the report with the latest data and findings",
        "start_time":"09:00 am",
        "end_time":"10:30 am",
    },
    {
        "id":3,
        "name":"Call Boss regarding new potential",
        "description":"Call director to report the conversation on the elevator",
        "start_time":"11:00 am",
        "end_time":"11:40 am",
    },
    {
        "id":4,
        "name":"Audit X Client",
        "description":"Send initial reqiests for information on the upcoming audit",
        "start_time":"12:00 pm",
        "end_time":"01:30 pm",
    },
    {
        "id":5,
        "name":"Have Lunch",
        "description":"Enjoy some lunch with Team members",
        "start_time":"01:30 pm",
        "end_time":"2:30 pm",
    }
]

class TasksList(Resource):
    def get(self):
        return tasks_list

    def post(self):
        data = request.get_json()
        data["id"] = len(tasks_list)+1
        tasks_list.append(data)
        return data


class SingleTask(Resource):

    def get_or_404(self,id):
        task = [task for task in tasks_list if task["id"]==int(id)]
        if task:
            return task[0]
        else:
            return {"message":"404 Not Found"}

    def get(self,id):
        return self.get_or_404(id)

    def put(self,id):
        data = request.get_json()
        for k,v in data.items():
            tasks_list[int(id)-1][k]=v
        return tasks_list[int(id)-1]

    def delete(self,id):
        tasks_list.pop(int(id)-1)
        return {"message":"401 Removed"}


api.add_resource(TasksList, '/tasks/')
api.add_resource(SingleTask, '/tasks/<string:id>/')


if __name__ == '__main__':
    app.run(debug=True)