# Seeds By Time

### Technologies
- Node.js
- React
- postgreSQL
- Express
- Tailwind
- Auth0

### About
A simple application that you can use to search what you can plant in your garden each month based on your hardiness zone.
I made this specifically for my mom because she wanted an easy way to see what you can plant in a given month.
I wanted to make the UI simple and easily readable, so I kept the plant details to a minimum.
The plant data is stored using postgreSQL and currently only covers zones 3-8 reliably. You can save the list for the given month as as a pdf file
as well with the click of the button in case you wanted to print it out.

### Installation
#### Front-end
The client was made using Create-React-App and the server using express and Node.js. The front-end is hosted on Heroku and the database is on an AWS EC2 instance.
To setup the front-end, run `npm install` in the seed-bank directory for the client and the seed-bank directory for the server. For development, run
`npm start`. The files are served from the express server. I use PG Node to connect the server to the postgreSQL database, and the queries can all be found in 
the controllers.js file in the database directory.
#### Database
There is a .sql to seed the database, which takes a csv of plant data. I would like to use an API in order to get data on a broader range of hardiness zones, but
I couldn't find one for that purpose. If anyone knows about an API or a dataset that would help let me know!
