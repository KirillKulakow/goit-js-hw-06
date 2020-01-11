'use strict'

/*
Task 3
*/

import users from './users.js'

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(obj => obj.name)
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]