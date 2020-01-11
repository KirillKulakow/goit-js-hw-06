'use strict'

/*
Task 9
*/

import users from './users.js'

const getNamesSortedByFriendsCount = users => {
    const arrSort = [...users]
    return arrSort.sort((a, b) => a.friends.length < b.friends.length ? -1 : 1).map(obj => obj.name)
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]