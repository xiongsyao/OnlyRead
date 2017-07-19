# -*- coding:utf-8 -*-

import requests
from lxml.html import fromstring,tostring
from multiprocessing.dummy import Pool as ThreadPool


class Jobbole(object):
    def __init__(self, page):
        self.url = 'http://top.jobbole.com/page/' + page + '/?sort=latest'
        self.user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
        self.headers = {'User-Agent': self.user_agent}
        self.records = []

    @staticmethod
    def get_news_info(element):

        try:
            id = element.cssselect('h3.p-tit a')[0].get('href', '')[-6:-1]
            title = element.cssselect('h3.p-tit a')[0].text
            time = element.cssselect('p.p-meta span')[0].text
        except:
            pass

        news_info = {
            'title': title,
            'content': '',
            'id': id,
            'time': time
        }

        return news_info

    def get_news(self):
        r = requests.get(self.url, headers=self.headers)
        page_source = r.text
        root = fromstring(page_source)
        elements = root.xpath('//li[@class="media"]')

        pool = ThreadPool(8)
        self.records = pool.map(self.get_news_info, elements)
        pool.close()
        pool.join()

        return self.records


class J_Detail(object):
    def __init__(self, id):
        self.url = 'http://top.jobbole.com/' + id
        self.user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
        self.headers = {'User-Agent': self.user_agent}
        self.records = ''

    def get_detail(self):
        r = requests.get(self.url, headers=self.headers)
        page_source = r.text
        root = fromstring(page_source)
        element = root.xpath('//div[@class="p-entry"]')[0]
        content = tostring(element,pretty_print=True, encoding='unicode')

        return content


