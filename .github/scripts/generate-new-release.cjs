// @ts-nocheck
/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({ github, context, core }) => {
  let body = "";
  let insert = "false";
  const version = process.env.RELEASE_TAG;
  const version_with_v = `v${version}`;

  try {
    const changeLogContents = require("fs").readFileSync(
      "CHANGELOG.md",
      "utf-8"
    );
    changeLogContents.split("\n").forEach((line) => {
      if (line.startsWith("## ") || line.startsWith("### [")) {
        if (line.includes(version)) {
          insert = "true";
        } else {
          insert = "false";
        }
      }

      if (insert === "true") {
        body += line + "\n";
      }
    });

    const response = await github.rest.repos.createRelease({
      owner: context.repo.owner,
      repo: context.repo.repo,
      tag_name: version_with_v,
      name: version_with_v,
      draft: false,
      prerelease: false,
      body: body,
    });
    core.exportVariable("RELEASE_ID", response.data.id);
    core.exportVariable("RELEASE_UPLOAD_URL", response.data.upload_url);
  } catch (error) {
    core.setFailed(error.message);
  }
};
