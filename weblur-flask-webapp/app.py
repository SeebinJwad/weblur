from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def func():
    if request.method == "POST":
        data = request.form.get('candidate')
        return data
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host='localhost', debug=True)