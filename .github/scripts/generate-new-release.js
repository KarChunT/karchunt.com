// @ts-nocheck
/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({ github, context, core }) => {
  try {
    const response = await github.rest.repos.createRelease({
      draft: false,
      prerelease: false,
      generate_release_notes: true,
      name: process.env.RELEASE_TAG,
      owner: context.repo.owner,
      repo: context.repo.repo,
      tag_name: process.env.RELEASE_TAG,
    });
    core.exportVariable("RELEASE_ID", response.data.id);
    core.exportVariable("RELEASE_UPLOAD_URL", response.data.upload_url);
  } catch (error) {
    core.setFailed(error.message);
  }
};
