import os
from langchain_openai import ChatOpenAI
from langchain_experimental.agents import create_csv_agent
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

agent = create_csv_agent(
    llm,
    "path/to/your/csv_file.csv",
    verbose=True,
    agent_type="openai-tools"
)
