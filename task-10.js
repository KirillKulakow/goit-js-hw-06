'use strict'

/*
Task 10
*/

import users from './users.js'

const getSkills = skills =>
    skills.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);

const skills = getSkills(users);

const getSkill = (acc, skill) => {
  if (!acc.includes(skill)) {
    acc.push(skill);
  }
  return acc;
};

const countSkills = skills => skills.reduce(getSkill, []);

const skillCount = countSkills(skills);

const getSortedUniqueSkills = users => (
    skillCount.sort()
);

console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]