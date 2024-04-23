#!/usr/bin/python3
"""
A python script that takes in a URL,sends a request to
the URL and displays the body of the response (decoded in utf-8).
"""
import sys
import urllib.request
from urllib.error import HTTPError

if __name__ == "__main__":
    url = sys.argv[1]
    try:
        with urllib.request.urlopen(url) as response:
            print(response.read().decode("utf-8", "replace"))
    except HTTPError as e:
        print("Error code: {}".format(e.code))
