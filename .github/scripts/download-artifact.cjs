// @ts-nocheck
/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({ github, context, core }) => {
  const artifacts = await github.rest.actions.listWorkflowRunArtifacts({
    owner: context.repo.owner,
    repo: context.repo.repo,
    run_id: process.env.PREVIOUS_WORKFLOW_RUN_ID,
  });
  const zipFile = "versionBump.zip";

  const versionBumpArtifact = artifacts.data.artifacts.find(
    (artifact) => artifact.name === process.env.ARTIFACT_NAME
  );

  if (versionBumpArtifact) {
    core.info("Artifact found");
    const response = await github.rest.actions.downloadArtifact({
      owner: context.repo.owner,
      repo: context.repo.repo,
      artifact_id: versionBumpArtifact.id,
      archive_format: "zip",
    });
    require("fs").writeFileSync(`./${zipFile}`, Buffer.from(response.data));
    core.info("Artifact downloaded successfully");

    // unzip without creating a new directory
    require("child_process").execSync(`unzip -j "${zipFile}" -d .`);
    core.info("Unzip artifact successfully");
  } else {
    core.setFailed("No artifact found");
  }
};
