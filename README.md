[![Build Status](https://travis-ci.org/drewmoore/frontend_interview_test.svg?branch=master)](https://travis-ci.org/drewmoore/frontend_interview_test)

# Solution to the Front-End Interview Test

Here is my own approach to implementing the Real Estate listing template for the position of Frontend Developer. To get started:
- Run `yarn`.
- Run `npm serve`.
- Open browser at http://localhost:8080.
- Tests are run with `npm test`.

## Technologies Used and Rationale
- React
  - Component lifecyle easily allows for retrieving needed data and rendering it.
  - Component-based approach allows for more modularized and reusable code.
- Redux
  - Efficient, organized state management.
  - Single source of truth for all components.
  - Handles requesting and receiving data from an API in an organized manner.
- Jest
  - Integrates well with React.
  - Handles asynchronicity intuitively and eloquently with Promises.
- Enzyme
  - Replicates browser environment.
  - Tests for accurate rendering of UI.
- Sass
  - Combines easily with the bootstrap-sass package favored by the bootstrap-loader for webpack.
  - Utilizes and expands on Bootstrap variables.

## Uncertainties
- I'm not completely sure which point of data from the API determines whether a property is for "Mieten" or for "Kaufen".
  - I guessed the `purpose` field would be the criteria.
