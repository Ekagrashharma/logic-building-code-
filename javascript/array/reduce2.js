const users = [
  {email:"a@mail.com" },
  {email:"b@mail.com" },
  {email:"a@mail.com" }
]



function findDuplicateUsers(users) {
  const emailCount = {};

  // Count emails
  users.forEach(user => {
    emailCount[user.email] = (emailCount[user.email] || 0) + 1;
  });

  // Filter users having duplicate email
  return users.filter(user => emailCount[user.email] > 1);
}

console.log(findDuplicateUsers(users));
