import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

x = """
{
  "2023-2024": {
    "Presidents": ["Caroline Sassan", "Ayan Rahman"],
    "Vice President": "Lara Simshauser",
    "Gear Room Managers": ["Adnan Aldabbagh", "Laurie Tamayo"],
    "Diversity & Inclusion Chair": "Anila Marks"
  },
  "2022-2023": {
    "Presidents": ["Hannah Bashkow", "Ulysses Chevez"],
    "Vice President:": "Cal Stellato"
  },
  "2021-2022": {
    "Presidents": ["Eva Kitlen", "Aidan Wang"],
    "Gear Room Managers": ["Cali Rivera", "Daniel Graves"],
    "Diversity & Inclusion Chair": "Alec Lacerte"
  },
  "2019-2020": {
    "Presidents": ["Max Kozlov", "Anna Pasnau"],
    "Vice President": "Gabi Gil",
    "Gear Room Managers": ["Aidan Wang", "Ainsley Clapp"]
  },
  "2018-2019": {
    "Presidents": "Charlotte Haslett & Lucas Smolcic Larson",
    "Vice President": "Max Kozlov",
    "Gear Room Manager": "Ethan Pierce"
  },
  "2017-2018": {
    "Presidents": ["Austen Sharpe", "Zoe Gates"],
    "Vice President": "Lucas Smolcic Larson",
    "Gear Room Manager": "Ethan Pierce"
  },
  "2016-2017": {
    "Presidents": ["Charlotte Haslett", "Clayton Sanford"],
    "Vice President": "Lena Milton",
    "Gear Room Manager": "Camila Lupi"
  }
}
"""

d = json.loads(x)

cred = credentials.Certificate('path_to_credentials')

app = firebase_admin.initialize_app(cred)
db = firestore.client()

for year in d:
    for role, names in d[year].items():
        d[year][role] = names if isinstance(names,list) else [names]
    doc_ref = db.collection("leadership").document(year)
    doc_ref.set(d[year])
