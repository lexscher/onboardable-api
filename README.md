# ONBOARD-able

This is the api for an onboarding system



### Notes / Planning

#### the admin_user_config model

So, the idea with the `admin_user_config` is that when an admin starts editing the pages, we can upsert (find or create) ? a `admin_user_config` associated with that user, the page, and the component in question. 

When an admin wants to switch a component to another page, and they already have something configured (where that user-page-component already exists), we'll update the entry

#### avoiding possible issues

- We'll also have validations in play, so that the same component can't exist in both multiple pages at once under the same admin's config

- In the frontend, we'll try to make a kind of "editing state" which will just be while the admin is updating their pages and components, no requests will be sent until they hit some kind of "Save" button. The first request will attempt to make the change but in the case of any errors the admin will be notified. I like the idea of snack messages, but depending on how much time I have I may or may not add these in instead of just the red error messages.

#### user flow

A user can come to the onboarding platform by entering a username and/or email (not sure if I want both or one or which one yet),
  - A post request gets made to create a user with minimal information
  - Update, we're going with just an email for this one


They'll see the first page informing them about their onboarding and that they'll have to submit additional information about themselves

They click "Next"

they see the second page where there are a one or more components, each with one or more fields

They fill out the forms and click next
- a post request gets made to update a user with additional information (OR we hold that information and when they go to the next page to fill out the last forms for the final components, and hit "Finish" or "Submit" that's when we make that request to update the user —- this way we only send that update request once)

they reach the final page (unless an admin has created more pages -- I'm also seeing validations where if an admin tries to create more pages than there are components then the pages won't get made, since one page must have at least one component, and we don't want the same component to be filled out by a user in one sitting. This can be a post MVP)

They fill out the forms and click "Finish"
- a post request gets made to update the user with More additional information


## ERDs
<img width="1431" alt="Screenshot 2024-09-19 at 12 13 42 PM" src="https://github.com/user-attachments/assets/7918b017-437e-4bf0-be1c-d0a126130491">


## Api Endpoints


## running the project

