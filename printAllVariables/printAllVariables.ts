import tl = require('vsts-task-lib/task');

async function run() {
    try {
        //do your actions
        const allVariables = tl.getVariables()
        allVariables.sort()
        allVariables.forEach(element => {
            console.log("All the variables in this format: [variable name] => value")
            console.log(element.name + " => " + element.value)
        });
        
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
