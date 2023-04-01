# bc-cc-treat-basket-backend
The BC Gov is going to set up a service that delivers treat baskets to sick children. We want to allow members of the public to identify children to receive a basket.

This project was generated with [NodeJs 16.1] version 161.0. Please follow the below steps to clone, run, build, and deploy this project

# Steps Run the code locally on your machine

## Step 1 -  Installation of pre-requisites on your machine

Install NodeJS on your machine with version 16.x and above using this website and as per your device OS [NodeJS](https://nodejs.org/en/download/)

Run `npm install -g npm@latest` to install npm on your machine globally

Run `npm install -g sequelize-cli` to install sequelize cli on your machine globally

## Step 2 -  Database Postgresql installation and Configuration

Install Postgres in your local systme(https://www.postgresql.org)

After installation , you will see PGAdmin client application also installed on your machine. Launch on your local machine PGAdmin and now follow below steps carefully 

### Make sure PGAdmin is connected to local Postgres

Click on open query editor tab in pgadmin

Copy paste the below sql command to the query editor window in PGAdmin


`CREATE DATABASE codechallenge;`

`CREATE USER treatuser WITH PASSWORD 'admin';`

`GRANT ALL PRIVILEGES ON DATABASE codechallenge TO treatuser;`

Click of the run query /execute icon in pgadmin. It must give success information and now you can see a database named `codechallenge` created.

## Step 3 -  Clone the code using the below commands and install dependencies

GitHub Repository URL for this project: [https://github.com/jayram005/cc-bc-sc-treat-basket-platform]

Clone this repository using the below command 

`git clone -b master [git@github.com:jayram005/cc-bc-sc-treat-basket-platform.git]` 

Copy the git URL from the repo if the repository name is different

Important step - Open the terminal on your machine and navigate to the root folder of the project using 

`cd <path_to_project_root_folder>/backend`

Run `npm install` to install all the project dependencies.

Important Step - Create Database tables run command: 

`npm run dbmigrate`

Important Step - Seed data in master tables run command: 

`npm run dbseed`


## Step 4 - Run and serve the application locally

Run `npm run start` for a local server. 

Navigate to `http://localhost:4500/`. 

You must now see a message on terminal

Server running on port: http://localhost:4500

To Stop the execution navigate to the terminal and enter `ctrl+C` then type `Y` to stop the code execution locally


# Further help

To get more help on the Sequelie CLI use `sequelize --help` or go check out the [Sequelize Cli npm module](https://www.npmjs.com/package/sequelize-cli).

# License

[APACHE v2.0](https://www.apache.org/licenses/LICENSE-2.0)