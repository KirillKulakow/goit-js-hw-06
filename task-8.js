'use strict'

/*
Task 8
*/

import users from './users.js'

const getUsersWithFriend = (users, friendName) => {
    return users.filter(obj => obj.friends.includes(friendName)).map(obj => obj.name)
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]