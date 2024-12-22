## Unable to add the submodule folder from main repository

This error might cause because the submodule itself needs to be updated to reflect the changes.

1. Navigate to the submodule directory
    ```bash
    cd src/pages/docs
    ```

2. Stage, commit, and push the changes in the submodule
    ```bash
    git add .
    git commit -m "commit message"
    git push
    ```

3. Navigate back to the main repository
    ```bash
    cd ../../../../
    ```

4. Stage, commit, and push the submodule update in the main repository
    ```bash
    git add src/pages/docs
    git commit -m "update submodule to latest commit"
    git push
    ```
     - This process ensures that both the submodule and the main repository are updated correctly.
