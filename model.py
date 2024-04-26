from flask import Flask, request, render_template
import pickle

app = Flask(__name__)


model_path ='minor_project\model.py'
with open(model_path, 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Extract features from the posted form
    features = [float(x) for x in request.form.values()]
    final_features = [features] 
    prediction = model.predict(final_features)
    
    output = prediction[0] 

    return render_template('index.html', prediction_text='Disease Prediction: {}'.format(output))

if __name__ == "__main__":
    app.run(debug=True)
