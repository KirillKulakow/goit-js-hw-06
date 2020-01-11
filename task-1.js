'use strict'

/*
Task 1
*/

import users from './users.js'

const getUserNames = users => {
    return users.map(obj => obj.name);
  };
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]