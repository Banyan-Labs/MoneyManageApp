# Money Manage App
<table>
<tr>
<td>
  A web app for all of you're money management needs all in one place.
</td>
</tr>
</table>

[![Banyan Labs](https://img.shields.io/badge/Banyan-Labs-teal.svg)](https://banyanlabs.io/)
[![Contributors](https://img.shields.io/github/contributors/Banyan-Labs/MoneyManageApp.svg)](https://github.com/Banyan-Labs/MoneyManageApp/graphs/contributors)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Banyan-Labs/MoneyManageApp.svg)](https://github.com/Banyan-Labs/MoneyManageApp/pulls)
[![GitHub Issues](https://img.shields.io/github/issues/Banyan-Labs/MoneyManageApp.svg)](https://github.com/Banyan-Labs/MoneyManageApp/issues)

## About The Project

////////////////////////////

---

### Built With

////////////////

---

### 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes.

<!-- See [deployment](#deployment) for notes on how to deploy the project on a live system. -->

1. Clone the repo to you're local machine (`git clone https://github.com/BanyanLabs/MoneyManageApp`)
1. Install node dependencies (`npm install`)
1. Start the development environment (`npm start`) <- _this will run both API server and web client concurrently_
    - start the API server only (`npm run start:server`)
    - start the web client only (`npm run start:client`)

---

### Development Process

All feature tickets should be developed in their own branch. We do not base from the `main` branch.

Our development branch is `Dev-Branch`. Feature branches should be name after their ticket number. Example: `MM-24`

1. Before creating your feature branch. Make sure that you have the most recent changes. (`git pull origin Dev-Branch`)
1. Then create your feature branch from the dev branch. (`git checkout -b <new_branch_name> Dev-Branch`))
1. Make sure you set the upstream to origin for your working branch (`git push -u origin <branch_just_created>`)

### Committing and Merging

We're using ESlint to keep consistently across our code base. The rules are configured to throw errors when not followed. We're also implemneting the lint rules by a pre-commit hook. If there are any linting errors in your branch they will have to be fixed before committing. If you're using VScode, I recommend installing [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions to your editor.

When your feature is completed and ready for to merge, raise a Pull Request against `Dev-Branch`.

Before any PR can be merged the code in the request will be checked for stability. Every commit that pushed is checked in an automated process that will ensure it is able to still build and our testing suites passed.

> Notice, when opening a new PR GitHub will assume it'll will be to `main` that's cause that is our default branch. Juts make to switch the base when you're opening the request.

Our `main` and `Dev-Branch` branches are protected on our origin. Both require a pull request to merge and PR can not be merged with out at least one approval. The `main` branch requires an approval from at least one code owner.

#### Contributors should check the dev logs [here](CONTRIBUTORS.md) for updates about recent changes

---

