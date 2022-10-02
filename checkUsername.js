let current_users = ['A','B','C','D','E'];
let new_users = ['c','D','F','G','H'];


for (var i=0; i<current_users.length; i++)
{ 
    var uname = new_users[i].toUpperCase();
  if (current_users.includes(uname))
  {
    console.log(new_users[i]);
    console.log('Sorry username ' + new_users[i] + " is already taken");
  }
}

