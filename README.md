# burger

Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat.

![Alt text](public/assets/img/burger_app.jpg?raw=true "Burger")

## Function
When a user submits an order (a burger's name), the app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the 'Orders' area has a `Done` button. When the user clicks it, the burger will move to the right side of the page -- into the 'Devoured' section.

All burgers are stored in the database, whether devoured or not.

## Design
This burger logger is created with MySQL, Node, Express, Handlebars and a homemade ORM. It utilizes the MVC design pattern, uses Node and MySQL to query and route data, and Handlebars to generate HTML.

MVC design pattern:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│
├── node_modules
│
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   ├── img
│   │   │    └── burger.png
│   │   └── js
│   │       └── burgers.js
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

The final app is deployed to Heroku and accessible from the link above.

## Languages, Libraries, and Materials Sources
* Node.js
* MySQL
* [Handlebars](http://handlebarsjs.com/)
* [Express npm package](https://www.npmjs.com/package/express)
* [Body-parser npm package](https://www.npmjs.com/package/body-parser)
