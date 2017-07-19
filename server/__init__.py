from flask import Flask
from flask_cors import CORS
from flask_cache import Cache


app = Flask(__name__)
CORS(app)
cache = Cache(app,config={'CACHE_TYPE': 'simple'})

from server.controllers.api import *