/*
Github/Gitlab/Bitbucket - Version control tool

we need to install "Git" installed in our local system - git-scm.com
git --version - to verify the installation
git --help - help system for git
git config --global user.email "muhammadns@msn.com" - set the email
git config --global user.name "noman" - set the username
git config --global user.password pass123 - set the password
git config --global user.password - get the email/name/password

git branch test - create the branch name test but control still on master
git branch -v
git checkout -b test1 - create the brnach name test1 from master and control move to test1 

git commit -m "My changes"

git brnach -m branch1 my-branch - make a copy name my-branch of branch1 and control still on branch 1
git branch -v - verify the control
git checkout my-branch - to move the control to my-branch
git branch -v - verify the control

git branch -d branch1 - to delete the branch1

Sync local branch with remote:
git checkout -b new-branch
git commit -m "test commit"
git push origin new-branch
git checkout master

git checkout -b new-branch2
git commit -m "My commit 2"
git push origin new-branch2

What is Stash:
git add .
git stash - the file will disappear from the folder
git stash list

Re-Apply Stash:
git stash pop - it will delete the stash created and file be back in the folder
git stash list - nothing in the stash
git status
git stash
git stash list
git stash apply
git stash list
git commit -m "push stashed work"
git status

Multiple Stashes:
created another 'contact.html' file
git add contact.html
git stash - stashed contact.html file
git stash list - now list two stashed files. one latest stash and one from a previous stash

created another 'privacy.html' file
git status
git add privacy.html
git status
git stash save -m "privacy html file" - stashed privacy.html file with a message to recognize
git stash list - now list three stashed files. one latest stash file with a message and two from a previous stash
git stash pop stash@{0}

Clean up stashes:
git stash clear
git stash list
add another html file
git status - will show new file
git add .
git stash
git stash list
add another file
git status
git add .
git stash save -m "new file"
git stash list - two files
git stash clear - remove both stashed files
git stash list -  nothing in there

What is Merge & Rebase?

Merge:
git checkout -b develope
git checkout -b feature
git checkout develop
git commit -m "some other feature"
git checkout feature
git commit -m "UI development completed"
git commit -m "Module completed"
git checkouy develop
git merge feature

Rebase:
git checkout -b develope
git checkout -b feature
git checkout develop
git commit -m "Initial commit"
git checkout feature
git commit -m "UI development completed"
git commit -m "API development completed"
git commit -m "Module completed"
git rebase develop

What is Tag?
It is a specific history point in Git and contains only specific amount of code.
Clone this repo: git clone https://hani647@bitbucket.org/hani647/git-tag.git
Open the file explorer folder git-tag
    Create an index.html file
on cmd > cd git-tag
    git status
    git branch - only "master" branch
    git checkout -b test-branch
    git status
    git add .
    git commit -m "Index.html added"
    git push origin test-branch
    git tag v1.0.0 - create a tag v1.0.0
    git tag - it will show the created tag v1.0.0
    git chckout v1.0.0
    git checkout -b bugfix/PROJ-1234
    git add .
    git commit -m "Env added"
    git push origin bugfix/PROJ-1234
    git push origin v1.0.0
    git push origin --tags

What is git log?
    git log
    git branch -v

What is HEAD in git?
    git checkout master
    git branch -v
    git show-ref --head

    Reset head:
    git log
    create a file test.html
    git add .
    dit commit -m "test.html"
    git log
    git reset 1c82d43e8921fa0ac817672c099fe88a616bb363 --soft
    git status
    git add .
    git stash save -m "test reset soft"
    git stash list
    git log
    git push -f origin bugfix/PROJ1234
    
What is cherry-pick?
    git branch -v
    git checkout test-branch
    git log
    copy the index.html file
    git add .
    git commit -m "Scenario"
    git log
    git checkout master
    git log
    git cherry-pick 04c9d52164a6d6e383cef9b198256a216bdeca5b
    git log
    
*/
