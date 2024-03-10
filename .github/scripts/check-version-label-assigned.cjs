// @ts-nocheck
/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({ github, context, core }) => {
  const labels = context.payload.pull_request.labels;
  const versionLabels = ["version:patch", "version:minor", "version:major"];

  var body = `👋 **Thanks for contributing.**
  
  In order for us to **auto-merge** your branch, you will need to **apply** one of the following **labels** to your PR:
  - ${versionLabels.join("\n- ")}\n
  **Note that you need to apply only one label, as applying more than one version label will fail.**
  Thank you!`;

  if (labels.length === 0) {
    await github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: body,
    });

    core.setFailed("No labels found");
  } else {
    var total = 0;
    for (const label of labels) {
      if (versionLabels.includes(label.name)) {
        total += 1;
      }
    }

    if (total > 1) {
      await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: body,
      });
      core.setFailed("Apply more than one version label");
    } else if (total === 1) {
      return;
    } else {
      await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: body,
      });
      core.setFailed("No labels found");
    }
  }
};
