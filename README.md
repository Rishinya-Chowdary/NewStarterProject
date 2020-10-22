## Song List Project
This is a project just to sharpen my basics of React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npx create-react-app my-app`

To create a new react app

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# ProjectDescription
In this project , a list of songs are displayed with name , duration and a play button for each song on the left panel.
On the right panel , the name is song that is being played is displayed.

# Default Edge case
A list of songs on the left panel.
"Click the song to play" on the right panel.

# Case1

When a play button of a particular song is clicked :
=> The play button changes to stop.
=> "Click the song to play" on the right panel is replaced by the name of the song that is being played.

# Case2

When a song is played in the middle of the other song :
=> The previous song's stop button changes to play.
=> The current song's play button changes to stop.
=>On the right panel , the previous song's name is replaced by the current song's name.


# Case3

When a song that is playing is stopped using the stop button :
=> The button changes to play.
=> "Click the song to play" appears again.
