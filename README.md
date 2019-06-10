# Eat-Da-Burger!

Hungry for a burger? Have fun with this app! Type the kind of burger you want to eat, click "Submit", and your new burger will show up on the left side of the page with a "Devour It!" button next to it. Click "Devour It!" and the burger will move to the right side of the page with a "Devoured" label. 

Technologies used to make this app are Heroku, Git, CSS, HTML5, Bootstrap, JavaScript, jQuery, MySQL, Express, Express-Handlebars, Node.js and AJAX. 

To make this app, I first created a MySQL database for the storage of burger names and whether or not they have been devoured. I configured my connection to a JawsDB database for deploying to Heroku and to localhost for testing the app before deployment. 

I then configured my ORM to read, add to, and update data in the database, and set up routes in a controller to allow data from the database to show up in the browser. I used Express-Handlebars to create layouts of the web page and the new burger entries with "Devour It!" and "Devoured" buttons. I wrote JavaScript functions to handle when users click the "Submit" or "Devour It!" buttons. 

I hope you have as much fun playing around with Eat-Da-Burger as I had making it.

Link to the deployed app: https://mysterious-fjord-63938.herokuapp.com/