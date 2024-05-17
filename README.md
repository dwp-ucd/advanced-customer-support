# Advanced Customer Support prototype

This is the prototype for Advanced Customer Support

## Contact

- Alison Lewishill, Interaction Designer - alison.lewishill@engineering.digital.dwp.gov.uk
- Philip Wilson, Senior Product Manager - philip.wilson1@dwp.gov.uk

## File structure

The bulk of our code is in the `views` directory. There, you'll find the `acs` directory where all of our "apps" exist. An app can be described a few ways, but it is essentially one complete journey. ie, the six point plan

### Notes

Notes are used document our design changes and version history. Every version of every app has its own notes directory. Within that directory, you will find that every page of the app has it's own notes file. That way, we can add the correct notes to page.

To add notes to each file use this code
```
{% include "../_notes/<notes file name>.njk" %}
```
This should sit inside the content block and inside of a <div>
Pending: making this code conditional so that it only shows up when we are not testing with users

### Version

Create a new version when designs need updating. ie, using different components, changing list options, adding a new question

#### How to create a new version

- Copy the most recent version directory and paste it into the app
- Update the name of the directory, ie, change `v2` to `v3`
- Go through each file within your new version and update any reference to the old version to the new version, mostly in `href`'s
- Go the the `_versions` directory in the app and add your new version to the versions list and the pagination items list in for each page 

This list in the versions file should have each version of the appropriate file. There should be the same number of items in govukPagination.
```
{% set versions = [ 
  "../v1/searchlight",
  "../v2/searchlight",
  "../v3/searchlight"
] %}
```

This is a pain in the butt, but it must be done!!!

### Git

Some useful git commands to get you where you need to go

#### Making a new branch

- See what branch you're in by running `git branch`
- If you're not in the `main` branch, go to the `main` branch by typing `git checkout main` 
- Run `git pull origin main` in order to get the most recent version of `main`
- Think about the mame of your new branch. It should describe what changes are being made on the branch.
- For example, if you are making a branch to update copy, perhaps name it `update_copy`. It is good practice to use that format with `_`'s. ie, `this_is_my_new_branch`
- Anyways, once you decide you new branch name, you can run `git checkout -b update_copy`, or using whatever your new branch name is
- Running this comman will create your new branch and take you to that branch. If you run `git branch`, you'll see that you're on your new branch

TL;DR

- Run `git branch`
- If you're not on `main`, run `git checkout main`
- Run `git pull origin main`
- Run `git checkout -b put_branch_name_here`
- Run `git branch`

#### Making changes

- When you're on you branch and have made changes, save them (of course)!
- Once saved, you can run `git add .` (that period indicates that you are adding all changed files, you can add individual files, but don't worry about this. It's rare you'd need to do this)
- Basically what `git add .` does is takes your changes from your working directory and adds them to the staging area. Like, in baseball when a hitter leaves the dugout and is "on deck"
- You can then run `git commit -m "a message explaining what changes were made"`, which adds your changes to the project history with a lil message of what you did
- Finally, push your changes to the branch by running `git push origin branch_name` replacing branch_name with the name of the branch you are on. This publishes your changes to the branch. 

TL;DR

- Save changes!
- Run `git add .`
- Run `git commit -m "some message"` replacing "some message" with a blurb about the changes made
- Run `git push origin branch_name` replacinqg branch_name with the name of the branch you're on

#### Reverting changes

- If you want to revert back to a particular commit, run `git log`
- You will see a list of commits that look like this
```
commit 67bcfc66afd780ae2587e0a8d2415b2678ce7383
Author: Allison Palum <allison.palum@engineering.digital.dwp.gov.uk>
Date:   Thu May 16 11:34:39 2024 +0100

    made some changes
```
- Copy the big, long id next to the word commit for the commit that you would like to revert back to
- Run `git reset --hard commit_id`, replacing commit_id with that big, long id that you've copied
- Then, run `git pull origin branch_name`, replacing branch_name with the name of the branch you are on

TL;DR

- Run `git log`
- Copy the id of the commit you want to revert back to
- Run `git reset --hard commit_id`
- Run `git pull origin branch_name`

#### Merging your branch into main

- Go to github and create a pull request
- Add the appropriate reviewers
- Once approved, merge the branch into `main` on github
- Go back to your terminal and run `git pull origin main` on the `main` branch

### Routes

Routes are used to direct the application to the correct page based on what a user selects. For example, if they select "Yes" take them here, if they select "No", take them there

If you need to direct a user based on some conditional (if this do that, otherwise do this), make sure the `action` in the html form element is the same page you're on. So, if you're on the `01does-the-customer-know.html` page and you want to create a route based on how the user answers, you would want the `form` to look like...
```
<form class="form" action="/acs/in_person_adjustments/v2/forms/01does-the-customer-know" method="post">
```
From there we can create a route that looks like this...
```
router.post('/acs/in_person_adjustments/v2/forms/01does-the-customer-know', function(request, response) {
    var customerConsent = request.session.data['customer-consent']
    if (customerConsent == "Yes"){
        response.redirect("/acs/in_person_adjustments/v2/forms/02what-kind-of-adjustment")
    } else {
        response.redirect("/acs/in_person_adjustments/v2/forms/03customer-does-not-know")
    }
})
```
This means that when you click continue on the does-the-customer-know page, the route will be triggered (because the page is in the action) and the route above will run.

You will need to crate a new route when you create new versions as well because the url changes with new versions.


Body text

This is a [link](<link>).

- Bullet point
- Bullet point
