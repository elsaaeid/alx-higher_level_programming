#!/usr/bin/python3
"""Module that finds a peak in a list of integers"""


def find_peak(list_of_integers):
    """function that finds a peak in a list of unsorted integers."""

    lst = list_of_integers

    if lst is None or lst == []:
        return None
    
    lst_length = len(lst)

    start = 0
    end = lst_length - 1

    while start < end:
        mid = ((end - start) // 2) + start
        if lst[mid] > lst[mid - 1] and lst[mid] > lst[mid + 1]:
            return lst[mid]
        if lst[mid - 1] > lst[mid + 1]:
            end = mid
        else:
            start = mid + 1

    return lst[start]
