#!/usr/bin/python3
"""
 A python script that takes in a letter and sends a POST request
 to http://0.0.0.0:5000/search_user with the letter as a parameter.
"""

import requests
import sys

if __name__ == "__main__":
    url = "http://0.0.0.0:5000/search_user"
    if len(sys.argv) > 1:
        q = sys.argv[1]
    else:
        q = ""
    value = {"q": q}
    response = requests.post(url, data=value)
    try:
        res_json = response.json()
        if not res_json:
            print("No result")
        else:
            res_id = res_json.get("id")
            res_name = res_json.get("name")
            print("[{}] {}".format(res_id, res_name))
    except ValueError as invalid_json:
        print("Not a valid JSON")
