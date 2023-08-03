import pymysql
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.template_folder = './templates'

try:
    db = pymysql.connect(
        user='root',
        passwd='',
        host='127.0.0.1',
        db='python_test',
        charset='utf8'
    )
except pymysql.Error as e:
    print("MySQL Connection Error:", e)


# 데이터 조회
def fetch_data():
    try:
        cursor = db.cursor()
        query = "SELECT * FROM try_test;"
        cursor.execute(query)
        data = cursor.fetchall()
        cursor.close()
        return data
    except pymysql.Error as e:
        print("MySQL Query Error:", e)
        return []

# 데이터 추가


def insert_data(name, age):
    try:
        cursor = db.cursor()
        query = "INSERT INTO try_test (name, age) VALUES (%s, %s);"
        cursor.execute(query, (name, age))
        db.commit()
        cursor.close()
    except pymysql.Error as e:
        print("MySQL Insert Error:", e)


@app.route('/')
def index():
    data = fetch_data()
    return render_template('index.html', data=data)


@app.route('/add', methods=['POST'])
def add_data():
    name = request.form['name']
    age = request.form['age']
    insert_data(name, age)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
