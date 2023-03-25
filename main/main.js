let users=[
  {
    first_name: 'Mike',
    last_name: 'Sheridan',
	
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'

  },
  {
    first_name: 'John',
    last_name: 'Carte'

  }
];

let per=users.map(function(user){
	return user.first_name+user.last_name;
})
console.log(per);





