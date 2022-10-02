let usernames = [];
console.log(usernames.length);
if (usernames.length == 0) { console.log("Array is empty!") }

for (var i=0; i< usernames.length; i++)
{ 
  if (usernames[i] === 'admin')
    console.log('Hello admin, would you like to see a status report');
   if (usernames[i] !='admin')
    console.log('Hello ' +usernames[i] );
 
}

