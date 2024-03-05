# Advanced Customer Support prototype

This is the prototype for Advanced Customer Support

## Contact

- Allison Palum, Interaction Designer - allison.palum@engineering.digital.dwp.gov.uk
- Alison Lewishill, Interaction Designer - alison.lewishill@engineering.digital.dwp.gov.uk
- Philip Wilson, Senior Product Manager - philip.wilson1@dwp.gov.uk

## File structure

The bulk of our code is in the `views` directory. There, you'll find the `acs` directory where all of our "apps" exist. An app can be described a few ways, but it is essentially one complete journey. ie, the six point plan

### Notes

Notes are used document our design changes and version history. Every version of every app has its own notes directory. Within that directory, you will find that every page of the app has it's own notes file. That way, we can add the correct notes to page. 

### Version

Create a new version when designs need updating. ie, using different components, changing list options, adding a new question

#### How to create a new version

- Copy the most recent version directory and paste it into the app
- Update the name of the directory, ie, change `v2` to `v3`
- Go through each file within your new version and update any reference to the old version to the new version, mostly in `href`'s
- Go the the `_versions` directory in the app and add your new version to the versions list and the pagination items list in for each page

This is a pain in the butt, but it must be done!!!

Body text

This is a [link](<link>).

- Bullet point
- Bullet point
