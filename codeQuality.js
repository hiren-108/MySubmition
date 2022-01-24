// level {3}
async function getUsers(users) {
    const new_users = [];
    let i=0;
    for (let user of users) {
      const newUser = user;
      newUser[id] = i;
      i++;
      new_users.push(newUser);
    }
  
    return new_users;
  }