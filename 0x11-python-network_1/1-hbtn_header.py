#!/usr/bin/python3
"""
 A python script that takes in a URL, sends a request to the URL and displays
 the value of the X-Request-Id variable found in the header of the response.
"""
import sys
import urllib.request

if __name__ == "__main__":
    url = sys.argv[1]
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        page = response.read()
        header_response = response.info()
        print(dict(header_response).get("X-Request-Id"))
