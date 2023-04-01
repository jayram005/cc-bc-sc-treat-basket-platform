# bc-cc-treat-basket-API
The BC Gov is going to set up a service that delivers treat baskets to sick children. We want to allow members of the public to identify children to receive a basket.

This project was generated with [NodeJs 16.1] version 161.0. Please follow the below steps to clone, run, build, and deploy this project

# Steps Run the code locally on your machine

## Step 1 -  Installation of pre-requisites on your machine

Install NodeJS on your machine with version 16.x and above using this website and as per your device OS [NodeJS](https://nodejs.org/en/download/)

Run `npm install -g npm@latest` to install npm on your machine globally

Run `npm install -g sequelize-cli` to install sequelize cli on your machine

## Step 2 -  Clone the code using the below commands and install dependencies

Clone this repository using the below command `git clone -b master [git@github.com:shubhadaathorat/bc-cc-brewery-web.git]` copy the git URL from the repo if the repository name is different

Important step - Open the terminal on your machine and navigate to the root folder of the project using `cd path_to_project_root_folder`

Run `npm install` to install all the project dependencies.

## Step 3 -  Database Creating and Configuration

Install Postgres in your local systme(https://www.postgresql.org)

Important Step - Create database with name `codechallenge` and database user with name `treatuser` using command 

`
CREATE DATABASE codechallenge;
CREATE USER treatuser WITH PASSWORD 'admin';
GRANT ALL PRIVILEGES ON DATABASE codechallenge TO treatuser;
`

Important Step - Create Database tables run command: `npm run dbmigrate`

Important Step - Seed data in master tables run command: `npm run dbseed`

## Step 3 - Run and serve the application locally

Run `npm run start` for a local server. Navigate to `http://localhost:4500/`. The app will automatically reload if you change any of the source files.

To Stop the execution navigate to the terminal and enter `ctrl+C` then type `Y` to stop the code execution locally


# Further help

To get more help on the Sequelie CLI use `sequelize --help` or go check out the [Sequelize Cli npm module](https://www.npmjs.com/package/sequelize-cli).

# License

[APACHE v2.0](https://www.apache.org/licenses/LICENSE-2.0)