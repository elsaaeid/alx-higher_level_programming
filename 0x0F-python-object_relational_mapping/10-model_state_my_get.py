#!/usr/bin/python3
"""
    script that lists all states with a name starting
    with N (upper N) from the database hbtn_0e_0_usa
"""
from sys import argv
import MySQLdb
# The code should not be executed when imported
if __name__ == "__main__":
    # make a connection to the database
    conn = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=argv[1],
        passwd=argv[2],
        db=argv[3],
        charset="utf8")
    cur = conn.cursor()
    try:
        stmt = """
        SELECT * FROM states WHERE name LIKE BINARY 'N%' ORDER BY id ASC
        """
        cur.execute(stmt)
        rtn = cur.fetchall()
    except MySQLdb.Error:
        try:
            rtn = ("MySQLdb Error")
        except IndexError:
            rtn = ("MySQLdb Error - IndexError")
    for i in rtn:
        print(i)
    # Clean up process
    cur.close()
    conn.close()
