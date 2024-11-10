import pandas as pd
import glob

price_map = {
    "Mac and Cheese": 8.99,
    "Grilled Cheese Sandwich": 8.99,
    "Grilled Chicken": 1.99,
    "Pulled Pork": 1.99,
    "Brisket": 1.99,
    "Bacon": 1.99,
    "Ham": 1.99,
    "No Meat": 0,
    "Garlic Bread": 1.99,
    "Cheesy Garlic Bread": 1.99,
    "Cheesecake": 4.99,
    "Large Chocolate Chunk Cookie": 2.99,
    "Doritos": 1.99,
    "Cheetos": 1.99,
    "Lays Barbecue": 1.99,
    "Lays Classic": 1.99,
    "Cheesy Broccoli": 1.99,
    "No Side": 0,
    "No Drink": 0,
    "Water Bottle": 1.49,
    "Apple Juice": 2.49,
    "Coke": 1.99,
    "Diet Coke": 1.99,
    "Sprite": 1.99,
    "Dr. Pepper": 1.99,
    "Powerade - Blue Mountain Berry Blast": 1.99,
    "Minute Maid Lemonade": 1.99,
    "Mac and Cheese Party Tray": 39.99,
    "Grilled Cheese Sandwich Party Tray": 39.99,
    "Garlic Bread Feeds 10": 13.99
}

def process_month_file(file_path):
    df = pd.read_csv(file_path, encoding='ISO-8859-1')
    df['Sent Date'] = pd.to_datetime(df['Sent Date'])
        
    month_id = df['Sent Date'].dt.to_period('M').astype(str)

    df['Unique Order #'] = df['Order #'].astype(str) + '-' + month_id
    return df

file_paths = glob.glob('./models/data/*_2024.csv')

processed_dfs = []
for file_path in file_paths:
    processed_dfs.append(process_month_file(file_path))

df = pd.concat(processed_dfs, ignore_index=True)

def get_data_from_range(df, start_date, end_date):
    df['Sent Date'] = pd.to_datetime(df['Sent Date'])
    
    
    start_date = pd.to_datetime(start_date).date()
    end_date = pd.to_datetime(end_date).date()
    
    return df[(df['Sent Date'].dt.date >= start_date) & (df['Sent Date'].dt.date <= end_date)]

def get_number_of_orders(df):
    
    file_paths = glob.glob('./models/data/*_2024.csv')
    processed_dfs = []
    for file_path in file_paths:
        processed_dfs.append(pd.read_csv(file_path, encoding='ISO-8859-1'))

    total_orders = 0
    for df in processed_dfs:
        unique_orders = df[['Order #', 'Order ID']].drop_duplicates()
        total_orders += unique_orders.shape[0]

    return total_orders

