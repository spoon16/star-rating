# star-rating

## Application Overview

Star-rating is a simple single page application that built on Facebook's React framework. Star-rating asks the user to assign a rating to Twin Peaks and Veronica Mars using the common 1-5 star rating scale.

All application code is stored in `./app`. Markup is in `./app/index.html`, styles/sass is in `./app/star-rating.sass`, and javascript/jsx is in `./app/star-rating.jsx`.

### Building Blocks
- [React 16](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Font Awesome 5](https://fontawesome.com/)

## Development Environment Setup

Clone this repository `git clone https://github.com/spoon16/star-rating.git`. Star-rating uses yarn instead of npm. Run `yarn install` to install project dependencies. Run `yarn start` to compile the sass and jsx resources and start the application at [http://localhost:8080](http://localhost:8080).

Live reload is not configured so changes will not automatically be loaded into your browser. To see your latest changes restart the local server. `CNTRL-C` to kill the local server and then `yarn start` to restart the local server. 

## Testing/Validation

No automated testing is included in this repository. However, a `Dockerfile` has been provided. Docker ensures that multiple engineers can run the star-rating using the same host configuration. To build and run the container use the following commands.

```bash
docker build . -t star-rating
docker run --rm -p 8080:8080 star-rating
```
