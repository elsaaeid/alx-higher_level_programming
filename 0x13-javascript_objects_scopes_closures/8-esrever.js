#!/usr/bin/node
/**
 * Reverses an array.
 * @param {Array} list The array to reverse.
 * @returns The reversed array.
 */
exports.esrever = function (list) {
    const listLength = list.length;
    const reversedList = new Array(listLength);
  
    list.forEach((item, i) => {
      reversedList[listLength - i - 1] = item;
    });
    return reversedList;
  };
  