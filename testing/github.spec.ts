/*
Github/Gitlab/Bitbucket - Version control tool

we need to install "Git" installed in our local system - git-scm.com
git --version - to verify the installation
git --help - help system for git

Create an account on github.com
Repository - a repository is a storage space where you host/store the different version of code.

You are the first person to start test automation in the organization:
    0: Create new repository on version control tool as 'Private'
    1: Cretae a project and write the test case in your local system
    git status
    2: git init - Initalize a new git repo inside the local project directory
    3: git add . - add all the files in local git area
    4: git commit -m "first commit" - commit the changes to the local with a message
    5: git branch -M master - create a new branch names as "master"
    6: git branch - list all the branches in the repository
    7: git remote add origin https://.... - add a remote repo to local repo and ask for authorization
    8: git push -u origin master = push the commited changes from local "master" to remote repo

If the automation repository already available:
    0: Clone the remote repo in local system - one time setup
        git clone https://github.com... - repo URL
        Install all dependencies - npm install

    FOLLOWING STEPS FROM #1 TO # WILL DO ON DAILY BASIS:

    1: Create a new branch for test automation branch from master branch - git checkout -b LoginPage (Branch Name)
    2: git branch - list all the branches in the repository including the recently created branch (LoginPage) in GREEN color
    3: Make the changes in the code and save it
    4: git status - validate all the files that have changes
    5: git add . - add all the files in local git area OR git add tests/github.spec.ts - add only this file
    6: git commit -m "added github" - Provide a comment for the reason of commit
        6.1: Switch to the master branch - git checkout master
        6.2: Pull the changes from remote "master" branch - git pull origin master / git pull
        6.3: Switch back to the feature branch - git checkout LoginPage
        6.4: Merge master branch to LoginPage branch - git merge master

    IF THERE IS A MERGE CONFLICT (WHEN SOMEONE ELSE ALSO WORKED ON THE SAME FILE AND PUSHED THE CODE AND YOU ARE ALSO PUSHING
    YOUR CODE IN SAME FILE THEN ACCEPT THE CODE WHICH IS CORRECT), AND RUN
        git add .
        git commit -m "resolved conflict"
        git merge master

    7: Push the changes to the remote branch - git push origin LoginPage

    git stash - remove all the UNWANTED changes
    git remote add origin https://.... - add a remote repo to local repo and ask for authorization
    git push -u origin master = push the commited changes from local "master" to remote repo

    Go to Github and create a pull request(PR) to merge changes from LoginPgae to master branch. The other
    member will review code and approve the branch

    git status
    git branch
    git checkout -b branchName - create a branch and control move to it
    git checkout branchName - it will just create the branch
    git add .
    git commit -m "message"
    git push
*/