def get_total_revenue(df):
    total_revenue = 0

    mac_and_cheese_count = df['Modifier'].fillna('').apply(lambda x: 'Cheddar' == x or 'Pepper Jack' == x or 'Alfredo' == x).sum()
    grilled_cheese_count = df['Modifier'].fillna('').apply(lambda x: 'Melted Cheddar' in x or 'Melted Pepper Jack' in x or 'Melted Parm' in x).sum()
    mac_and_cheese_tray_count = df['Parent Menu Selection'].fillna('').apply(lambda x: 'Mac and Cheese Party Tray' in x).sum()
    grilled_cheese_tray_count = df['Parent Menu Selection'].fillna('').apply(lambda x: 'Grilled Cheese Sandwich Party Tray' in x).sum()

    total_revenue += mac_and_cheese_count * price_map['Mac and Cheese']
    total_revenue += grilled_cheese_count * price_map['Grilled Cheese Sandwich']
    total_revenue += mac_and_cheese_tray_count * price_map['Mac and Cheese Party Tray']
    total_revenue += grilled_cheese_tray_count * price_map['Grilled Cheese Sandwich Party Tray']

    grilled_chicken_count = df['Modifier'].fillna('').apply(lambda x: 'Grilled Chicken' in x).sum()
    pulled_pork_count = df['Modifier'].fillna('').apply(lambda x: 'Pulled Pork' in x).sum()
    brisket_count = df['Modifier'].fillna('').apply(lambda x: 'Brisket' in x).sum()
    bacon_count = df['Modifier'].fillna('').apply(lambda x: 'Bacon' in x).sum()
    ham_count = df['Modifier'].fillna('').apply(lambda x: 'Ham' in x).sum()
    no_meat_count = df['Modifier'].fillna('').apply(lambda x: 'No Meat' in x).sum()

    total_revenue += grilled_chicken_count * price_map['Grilled Chicken']
    total_revenue += pulled_pork_count * price_map['Pulled Pork']
    total_revenue += brisket_count * price_map['Brisket']
    total_revenue += bacon_count * price_map['Bacon']
    total_revenue += ham_count * price_map['Ham']
    total_revenue += no_meat_count * price_map['No Meat']


    garlic_bread_count = df['Modifier'].fillna('').apply(lambda x: 'Garlic Bread' == x).sum()
    garlic_bread_feeds_10_count = df['Modifier'].fillna('').apply(lambda x: 'Garlic Bread Feeds 10' in x).sum()
    cheesy_garlic_bread_count = df['Modifier'].fillna('').apply(lambda x: 'Cheesy Garlic Bread' in x).sum()
    cheesecake_count = df['Modifier'].fillna('').apply(lambda x: 'Cheesecake' in x).sum()
    large_chocolate_chunk_cookie_count = df['Modifier'].fillna('').apply(lambda x: 'Large Chocolate Chunk Cookie' in x).sum()
    doritos_count = df['Modifier'].fillna('').apply(lambda x: 'Doritos' in x).sum()
    cheetos_count = df['Modifier'].fillna('').apply(lambda x: 'Cheetos' in x).sum()
    lays_barbecue_count = df['Modifier'].fillna('').apply(lambda x: 'Lays Barbecue' in x).sum()
    lays_classic_count = df['Modifier'].fillna('').apply(lambda x: 'Lays Classic' in x).sum()
    cheesy_broccoli_count = df['Modifier'].fillna('').apply(lambda x: 'Cheesy Broccoli' in x).sum()

    total_revenue += garlic_bread_count * price_map['Garlic Bread']
    total_revenue += garlic_bread_feeds_10_count * price_map['Garlic Bread Feeds 10']
    total_revenue += cheesy_garlic_bread_count * price_map['Cheesy Garlic Bread']
    total_revenue += cheesecake_count * price_map['Cheesecake']
    total_revenue += large_chocolate_chunk_cookie_count * price_map['Large Chocolate Chunk Cookie']
    total_revenue += doritos_count * price_map['Doritos']
    total_revenue += cheetos_count * price_map['Cheetos']
    total_revenue += lays_barbecue_count * price_map['Lays Barbecue']
    total_revenue += lays_classic_count * price_map['Lays Classic']
    total_revenue += cheesy_broccoli_count * price_map['Cheesy Broccoli']


    water_bottle_count = df['Modifier'].fillna('').apply(lambda x: 'Water Bottle' in x).sum()
    apple_juice_count = df['Modifier'].fillna('').apply(lambda x: 'Apple Juice' in x).sum()
    coke_count = df['Modifier'].fillna('').apply(lambda x: 'Coke' == x).sum()
    diet_coke_count = df['Modifier'].fillna('').apply(lambda x: 'Diet Coke' in x).sum()
    sprite_count = df['Modifier'].fillna('').apply(lambda x: 'Sprite' in x).sum()
    dr_pepper_count = df['Modifier'].fillna('').apply(lambda x: 'Dr. Pepper' in x).sum()
    powerade_blue_mountain_berry_blast_count = df['Modifier'].fillna('').apply(lambda x: 'Powerade - Blue Mountain Berry Blast' in x).sum()
    minute_maid_lemonade_count = df['Modifier'].fillna('').apply(lambda x: 'Minute Maid Lemonade' in x).sum()

    total_revenue += water_bottle_count * price_map['Water Bottle']
    total_revenue += apple_juice_count * price_map['Apple Juice']
    total_revenue += coke_count * price_map['Coke']
    total_revenue += diet_coke_count * price_map['Diet Coke']
    total_revenue += sprite_count * price_map['Sprite']
    total_revenue += dr_pepper_count * price_map['Dr. Pepper']
    total_revenue += powerade_blue_mountain_berry_blast_count * price_map['Powerade - Blue Mountain Berry Blast']
    total_revenue += minute_maid_lemonade_count * price_map['Minute Maid Lemonade']

    
    return total_revenue


def get_ai_score(df):
    return 91

