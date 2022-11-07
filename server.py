import abc
import pandas as pd
import numpy as np
from flask import render_template
from flask import Flask
from flask_cors import CORS
from sklearn import preprocessing
from sklearn import manifold
from sklearn.metrics import euclidean_distances
from sklearn.metrics import pairwise_distances
from sklearn.decomposition import PCA
import pandas as pd
from flask import request
import numpy as np
import json
from scipy.spatial.distance import cdist
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn import preprocessing
from sklearn.decomposition import PCA
from kneed import KneeLocator, DataGenerator

#dictionaries  


app = Flask(__name__)
cors = CORS(app)






@app.route("/")
def home():
    # return "Hello, World!"
    return render_template("index.html")

# server index.html on route /
@app.route("/index.html")
def index():
    # get_csv()
    return render_template("index.html")




#run a flask server
if __name__ == "__main__":
    app.run(debug=True)



