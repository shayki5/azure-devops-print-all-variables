import tl = require('vsts-task-lib/task');

async function run() {
    try {
        //do your actions
        const allVariables = tl.getVariables()
        allVariables.forEach(element => {
            console.log(element.name + "=> " + element.value)
        });
        
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
