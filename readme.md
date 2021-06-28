Build | Release | Extension
:-----| :-------| :--------
[![Build Status](https://dev.azure.com/shaykia/AzureDevOpsExtensions/_apis/build/status/shayki5.AzureDevops-PrintAllVariables?branchName=master)](https://dev.azure.com/shaykia/AzureDevOpsExtensions/_build/latest?definitionId=40&branchName=master) | [![Release Status](https://vsrm.dev.azure.com/shaykia/_apis/public/Release/badge/3372e1d4-189a-4d9e-aa4d-0cb86eff3c2e/4/9)](https://vsrm.dev.azure.com/shaykia/_apis/public/Release/badge/3372e1d4-189a-4d9e-aa4d-0cb86eff3c2e/4/9) | [![Extnesion](https://vsmarketplacebadge.apphb.com/version/ShaykiAbramczyk.printAllVariables.svg)](https://vsmarketplacebadge.apphb.com/version/ShaykiAbramczyk.printAllVariables.svg)

## Print All Variables ##

Print to the screen all the available varaibles and their values for this job. **Cross platform (work on Windows/Linux/Mac)**.

### Usage ###

Just add the task to your pipeline and you will get in the output all the available varaibles and their values.

Work on Windows/Linux/Mac.

- In the classic editor:

![Task](https://i.imgur.com/RBYhCEL.png)

- In YAML pipelines:

```
steps:
- task: printAllVariables@1
  displayName: 'Print all variables'
```

  


<div>Icons made by <a href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
