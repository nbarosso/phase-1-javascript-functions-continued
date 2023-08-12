// code your solution here

function saturdayFun(activity){
    if(typeof activity == 'string') {
        return `This Saturday, I want to ${activity}!`
    }
    else {
        return 'This Saturday, I want to roller-skate!'
    }
}

function mondayWork(work) {
    if(typeof work == 'string') {
        return `This Monday, I will ${work}.`
    }
    else {
        return 'This Monday, I will go to the office.'
    }
}

function wrapAdjective(highlight) {
    const niceCompliment = function (adjective) {
      return `You are ${highlight}${adjective}${highlight}!`
    }
    return niceCompliment;
}

  // wrapAdjective('*')('a hard worker')