[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12648404&assignment_repo_type=AssignmentRepo)
# Boba Reviews 🧋🫧🧉☕🫖🍋

Your team will utilize MongoDB and Express to create a review website for Happy Lemon that will let users write reviews and rate their tea orders.

## Part 0 - UX Design

Before working on your code, your team must design low-fidelity wireframes for your application and get them approved by the teaching team via a private post on Piazza. These can be hand-drawn on paper or using tools such as Figma, Miro, or Balsamiq.

## Part 1 - Requirements

* You will have to create this program from scratch but are allowed to use open source web design CSS so long as it is cited and adapted to fit your needs.
* Use express and mogodb with mongoose to manage connections. You do not have to use pug if you do not want to.
* It must have a favicon.
* It must use both GET and POST requests
* Users must be able to include a photo with their review.
* The system will show all reviews and allow to filter by beverage type (milk tea, jasmine green tea, lemon tea, slush, smoothie, etc.).
* Only users with a valid email can post a review (to avoid spam).

The same requirements apply:

* Validated your html (at least what it generates) and have included metadata like in previous assignments.
* Test for contrast with a11y.
* Modified the documentation in the program's comments (for the files you edited) to describe the changes you made. Verify that you are well documenting your code using [JSDoc](https://www.npmjs.com/package/jsdoc) standards. You do not need to generate an API.
* Ensured that you write satisfactory unit tests and that your code passes them, with **75%** coverage, but the code you wrote needs to be completely covered. Testing must include mocking.

## Part 2 - Reflection

 1. Add screenshots showing your app running on Google Cloud. Add a link to your website. Add a screenshot showing the html on your website has been validated. Also one showing proper contrast.
    #### Google Cloud
    <img width="1184" alt="google cloud" src="https://github.com/CS5610-Seattle-Fall23/expressproject-team4/assets/90870823/53e15c01-e0dd-4497-8cfd-49c04f953881">

    #### [link to web] (https://cs5610-test-proj.wl.r.appspot.com/)

   ![Example Output](https://github.com/CS5610-Seattle-Fall23/expressproject-team4/blob/main/screenshot/Capture1.JPG)
   ![Example Output](https://github.com/CS5610-Seattle-Fall23/expressproject-team4/blob/main/screenshot/Capture2.JPG)
   ![Example Output](https://github.com/CS5610-Seattle-Fall23/expressproject-team4/blob/main/screenshot/Capture3.JPG)
   ![Example Output](https://github.com/CS5610-Seattle-Fall23/expressproject-team4/blob/main/screenshot/Capture4.JPG)
    
 2. Add screenshots showing your Atlas database before and after your app runs.

    <img width="1251" alt="mongoDB" src="https://github.com/CS5610-Seattle-Fall23/expressproject-team4/assets/90870823/66f0ef14-b06e-4e53-9b2c-9627d51a3fe4">
    
    <img width="461" alt="Screenshot 2023-11-12 at 11 24 55 PM" src="https://github.com/CS5610-Seattle-Fall23/expressproject-team4/assets/90870823/eb9576ae-7a46-4bcd-91d5-2d68c59e7f7e">

 3. Each person: Describe your experience working with your team to complete this project. What is one key learning that you're taking away from this experience? What is one thing that you would change?
    
    Peiying: Our team mostly connected via texts in a group chat. We communicated with each other about task assignments, schedules, and other commitments - we worked pretty well individually. One key takeaway is that I enjoyed the flexibility of working with teammates in MongoDB and Google Cloud. I wish that our team would have more collaboration, for example, have team meetings or pair coding.

    Zhuoxi: We used Git to coordinate our development and prevent conflicts. Effective communication and collaboration allowed us to complete tasks more efficiently and maintain a higher level of project quality. If I were to change one thing, it would be to plan the project timeline and task allocation more comprehensively and earlier.

    Jiali: Working with my team on this project has been a positive and collaborative experience. One key takeaway is the importance of effective teamwork in achieving project goals. The constant communication, shared insights, and combined efforts significantly improved the overall outcome. If there's one thing I would change, it would be to introduce more structured collaborative activities, such as pair programming. 
    
 4. Explain how your project authenticates your users.
    
    We used Google IAP to authenticate users - users need to sign in with a Gmail account to view our website.
    <img width="549" alt="user" src="https://github.com/CS5610-Seattle-Fall23/expressproject-team4/assets/90870823/a5cf3bad-cff8-447f-a34f-461ca06c4ce5">

    
 6. What was the process like for working on a team repository?
    
   Working on a team repo made it easier to collaborate - We each had our own branch which made it easy to see each other's work and keep track of versions. Although when we merged code in the middle of the project, we could have merged branches into main when the features were done.
