// Write your code in this file!
const currentUser = 'Grace Hopper'

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase(); 


const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

beforeAll(async (done) => {
    // do some asynchronous setup
    await asyncFunction();
    done();
  }, 10000); // set a 10 second timeout