#!/usr/bin/python3
"""
A python script that takes in a URL and an email address, sends a POST
request to the passed URL with the email as a parameter,
and finally displays the body of the response.
"""
import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]
    value = {
        "email": email
    }
    req = requests.post(url, data=value)
    print(req.text)
