from flask import Flask, render_template, request
app = Flask(__name__)
@app.route('/')
def func():
    print(request.args())
    return render_template('index.html')
if __name__ == '__main__':
    app.run(host='localhost', debug=True)