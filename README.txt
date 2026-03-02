Day 1--> Created the folder structure and made a signup route, user model.
Day 2--> Implemented the signup logic and added nodemailer to send welcome email to users after successful registration.

28th feb->
-> wrapping everything in try catch block seems inefficient, should i make a custom handler/manager for something like this?

-> now that i have email services, i should add verification process!
-> password reset too , 


1st march->
-> added logout route with proper security feature
-> corrected the minor errors that were hanging around in the codebase, couldn't find them without testing the routes, 
hail INSOMNIA!

2nd march->
-> added otp gen + verification email, didnt yet add the actuall verification route , kinda confused about the flow 
-> for password reset , a email will be directly sent to user's email with a link to resetpassword route something