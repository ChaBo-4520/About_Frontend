const quiz = function (command, a, b){
  switch(command){
    case 'add':
      console.log(a+b);
      break;
    case 'substract':
      console.log(a-b);
      break;
    case 'divide':
      console.log(a/b);
      break;
    case 'multiply':
      console.log(a*b);
      break;
    case 'remainder':
      console.log(a%b);
      break;
    default:
      console.log('Error!');
      break;
  }
};

quiz('remainder',5,3);