def get_top_orders(df):
    mac_and_cheese_count = df['Modifier'].fillna('').apply(lambda x: 'Cheddar' == x or 'Pepper Jack' == x or 'Alfredo' == x).sum()
    grilled_cheese_count = df['Modifier'].fillna('').apply(lambda x: 'Melted Cheddar' in x or 'Melted Pepper Jack' in x or 'Melted Parm' in x).sum()
    mac_and_cheese_tray_count = df['Parent Menu Selection'].fillna('').apply(lambda x: 'Mac and Cheese Party Tray' in x).sum()

    grilled_chicken_count = df['Modifier'].fillna('').apply(lambda x: 'Grilled Chicken' in x).sum()
    pulled_pork_count = df['Modifier'].fillna('').apply(lambda x: 'Pulled Pork' in x).sum()
    brisket_count = df['Modifier'].fillna('').apply(lambda x: 'Brisket' in x).sum()
    bacon_count = df['Modifier'].fillna('').apply(lambda x: 'Bacon' in x).sum()
    ham_count = df['Modifier'].fillna('').apply(lambda x: 'Ham' in x).sum()
    no_meat_count = df['Modifier'].fillna('').apply(lambda x: 'No Meat' in x).sum()


    cheddar_count = df['Modifier'].fillna('').apply(lambda x: 'Cheddar' in x).sum()
    pepper_jack_count = df['Modifier'].fillna('').apply(lambda x: 'Pepper Jack' in x).sum()
    alfredo_count = df['Modifier'].fillna('').apply(lambda x: 'Alfredo' in x).sum()

    broccoli_count = df['Modifier'].fillna('').apply(lambda x: 'Broccoli' in x).sum()
    tomatoes_count = df['Modifier'].fillna('').apply(lambda x: 'Tomatoes' in x).sum()
    breadcrumbs_count = df['Modifier'].fillna('').apply(lambda x: 'Breadcrumbs' in x).sum()
    corn_count = df['Modifier'].fillna('').apply(lambda x: 'Corn' in x).sum()
    mushrooms_count = df['Modifier'].fillna('').apply(lambda x: 'Mushrooms' in x).sum()
    parmesan_count = df['Modifier'].fillna('').apply(lambda x: 'Parmesan' in x).sum()
    jalapenos_count = df['Modifier'].fillna('').apply(lambda x: 'Jalapenos' in x).sum()
    no_toppings_count = df['Modifier'].fillna('').apply(lambda x: 'No Toppings' in x).sum()
    bell_peppers_count = df['Modifier'].fillna('').apply(lambda x: 'Bell Peppers' in x).sum()
    pineapple_count = df['Modifier'].fillna('').apply(lambda x: 'Pineapple' in x).sum()
    onions_count = df['Modifier'].fillna('').apply(lambda x: 'Onions' in x).sum()


    bbq_count = df['Modifier'].fillna('').apply(lambda x: 'BBQ' in x).sum()
    no_drizzle_count = df['Modifier'].fillna('').apply(lambda x: 'No Drizzle' in x).sum()
    garlic_parmesan_count = df['Modifier'].fillna('').apply(lambda x: 'Garlic Parmesan' in x).sum()
    hot_honey_count = df['Modifier'].fillna('').apply(lambda x: 'Hot Honey' in x).sum()
    ranch_count = df['Modifier'].fillna('').apply(lambda x: 'Ranch' in x).sum()
    buffalo_count = df['Modifier'].fillna('').apply(lambda x: 'Buffalo' in x).sum()
    pesto_count = df['Modifier'].fillna('').apply(lambda x: 'Pesto' in x).sum()



    garlic_bread_count = df['Modifier'].fillna('').apply(lambda x: 'Garlic Bread' == x).sum()
    garlic_bread_feeds_10_count = df['Modifier'].fillna('').apply(lambda x: 'Garlic Bread Feeds 10' in x).sum()
    cheesy_garlic_bread_count = df['Modifier'].fillna('').apply(lambda x: 'Cheesy Garlic Bread' in x).sum()
    cheesecake_count = df['Modifier'].fillna('').apply(lambda x: 'Cheesecake' in x).sum()
    large_chocolate_chunk_cookie_count = df['Modifier'].fillna('').apply(lambda x: 'Large Chocolate Chunk Cookie' in x).sum()
    doritos_count = df['Modifier'].fillna('').apply(lambda x: 'Doritos' in x).sum()
    cheetos_count = df['Modifier'].fillna('').apply(lambda x: 'Cheetos' in x).sum()
    lays_barbecue_count = df['Modifier'].fillna('').apply(lambda x: 'Lays Barbecue' in x).sum()
    lays_classic_count = df['Modifier'].fillna('').apply(lambda x: 'Lays Classic' in x).sum()
    cheesy_broccoli_count = df['Modifier'].fillna('').apply(lambda x: 'Cheesy Broccoli' in x).sum()
    no_side_count = df['Modifier'].fillna('').apply(lambda x: 'No Side' in x).sum()


    water_bottle_count = df['Modifier'].fillna('').apply(lambda x: 'Water Bottle' in x).sum()
    apple_juice_count = df['Modifier'].fillna('').apply(lambda x: 'Apple Juice' in x).sum()
    coke_count = df['Modifier'].fillna('').apply(lambda x: 'Coke' == x).sum()
    diet_coke_count = df['Modifier'].fillna('').apply(lambda x: 'Diet Coke' in x).sum()
    sprite_count = df['Modifier'].fillna('').apply(lambda x: 'Sprite' in x).sum()
    dr_pepper_count = df['Modifier'].fillna('').apply(lambda x: 'Dr. Pepper' in x).sum()
    powerade_blue_mountain_berry_blast_count = df['Modifier'].fillna('').apply(lambda x: 'Powerade - Blue Mountain Berry Blast' in x).sum()
    minute_maid_lemonade_count = df['Modifier'].fillna('').apply(lambda x: 'Minute Maid Lemonade' in x).sum()


    top_orders = {
        "Main": {
            "Mac and Cheese": mac_and_cheese_count,
            "Grilled Cheese Sandwich": grilled_cheese_count,
            "Mac and Cheese Party Tray": mac_and_cheese_tray_count,
        },
        "Meat": {
            "Grilled Chicken": grilled_chicken_count,
            "Pulled Pork": pulled_pork_count,
            "Brisket": brisket_count,
            "Bacon": bacon_count,
            "Ham": ham_count,
            "No Meat": no_meat_count,
        },
        "Cheese": {
            "Cheddar": cheddar_count,
            "Pepper Jack": pepper_jack_count,
            "Alfredo": alfredo_count,
        },
        "Topping": {
            "Broccoli": broccoli_count,
            "Tomatoes": tomatoes_count,
            "Breadcrumbs": breadcrumbs_count,
            "Corn": corn_count,
            "Mushrooms": mushrooms_count,
            "Parmesan": parmesan_count,
            "Jalapenos": jalapenos_count,
            "No Toppings": no_toppings_count,
            "Bell Peppers": bell_peppers_count,
            "Pineapple": pineapple_count,
            "Onions": onions_count,
        },
        "Drizzle": {
            "BBQ": bbq_count,
            "No Drizzle": no_drizzle_count,
            "Garlic Parmesan": garlic_parmesan_count,
            "Hot Honey": hot_honey_count,
            "Ranch": ranch_count,
            "Buffalo": buffalo_count,
            "Pesto": pesto_count,
        },
        "Side": {
            "Garlic Bread": garlic_bread_count,
            "Cheesy Garlic Bread": cheesy_garlic_bread_count,
            "Cheesecake": cheesecake_count,
            "Large Chocolate Chunk Cookie": large_chocolate_chunk_cookie_count,
            "Doritos": doritos_count,
            "Cheetos": cheetos_count,
            "Lays Barbecue": lays_barbecue_count,
            "Lays Classic": lays_classic_count,
            "Cheesy Broccoli": cheesy_broccoli_count,
            "Garlic Bread Feeds 10": garlic_bread_feeds_10_count,
            "No Side": no_side_count,
        },
        "Drink": {
            "Water Bottle": water_bottle_count,
            "Apple Juice": apple_juice_count,
            "Coke": coke_count,
            "Diet Coke": diet_coke_count,
            "Sprite": sprite_count,
            "Dr. Pepper": dr_pepper_count,
            "Powerade - Blue Mountain Berry Blast": powerade_blue_mountain_berry_blast_count,
            "Minute Maid Lemonade": minute_maid_lemonade_count,
        }
    }

    

    top_orders = {key: {sub_key: int(value) for sub_key, value in sub_dict.items()} for key, sub_dict in top_orders.items()}



    return top_orders


def get_orders_over_time(df):
    df['Sent Date'] = pd.to_datetime(df['Sent Date']).dt.date

    df_grouped = df.groupby('Sent Date')['Order ID'].nunique().reset_index(name='count')

    df_grouped = df_grouped.set_index('Sent Date')
    
    return df_grouped


data = get_data_from_range(df, '2024-03-01', '2024-11-06')



