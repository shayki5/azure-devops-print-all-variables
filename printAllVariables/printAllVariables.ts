import tl = require('vsts-task-lib/task');

async function run() {
    try {
        //do your actions
        const allVariables = tl.getVariables()
        allVariables.forEach(element => {
            tl.setStdStream(element.name)
            tl.setStdStream(element.value)
        });
        
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
