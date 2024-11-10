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
    return df['Unique Order #'].nunique()

def get_total_revenue(df):
    df = df.copy()  # Avoid SettingWithCopyWarning
    
    df['Price'] = df['Modifier'].map(price_map)
    
    df_filtered = df.dropna(subset=['Price'])
    
    revenue_data = df_filtered.groupby('Unique Order #').agg(
        total_revenue=('Price', 'sum'),
        parent_menu_selection=('Parent Menu Selection', 'first')
    ).reset_index()
    
    revenue_data['total_revenue'] += revenue_data['parent_menu_selection'].apply(
        lambda x: price_map.get(x, 0) if x in ["Mac and Cheese", "Grilled Cheese Sandwich"] else 0
    )


    total_revenue = revenue_data['total_revenue'].sum()
    
    return total_revenue


def get_ai_score(df):
    return 91

def get_top_orders(df):
    unique_parent_menu = df.groupby('Unique Order #')['Parent Menu Selection'].unique().reset_index()
    mac_and_cheese_count = unique_parent_menu['Parent Menu Selection'].apply(lambda x: 'Mac and Cheese' in x).sum()
    grilled_cheese_count = unique_parent_menu['Parent Menu Selection'].apply(lambda x: 'Grilled Cheese Sandwich' in x).sum()

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



    garlic_bread_count = df['Modifier'].fillna('').apply(lambda x: 'Garlic Bread' in x).sum()
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
    coke_count = df['Modifier'].fillna('').apply(lambda x: 'Coke' in x).sum()
    diet_coke_count = df['Modifier'].fillna('').apply(lambda x: 'Diet Coke' in x).sum()
    sprite_count = df['Modifier'].fillna('').apply(lambda x: 'Sprite' in x).sum()
    dr_pepper_count = df['Modifier'].fillna('').apply(lambda x: 'Dr. Pepper' in x).sum()
    powerade_blue_mountain_berry_blast_count = df['Modifier'].fillna('').apply(lambda x: 'Powerade - Blue Mountain Berry Blast' in x).sum()
    minute_maid_lemonade_count = df['Modifier'].fillna('').apply(lambda x: 'Minute Maid Lemonade' in x).sum()
    

    top_orders = {
        "Parent": {
            "Mac and Cheese": mac_and_cheese_count,
            "Grilled Cheese Sandwich": grilled_cheese_count,
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
        "Toppings": {
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
        "Drizzles": {
            "BBQ": bbq_count,
            "No Drizzle": no_drizzle_count,
            "Garlic Parmesan": garlic_parmesan_count,
            "Hot Honey": hot_honey_count,
            "Ranch": ranch_count,
            "Buffalo": buffalo_count,
            "Pesto": pesto_count,
        },
        "Sides": {
            "Garlic Bread": garlic_bread_count,
            "Cheesy Garlic Bread": cheesy_garlic_bread_count,
            "Cheesecake": cheesecake_count,
            "Large Chocolate Chunk Cookie": large_chocolate_chunk_cookie_count,
            "Doritos": doritos_count,
            "Cheetos": cheetos_count,
            "Lays Barbecue": lays_barbecue_count,
            "Lays Classic": lays_classic_count,
            "Cheesy Broccoli": cheesy_broccoli_count,
            "No Side": no_side_count,
        },
        "Drinks": {
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

    return top_orders


data = get_data_from_range(df, '2024-04-01', '2024-11-06')

print(get_top_orders(data))
