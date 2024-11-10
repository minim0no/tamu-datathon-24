from flask import Flask, render_template, request, jsonify, abort
import joblib
import pandas as pd

import utils.utils as utils

meat_model = joblib.load('./models/models/meat_prediction.joblib')
toppings_model = joblib.load('./models/models/toppings_prediction.joblib')
drizzles_model = joblib.load('./models/models/drizzles_prediction.joblib')
cheese_model = joblib.load('./models/models/cheese_prediction.joblib')

meats = ['Pulled Pork', 'Brisket', 'No Meat', 'Bacon', 'Grilled Chicken', 'Ham']
toppings = ['Broccoli', 'Tomatoes', 'Breadcrumbs', 'Corn', 'Mushrooms', 'Parmesan', 'Jalapenos', 'No Toppings', 'Bell Peppers', 'Pineapple', 'Onions']
drizzles = ['BBQ', 'No Drizzle', 'Garlic Parmesan', 'Hot Honey', 'Ranch', 'Buffalo', 'Pesto']
cheese = ['Cheddar', 'Pepper Jack', 'Alfredo', 'MIX', 'NO CHEESE', 'Gouda']

app = Flask(__name__)

def predict(model, array, inputs):
    feature_names = ['day', 'month', 'hour', 'temperature', 'holiday', 'weekend']

    input_data = pd.DataFrame([inputs], columns=feature_names)

    probabilities = [estimator.predict_proba(input_data)[:, 1] for estimator in model.estimators_]
    probabilities = pd.DataFrame(probabilities, index=array).T

    return probabilities

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/model', methods=['GET'])
def api_data():
    data = request.get_json()
    model = data["model"]

    input_parameters = [data["day"], data["month"], data["hour"], data["temperature"], data["holiday"], data["weekend"]]
    if model == "meat":
        prediction = predict(model=meat_model, array=meats, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')

        return jsonify(json_data)
    
    elif model == "topping":
        prediction = predict(model=toppings_model, array=meats, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')

        return jsonify(json_data)
    elif model == "drizzle":
        prediction = predict(model=drizzles, array=meats, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')

        return jsonify(json_data)
    elif model == "cheese":
        prediction = predict(model=cheese_model, array=meats, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')

        return jsonify(json_data)

    return {}

@app.route('/api/key-metrics', methods=['GET'])
def key_metrics():
    data = request.get_json()
    try:
        start_date = data["start_date"]
        end_date = data["end_date"]

        

        df = utils.get_data_from_range(df, start_date, end_date)
        ai_score = utils.get_ai_score(df)
        number_of_orders = utils.get_number_of_orders(df)
        total_revenue = utils.get_total_revenue(df)
    except Exception as e:
        abort(500, description=str(e))


    return jsonify({
        "ai_score": ai_score,
        "number_of_orders": number_of_orders,
        "total_revenue": total_revenue
    })

@app.route('/api/top-orders', methods=['GET'])
def top_orders():
    data = request.get_json()
    try:
        start_date = data["start_date"]
        end_date = data["end_date"]

        df = utils.get_data_from_range(df, start_date, end_date)
        top_orders = utils.get_top_orders(df)
    except Exception as e:
        abort(500, description=str(e))

    return jsonify(top_orders)



# Running the Flask app
if __name__ == '__main__':
    app.run(debug=True)
