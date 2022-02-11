# UI Automation

This is the sample test automation task in which below test scenario is included:
    
    
Scenario: Validate user registration on Miro
Go to sign up page of Miro <br />
Fill all the details <br />
Click start now button <br />
Verify that user is redirected to check your email page <br />
        
In ideal case. We should add unique data-testIDs in dev project so that it is easy to handle all locators. Current project has less unique IDs to handle.

We can add negative and edge cases also in this project but the focus is on framework and design.

# Getting Started

Please follow below instruction to copy the project and running on your local machine for testing purpose

#### Prerequisites

Node: v12.20.0

npm: 6.14.8

Git Bash

This test was done on MAC.

# Running the tests

Given scenario is automated using Cypress.

#### POM is used for this framework

# Installation

### Linux Machine

If you’re on Fedora for example (or any closely-related RPM-based distro such as RHEL or CentOS), you can use below command to install Git:
##### $ npm install cypress


1. Clone the project from below location:

git@github.com:vishalverma21/MiroRegistration.git

2. Go to source folder in local machine

Miro/Web

3. Run "npm i" then " npx Cypress open " command in source folder " Miro/Web " and run Registration.Spec.ts


## Run all tests in DOCKER with headless chrome and video recording

1. Clone the project from below location:

git@github.com:vishalverma21/MiroRegistration.git

2. Go to source folder in local machine

Miro/Web

3. Run below command to take a pull of docker image
docker pull cypress/included:9.1.1

4. Run below command to run the test cases in headless mode
docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:9.1.1 run --browser chrome

5. After execution video folder is generated and you can see video of the execution.