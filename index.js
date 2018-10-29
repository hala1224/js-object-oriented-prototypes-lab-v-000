function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

  BoardMember.prorotype.veto = function(){
    return 'No, I must disagree';
  };
  
  BoardMember.prorotype.approve = function(){
    return 'You can do that!';
  };
  
  BoardMember.prorotype.doCharity = function(){
    return "I like to help people.";
  };

  BoardMember.prorotype.releasePressStatement = function(){
    return "You will see great things from Scuber.";
  };

  BoardMember.prorotype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
    
  };
}
