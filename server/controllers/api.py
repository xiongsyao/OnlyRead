# -*- coding:utf-8 -*-

from flask import jsonify
from server import app,cache
from server.spiders.jobbole import Jobbole,J_Detail



@app.route('/')
def hello():
	return 'Hello,World!'


@app.route('/api/jobbole/news/<page>', methods=['GET'])
@cache.cached(timeout=60*6)
def get_jobbole_news(page = 1):
	jobbole = Jobbole(page)
	news = jobbole.get_news()

	return jsonify(
		message = 'OK',
		data = news
	)

@app.route('/api/jobbole/content/<id>', methods=['GET'])
@cache.cached(timeout=60*60*60)
def get_detail_content(id = 37081):
	detail = J_Detail(id)
	content = detail.get_detail()

	return jsonify(
		message = 'OK',
		data = content
	)