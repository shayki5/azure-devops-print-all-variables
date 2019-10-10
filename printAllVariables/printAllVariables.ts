import tl = require('vsts-task-lib/task');

async function run() {
    try {
        //do your actions
        const allVariables = tl.getVariables()
        var sortedArray: tl.VariableInfo[] = allVariables.sort((obj1, obj2) => {
            if (obj1.name > obj2.name) {
                return 1;
            }
        
            if (obj1.name < obj2.name) {
                return -1;
            }
            return 0;
        });
        console.log("All the variables in this format: [variable name] => value")
        sortedArray.forEach(element => {
            console.log(element.name + " => " + element.value)
        });
        
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
