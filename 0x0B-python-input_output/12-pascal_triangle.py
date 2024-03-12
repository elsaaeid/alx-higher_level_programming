#!/usr/bin/python3
"""Module 12-pascal_triangle.py
Returns a list of lists of integers
representing the Pascal’s triangle of n
"""


def pascal_triangle(n):
    """Returns the pascal's triangle of n.

    Args:
       - n: size of the triangle (rows)

    Return: a list of lists of integers
    """

    if n <= 0:
        return []

    list = [[0 for x in range(i + 1)] for i in range(n)]
    list[0] = [1]

    for i in range(1, n):
        list[i][0] = 1
        for j in range(1, i + 1):
            if j < len(list[i - 1]):
                list[i][j] = list[i - 1][j - 1] + list[i - 1][j]
            else:
                list[i][j] = list[i - 1][0]
    return list
