let ordNum = [1,2,3,4,5,6,7,8,9,10];



for (var i=0; i<ordNum.length; i++)
{ 
    if (ordNum[i] === 1)
     console.log(ordNum[i]+'st');
    else if (ordNum[i] === 2)
     console.log(ordNum[i]+'nd');
   else  if (ordNum[i] === 3)
    console.log(ordNum[i]+'rd');
  else
    console.log(ordNum[i]+'th');
}
