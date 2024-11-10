from flask import Flask, render_template, request, jsonify, abort
import joblib
import pandas as pd
from flask_cors import CORS

import utils.utils as utils
from utils.utils import df

meat_model = joblib.load('./models/models/meat_prediction.joblib')
toppings_model = joblib.load('./models/models/toppings_prediction.joblib')
drizzles_model = joblib.load('./models/models/drizzles_prediction.joblib')
cheese_model = joblib.load('./models/models/cheese_prediction.joblib')

meats = ['Pulled Pork', 'Brisket', 'No Meat', 'Bacon', 'Grilled Chicken', 'Ham']
toppings = ['Broccoli', 'Tomatoes', 'Breadcrumbs', 'Corn', 'Mushrooms', 'Parmesan', 'Jalapenos', 'No Toppings', 'Bell Peppers', 'Pineapple', 'Onions']
drizzles = ['BBQ', 'No Drizzle', 'Garlic Parmesan', 'Hot Honey', 'Ranch', 'Buffalo', 'Pesto']
cheese = ['Cheddar', 'Pepper Jack', 'Alfredo', 'MIX', 'NO CHEESE', 'Gouda']

app = Flask(__name__)
CORS(app)

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
    model = request.args.get('model')  

    day = request.args.get('day')
    month = request.args.get('month')
    hour = request.args.get('hour')
    temperature = request.args.get('temperature')
    holiday = request.args.get('holiday')
    weekend = request.args.get('weekend')

    input_parameters = [day, month, hour, temperature, holiday, weekend]
    
    if model == "meat":
        prediction = predict(model=meat_model, array=meats, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')
        return jsonify(json_data)
    
    elif model == "topping":
        prediction = predict(model=toppings_model, array=toppings, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')
        return jsonify(json_data)

    elif model == "drizzle":
        prediction = predict(model=drizzles_model, array=drizzles, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')
        return jsonify(json_data)

    elif model == "cheese":
        prediction = predict(model=cheese_model, array=cheese, inputs=input_parameters)
        json_data = prediction.to_json(orient='records')
        return jsonify(json_data)

    return {} 



@app.route('/api/key-metrics', methods=['GET'])
def key_metrics():
    try:
        start_date = request.args.get("start_date")
        end_date = request.args.get("end_date")

        

        df_range = utils.get_data_from_range(df, start_date, end_date)
        ai_score = utils.get_ai_score(df_range)
        number_of_orders = utils.get_number_of_orders(df_range)
        total_revenue = utils.get_total_revenue(df_range)
    except Exception as e:
        abort(500, description=str(e))


    return jsonify({
        "ai_score": ai_score,
        "number_of_orders": number_of_orders,
        "total_revenue": total_revenue
    })

@app.route('/api/top-orders', methods=['GET'])
def top_orders():
    try:
        start_date = request.args.get("start_date")
        end_date = request.args.get("end_date")

        df_range = utils.get_data_from_range(df, start_date, end_date)
        print("got data")
        top_orders = utils.get_top_orders(df_range)
        print("got top orders")
    except Exception as e:
        abort(500, description=str(e))

    return jsonify(top_orders)


@app.route('/api/orders-over-time', methods=['GET'])
def order_over_time():
    try:
        start_date = request.args.get("start_date")
        end_date = request.args.get("end_date")

        df_range = utils.get_data_from_range(df, start_date, end_date)
        order_over_time = utils.get_orders_over_time(df_range)
    except Exception as e:
        abort(500, description=str(e))

    date_count_map = {str(date): count for date, count in order_over_time['count'].items()}
    return jsonify(date_count_map)



# Running the Flask app
if __name__ == '__main__':
    app.run(debug=True)
