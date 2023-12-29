// @ts-nocheck
/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = ({ context }) => {
  const labels = context.payload.pull_request.labels;
  const versionLabels = ["version:patch", "version:minor", "version:major"];
  var bumpType = "";

  for (const label of labels) {
    if (versionLabels.includes(label.name)) {
      bumpType = label.name.split(":").pop();
      break;
    }
  }
  return bumpType;
};
