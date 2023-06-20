# Is-it-busy

Is-it-busy is a crowdsourcing app that allows users to report and check the busyness level of various locations, starting with shopping centers.

## Features

- Location Detection: Detects users' current location.
- User Reports: Allows users to submit reports about the busyness level of a location.
- Real-time Reports: Shows real-time busyness levels based on user reports.

## Project Setup

This section will be updated with instructions on how to set up and run the project locally as the project progresses.

## Latest Update

This commit includes the creation of the User model in Sequelize, which maps to the Users table in our PostgreSQL database. This model includes fields for username, name, email, and password.

We also set up a test endpoint in Express for registering new users. This endpoint accepts a POST request with a body containing a username, name, email, and password, then creates a new user in the database using this data. We validated the functionality of this endpoint using a REST client.


## Future Plans

We aim to extend the app to include more types of locations and additional features based on user feedback.
