// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements #1
// Planning #2
// Design #3
// Implementation #4
// Testing & Integration #5
// Maintain #6


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
// STUDENT NOTE: It says the first one's done for us, but it said planning was #1, and I don't think it is.
// You can't plan around requirements if you don't know what they are in the first place.
// Also, in the slides for the SDLC that I found, it was in this order, too. (as well as W3schools, if you find them reliable)
// Thought I'd note this here as to what I was thinking, not trying to say I'm exactly right or anything like that, just typing it out.
// so you can understand the reasoning behind why I ordered them as I did.
const _W3_SOURCE = `https://www.w3schools.in/sdlc-tutorial/software-development-life-cycle-sdlc/`

const analysisOfRequirements = `Get an Idea for what you need to build, and what it needs to do. What, Where, Why, When, How?`
const planning = `Using your analysis from the requirements, see if the idea is feasible or not, and begin planning out what systems
will interact with eachother, as well as your data-flow.`
const design = `Begin designing components based off of the plan, front-end, back-end, UI, DB, etc. Just a further stage of planning, 
more in depth planning on how your architecture will interact.`
const implementation = `Begin implementing your plan in constructing your code. Get everything talking to one another, hopefully no 
bugs, errors, or crashes.`
const testingIntegration = `Test for any problems leading to crashes, go back, revise them, defensively program, look for edge cases etc.
Make sure everything works as intended`
const maintain = `Listen in from user/customer feedback for any problems that may occur, and repeat the cycle to stomp out the issues.`