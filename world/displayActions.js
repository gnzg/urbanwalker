function displayActions(actions, event = undefined) {
    
    // save last action
    let lastAction = actions[actions.length-1];
    // modify array to n-1 of original length
    actions.splice(actions.length-1, 1);
    let actionsMinusOne = actions.join(", ");

    console.log("You can", actionsMinusOne, "or", lastAction);
}


module.exports = displayActions;