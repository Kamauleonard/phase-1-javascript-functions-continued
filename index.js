// Solution 1
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun());            
  
//   Solution 2

  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  console.log(mondayWork());            
  
  // Solution 3
  function wrapAdjective(easy = "*") {
    return function(adjective = "special") {
      return `You are ${easy}${adjective}${easy}!`;
    };
  }
  
 
  const encouragingPromptFunction = wrapAdjective("!!!");
 
  