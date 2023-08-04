### TypeScript support

Compile the file:

```shell
npx esbuild ./node-src/main.ts --bundle --platform=node --target=node20 --outfile=dist/main.js
```

Here's how it can be used in the workflow file:

```json
{
  "workflowId": "testWorkflowId",
  "workspaceId": "testWorkspaceId",
  "steps": [
    {
      "name": "Echo Hello World",
      "script": "echo 'Initial Hello World'"
    },
    {
      "name": "Use a Node custom workflow step",
      "uses": "rarmatei/nx-cloud-custom-workflow-action/main/node-workflow-step-template.yaml",
      "env": {
        "ARG_1": "args will get passed as env vars to the underlying node step"
      }
    },
    {
      "name": "Use an aggregate custom workflow step",
      "uses": "rarmatei/nx-cloud-custom-workflow-action/main/aggregated-workflow-step-template.yaml",
      "env": {
        "ARG_1": "args will get passed even to other embedded step templates in the aggregate function",
        "ARG_3": "example of passing an arg to an aggregated step"
      }
    },
    {
      "name": "You can even pass in an access token - if the repo is private - for example",
      "uses": "https://x-access-token:{{secrets.PERSONAL_ACCESS_TOKEN}}@raw.githubusercontent.com/rarmatei/nx-cloud-custom-workflow-action/main/node-workflow-step-template.yaml",
      "env": {
        "ARG_1": "args will get passed even to other embedded step templates in the aggregate function",
        "ARG_3": "example of passing an arg to an aggregated step"
      }
    },
    {
      "name": "Example of a template step with a version locked in",
      "uses": "rarmatei/nx-cloud-custom-workflow-action/v1.0/node-workflow-step-template.yaml"
    },
    {
      "name": "If you want to test any post steps of your actions above",
      "script": "echo 'Our node step above has some post steps defined. Those should run after this last step'"
    }
  ]
}
```
