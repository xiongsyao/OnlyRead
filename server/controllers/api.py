# -*- coding:utf-8 -*-

from flask import jsonify
from server import app,cache
from server.spiders.jobbole import Jobbole



@app.route('/')
def hello():
	return 'Hello,World!'


@app.route('/api/jobbole/news/<page>', methods=['GET','POST'])
@cache.cached(timeout=360)
def get_jobbole_news(page = 1):
	jobbole = Jobbole(page)
	news = jobbole.get_news()

	return jsonify(
		message = 'OK',
		data = news
	)