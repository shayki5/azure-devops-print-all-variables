## Print All Variables ##

Print to the screen all the available varaibles and their values for this job. Cross platform (work on Windows/Linux/Mac).

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