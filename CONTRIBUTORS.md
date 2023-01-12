# Development Docs (past, present and future)

## Content Table

- [Change Logs](#changelog)
- [Best Practices](#best_pactices)
- [Future Scope](#future_scope)

---

## Change logs <a name="changelog"></a>

### 1/9/23

- **The problem**: When teams collaborate on a code base, overtime the code can and start to become inconsistent across many files and difficult for even a skilled developer to manage what is going on. Incomplete and broken code will start make its way in to the source overtime, leading to an unstable and buggy application.
- **A solution:** Implement linting to the source files and enforce better conventions across the repository. For this we have [ESLint](https://docs.npmjs.com/cli/v7/using-npm/workspaces#adding-dependencies-to-a-workspace) paired with the [Prettier](https://prettier.io/docs/en/) plugin. They are now configured accordingly for each application based upon that frameworks needs to throw error when certain rules are not followed which stops unsafe logic while enforcing consistent clean syntax throughout all files. In addition we paired our linters with [Husky](https://typicode.github.io/husky/#/) and a pre-commit hook that scans the staged changes before committing and exits the process if any violations are present. This ensures only good code is in our commit history.

- **The problem**: When attempting to configure our linting to have separate settings for each code source folder an issue in dependencies would often arise. It became a circle of resolving one peer dependency requirement just to have a another one come up. This was likely caused by our project structure. Although each project is separated from each other, they still do shared the same root folder and it's version control (.git). Not quite a mono and not really a poly repo either, more of a hybrid.

- **The solution**: Utilize [NPM's workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces#description) allowing use to configure like a real [monorepo](https://en.wikipedia.org/wiki/Monorepo). This got the the trick done with setting up the linting to have separate rules for each projects folder. Plus now our package manager is managing all the dependencies together. There is now a subtle difference to the folder structure and how we'll use the (`npm`) CLI.

    **before:**

    ```bash
    DIR_ROOT
    |   readme.md
    +---.git
    +---client
    |   |   package.json
    |   +---node_modules
    |   +---public
    |   \---src
    |           index.js
    \---server
        |   package.json
        +---node_modules
        \---src
                index.js
    ```

    **after:**

    ```bash
    DIR_ROOT
    |   readme.md
    |   package.json # new
    +---node_modules # new
    +---.git
    +---client
    |   |   package.json
    |   +---node_modules
    |   +---public
    |   \---src
    |           index.js
    \---server
        |   package.json
        +---node_modules
        \---src
                index.js
    ```

    As you can see there are three packages now, but is actually be handled as one record by NPM. The important thing to note is that when using the CLI here instead of changing your working directory to manage the nested dependencies. You can now pass an argument to the CLI that specifies which package to modify, here's an example of the syntax `npm add <package_name> -w <workspace_name>`. The workspace flag (`-w`) followed by the name tells it where to go. Note omitting the workspace flag will default npm to add the package to the root directory. Check out their [official documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces#adding-dependencies-to-a-workspace) to learn more.

- **The problem:** When I had first cloned this repo our client app wasn't even a running application. There were dependencies being imported but no referrance of the them ever exitsiting in the project. Some how this was merged into the project, and that can be pretty bad if were to happen when came to scale.

    ![failing build log](./assets/Screenshot%202023-01-08%20131705.png)

- **A solution:** Implement a [CI/CD](https://en.wikipedia.org/wiki/CI/CD) pipeline through GitHub workflow to ensure the code builds in its current state. This is triggered on every push, and you can check the status of commit thats pushed. But the more important part is that no one can merge broken code.

---

### Best Practices

---

### Future Scope