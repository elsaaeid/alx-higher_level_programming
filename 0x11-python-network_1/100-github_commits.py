#!/usr/bin/python3
"""
script that takes 2 arguments in order to list 10 commits (from the most
recent to oldest) of the repository "rails" by the user "rails".
Print all commits by: `<sha>: <author name>` (one by line)
"""

import sys
import requests

if __name__ == '__main__':
    repo_name = sys.argv[1]
    username = sys.argv[2]
    url = "https://api.github.com/repos/{username}/{repo_name}/commits"
    res = requests.get(url)
    res_json = res.json()
    try:
        for i in range(10):
            print('{}: {}'.format(
                res_json[i].get('sha'),
                res_json[i].get('commit').get('author').get('name')))
    except IndexError:
        pass
