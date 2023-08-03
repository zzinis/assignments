import pymysql
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

db = pymysql.connect(
    user='root',
    passwd='pw',
    host='127.0.0.1',
    db='phyton',
    charset='utf8'
)
