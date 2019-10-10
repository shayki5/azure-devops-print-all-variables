import tl = require('vsts-task-lib/task');

async function run() {
    try {
        //do your actions
        const allVariables = tl.getVariables()
        var sorted = [];
        for(var key in allVariables) {
            sorted[sorted.length] = key;
        }
        sorted.sort();
        console.log("All the variables in this format: [variable name] => value")
        sorted.forEach(element => {
            console.log(element.name + " => " + element.value)
        });
        
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
