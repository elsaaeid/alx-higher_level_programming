#!/usr/bin/python3
"""Module that finds a peak in a list of integers"""


def find_peak(list_of_integers):
    """function that finds a peak in a list of unsorted integers."""
    
    lst = list_of_integers

    if lst is None or lst == []:
        return None
    
    lst_length = len(lst)

    i = 0
    j = lst_length - 1

    while i < j:
        mid = (i + j) // 2

        # Check if the middle element is a peak
        if lst[mid] > lst[mid + 1]:
            j = mid
        else:
            i = mid + 1

    return lst[i]
