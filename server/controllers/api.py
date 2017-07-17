# -*- coding:utf-8 -*-

from flask import jsonify
from server import app
from server.spiders.jobbole import Jobbole


@app.route('/')
def hello():
	return 'Hello,World!'


@app.route('/api/jobbole/news/<page>', methods=['GET','POST'])
def get_jobbole_news(page = 1):
	jobbole = Jobbole(page)
	news = jobbole.get_news()
	page_info = {
		'totalPage': 15,
		'curPage': page
	}
	dataObj = {
		'list': news,
		'page': page_info
	}
	return jsonify(
		message = 'OK',
		data = dataObj
	)