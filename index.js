const welcomeMessages = ["Hello there!", 
                         "My name's Rudy, and welcome to The Turing Café!",
                         "I'm sure you're eager to start, so let's get right into it!"];

const taglines = ["The most deterministic eatery in the world!",
                  "Compile on your plate with our delicious food!",
                  "Our waitstaff passes the Test!",
                  "Add a delicious Apple to your next meal! (Now only $19.84!)",
                  "Anybody else smell a strange Musk coming from the back?",
                  "Our great-tasting recipes are an Enigma to most!",
                  "<i>I Woz a teenage fry-cook!</i>",
                  "Our fries are anything but Microsoft!",
                  "Serving since 1937!",
                  "<b>WARNING</b>: Exceptional service detected!",
                  "Our food is to Dijkstra for!",
                  "Requested by Alice, received by Bob!",
                  "Try our new 'Man-in-the-middle' burger!",
                  "<i>Watson and the Peculiar Case of Big Blue!</i>",
                  "We cook what we must because we can!",
                  "'For tastebuds, you monster.'",
                  "Burgerburgerburger",
                  "IC what you mean!",
                  "🎵Transistor, resistor, ooo I got a blister🎵",
                  "Again, with feeling!",
                  "Grillgrillgrill",
                  "Don't blow a Valve playing this game!",
                  "Remember to take breaks!",
                  "You've got this, I can Dell!",
                  "You should read <i>Hackers: Heroes of the Computer Revolution</i> by Steven Levy",
                  "Try our all-new Zuckerburger! Now with 50% less reptile!",
                  "MySpace, YourSpace, OurSpace, OuterSpace",
                  "Are you getting the hang of it yet?",
                  "You can do it!",
                  "'And in the end, the love you take is equal to the love you make.' - Paul McCartney",
                  "Hacker-approved!",
                  "Nerd-approved!",
                  "Bite into a Macintosh!",
                  "Roll for initiative!",
                  "Thank you, Iwata-san.",
                  "Calling Occupants of Interplanetary Craft!",
                  "Wii would like to play...",
                  "'Your future is whatever you make it, so make it a good one!' - Doc Brown",
                  "Bird Up!",
                  "Yes, we can run DOOM. Please stop asking.",
                  "Gaius was here",
                  "What <i>do</i> you do with a drunken sailor, anyways?",
                  "❤️",
                  "chiptune beats to encrypt/decrypt to",
                  "Technoblade Never Dies!",
                  "'Rage, rage against the dying of the light.' - Dylan Thomas",
                  "<i>Dead Programmers Society</i>: COMING SOON",
                  "<i>Mr. Robot</i> is a really good show.",
                  "The mind is an interpreter, brimming with possibility.",
                  "'Stay hungry. Stay foolish.' - Stewart Brand",
                  "goodFood = true;",
                  "What's small and fluffy? A lamb, duh! ;)",
                  "Attention, all planets of the Solar Federation!",
                  "'Groovy.' - Ashley Williams",
                  "'Life is a series of interconnected chess games.' - Choi"];

const burgerButtonText = ["Grill Burger", "Grilling", "Assemble Burger", "Assembling"];
const fryButtonText = ["Fry Fries", "Frying"];
const milkshakeButtonText = ["Gather Ingredients", "Gathering", "Mix 'em Up!", "Mixing"];

var currentMessage = welcomeMessages.length;

var isFryerOn = true,
    isGrillOn = true,
    isMixerOn = true;

var grillIsOnToStart = false,
    fryerIsOnToStart = false,
    mixerIsOnToStart = false;

var numBurgersMade = 0,
    numFriesMade = 0,
    numMilkshakesMade = 0;

var currentBurgerButtonText = 0,
    currentFryButtonText = 0,
    currentMilkshakeButtonText = 0;

var isBurgerActive = false,
    isFryActive = false,
    isMilkshakeActive = false;

var targetNumBurgers = 0,
    targetNumFries = 0,
    targetNumMilkshakes = 0;

const MAX_NUM_BURGERS = 5,
      MAX_NUM_FRIES = 5,
      MAX_NUM_MILKSHAKES = 5;

var isIfElseOrder = false;

var machineType = "";

function displayNextMessage() {
    if(currentMessage <= welcomeMessages.length - 1) {
        document.getElementById("current-message").innerHTML = welcomeMessages[currentMessage];
        currentMessage++;
    }
    else {
        generateNewOrder();
    }
}

function setTagline() {
   document.getElementById("tagline").innerHTML = taglines[getRandomIntInclusive(0, taglines.length - 1)];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function initializeFryer() {
    if (getRandomIntInclusive(0,1) === 1) {
        isFryerOn = false;
    }
    fryerIsOnToStart = isFryerOn;
    updateFryer();
}
  
function updateFryer() {
    document.getElementById("fryer-status").innerHTML = "Fryer is currently " + displayFryerStatus();
}

function displayFryerStatus() {
    if(isFryerOn) {
        return "on";
    } else {
        return "off";
    }
}

function toggleFryer() {
    isFryerOn = !isFryerOn;
}

function initializeGrill() {
    if (getRandomIntInclusive(0,1) === 1) {
        isGrillOn = false;
    }
    grillIsOnToStart = isGrillOn;
    updateGrill();
}

function updateGrill() {
    document.getElementById("grill-status").innerHTML = "Grill is currently " + displayGrillStatus();
}

function displayGrillStatus() {
    if(isGrillOn) {
        return "on";
    } else {
        return "off";
    }
}

function toggleGrill() {
    isGrillOn = !isGrillOn;
}

function initializeMixer() {
    if (getRandomIntInclusive(0,1) === 1) {
        isMixerOn = false;
    }
    mixerIsOnToStart = isMixerOn;
    updateMixer();
}

function updateMixer() {
    document.getElementById("mixer-status").innerHTML = "Mixer is currently " + displayMixerStatus();
}

function displayMixerStatus() {
    if(isMixerOn) {
        return "on";
    } else {
        return "off";
    }
}

function toggleMixer() {
    isMixerOn = !isMixerOn;
}

function updateBurgerStatus() {
    document.getElementById("number-of-burgers").innerHTML = "Burgers Made: " + displayBurgerCount();
    document.getElementById("burger-button").innerHTML = burgerButtonText[currentBurgerButtonText];
}

function displayBurgerCount() {
    return numBurgersMade;
}

function displayBurgerTimer() {
    var currentTime = 5.0;

    if(isGrillOn) {
        document.getElementById("error-message").innerHTML = "";
        if(!isBurgerActive) {
            isBurgerActive = true;
            changeBurgerButtonText();
            var setBurgerTimer = setInterval(function () { 
                if(currentTime > 0.1) {
                    currentTime-=0.1; 
                    document.getElementById("burger-timer").innerHTML = currentTime.toFixed(1) + "s";
                } else {
                    clearInterval(setBurgerTimer);
                    document.getElementById("burger-timer").innerHTML = " ";
                    changeBurgerButtonText();
                    isBurgerActive = false;
                }
            }, 100);
        }
    } else {
        document.getElementById("error-message").innerHTML = "Please turn the grill on before attempting to make burgers.";
    }
}

function changeBurgerButtonText() {
    if(isGrillOn) {
        if (currentBurgerButtonText >= 3) {
            currentBurgerButtonText = 0;
            numBurgersMade++;
            document.getElementById("number-of-burgers").innerHTML = "Burgers Made: " + displayBurgerCount();
        } else {
            currentBurgerButtonText++;
        }
        document.getElementById("burger-button").innerHTML = burgerButtonText[currentBurgerButtonText];
    }
}

function updateFryStatus() {
    document.getElementById("number-of-fries").innerHTML = "Fries Made: " + displayFryCount();
    document.getElementById("fry-button").innerHTML = fryButtonText[currentFryButtonText];
}

function displayFryCount() {
    return numFriesMade;
}

function displayFryTimer() {
    var currentTime = 5.0;

    if(isFryerOn) {
        document.getElementById("error-message").innerHTML = "";
        if(!isFryActive) {
            isFryActive = true;
            currentFryButtonText = 1;
            var setFryTimer = setInterval(function () { 
                if(currentTime > 0.1) {
                    currentTime-=0.1; 
                    document.getElementById("fry-timer").innerHTML = currentTime.toFixed(1) + "s";
                    document.getElementById("fry-button").innerHTML = fryButtonText[currentFryButtonText];
                } else {
                    clearInterval(setFryTimer);
                    document.getElementById("fry-timer").innerHTML = " ";
                    updateFryCount();
                    resetFryButtonText();
                    isFryActive = false;
                }
            }, 100);
        }
    } else {
        document.getElementById("error-message").innerHTML = "Please turn the fryer on before attempting to make fries.";
    }
}

function updateFryCount() {
    numFriesMade++;
    document.getElementById("number-of-fries").innerHTML = "Fries Made: " + displayFryCount();
}

function resetFryButtonText() {
    currentFryButtonText = 0;
    document.getElementById("fry-button").innerHTML = fryButtonText[currentFryButtonText];
}

function updateMilkshakeStatus() {
    document.getElementById("number-of-milkshakes").innerHTML = "Milkshake Count: " + displayMilkshakeCount();
    document.getElementById("milkshake-button").innerHTML = milkshakeButtonText[currentMilkshakeButtonText];
}

function displayMilkshakeCount() {
    return numMilkshakesMade;
}

function displayMilkshakeTimer() {
    var currentTime = 5.0;

    if(isMixerOn) {
        document.getElementById("error-message").innerHTML = "";
        if(!isMilkshakeActive) {
            changeMilkshakeButtonText();
            isMilkshakeActive = true;
            var setMilkshakeTimer = setInterval(function () { 
                if(currentTime > 0.1) {
                    currentTime-=0.1; 
                    document.getElementById("milkshake-timer").innerHTML = currentTime.toFixed(1) + "s";
                } else {
                    clearInterval(setMilkshakeTimer);
                    document.getElementById("milkshake-timer").innerHTML = " ";
                    changeMilkshakeButtonText();
                    isMilkshakeActive = false;
                }
            }, 100);
        }
    } else {
        document.getElementById("error-message").innerHTML = "Please turn the mixer on before attempting to make milkshakes.";
    }
}

function changeMilkshakeButtonText() {
    if(isMixerOn) {
        if (currentMilkshakeButtonText >= 3) {
            currentMilkshakeButtonText = 0;
            numMilkshakesMade++;
            document.getElementById("number-of-milkshakes").innerHTML = "Milkshake Count: " + displayMilkshakeCount();
        } else {
            currentMilkshakeButtonText++;
        }
        document.getElementById("milkshake-button").innerHTML = milkshakeButtonText[currentMilkshakeButtonText];
    }
}

function generateNewOrder() {
    var currentOrder = "";
    if(getRandomIntInclusive(0,2) === 2) {
        isIfElseOrder = true;
        currentOrder = currentOrder.concat("Hello! If the ");

        var chooseMachine = getRandomIntInclusive(0,2);
        var machine = "";
        if (chooseMachine === 0) machine = "grill";
        else if (chooseMachine === 1) machine = "fryer";
        else machine = "mixer";

        machineType = machine;

        currentOrder = currentOrder.concat(machine + " is already on, then I would like " + generateBasedOnMachine(machine));
    } else {
        isIfElseOrder = false;
        currentOrder = currentOrder.concat("Hello! " + generateSpecificOrder(
                                                       getRandomIntInclusive(0,MAX_NUM_BURGERS),
                                                       getRandomIntInclusive(0,MAX_NUM_FRIES),
                                                       getRandomIntInclusive(0,MAX_NUM_MILKSHAKES)));
    }

    document.getElementById("current-message").innerHTML = currentOrder;
}

function generateBasedOnMachine(machine) {
    if (typeof machine !== "string") {
        console.log("Warning: Invalid variable type passed to generateSpecificItem().");
        return;
    } else {
        if (machine === "grill") {
            targetNumBurgers = getRandomIntInclusive(2,MAX_NUM_BURGERS);
            return targetNumBurgers + " burgers. Otherwise, " + generateSpecificOrder(
                                                                0, 
                                                                getRandomIntInclusive(0,MAX_NUM_FRIES),
                                                                getRandomIntInclusive(0,MAX_NUM_MILKSHAKES));
        } else if (machine === "fryer") {
            targetNumFries = getRandomIntInclusive(2,MAX_NUM_FRIES);
            return targetNumFries + " orders of fries. Otherwise, " + generateSpecificOrder(
                                                                      getRandomIntInclusive(0,MAX_NUM_BURGERS),
                                                                      0,
                                                                      getRandomIntInclusive(0,MAX_NUM_MILKSHAKES));
        } else {
            targetNumMilkshakes = getRandomIntInclusive(2,MAX_NUM_MILKSHAKES);
            return targetNumMilkshakes + " milkshakes. Otherwise, " + generateSpecificOrder(
                                                                      getRandomIntInclusive(0,MAX_NUM_BURGERS),
                                                                      getRandomIntInclusive(0,MAX_NUM_FRIES),
                                                                      0);
        }
    }
}

function generateSpecificOrder(numBurgers, numFries, numMilkshakes) {
    var specificOrder = "";
    if (typeof numBurgers !== "number" ||
        typeof numFries !== "number" ||
        typeof numMilkshakes !== "number") {
            console.log("Warning: Invalid variable type passed to generateNewOrder().");
            return;
    } else {
        if (numBurgers > 0) targetNumBurgers = numBurgers;
        if (numFries > 0) targetNumFries = numFries;
        if (numMilkshakes > 0) targetNumMilkshakes = numMilkshakes;

        specificOrder = specificOrder.concat("I would like ");
        specificOrder = specificOrder.concat(concatBurgerOrder(numBurgers));
        specificOrder = specificOrder.concat(concatFryOrder(numBurgers, numFries, numMilkshakes));
        specificOrder = specificOrder.concat(concatMilkshakeOrder(numBurgers, numFries, numMilkshakes));

        if (numBurgers + numFries + numMilkshakes === 0) {
            specificOrder = generateSpecificOrder(
                            getRandomIntInclusive(0,MAX_NUM_BURGERS),
                            getRandomIntInclusive(0,MAX_NUM_FRIES),
                            getRandomIntInclusive(0,MAX_NUM_MILKSHAKES));
        }

       if(!specificOrder.endsWith(", please!", specificOrder.length - 1)) 
            specificOrder = specificOrder.concat(", please!");

        /*console.log("TargetNumBurgers: " + targetNumBurgers);
        console.log("TargetNumFries: " + targetNumFries);
        console.log("TargetNumMilkshakes: " + targetNumMilkshakes);
        console.log("MixerIsOnToStart: " + mixerIsOnToStart);
        console.log("numMilkshakesMade: " + numMilkshakesMade);*/
        return specificOrder;
    }
}

function concatBurgerOrder(numBurgers) {
    if (numBurgers !== 0) {
        if (numBurgers >= 2) {
            return numBurgers + " burgers";
        }
        else {
            return numBurgers + " burger";
        }
    } else {
        return "";
    }
}

function concatFryOrder(numBurgers, numFries, numMilkshakes) {
    if (numFries !== 0) {
        if (numFries >= 2) {
            if(numBurgers === 0) {
                return numFries + " orders of fries";
            } else if (numMilkshakes === 0) {
                return ", and " + numFries + " orders of fries";
            } else {
                return ", " + numFries + " orders of fries";
            }
        } else {
            if(numBurgers === 0) {
                return numFries + " order of fries";
            } else if (numMilkshakes === 0) {
                return ", and " + numFries + " order of fries";
            } else {
                return ", " + numFries + " order of fries";
            }
        }
    } else {
        return "";
    }
}

function concatMilkshakeOrder(numBurgers, numFries, numMilkshakes) {
    if (numMilkshakes !== 0) {
        if (numMilkshakes >= 2) {
            if (numBurgers + numFries === 0) {
                return numMilkshakes + " milkshakes";
            } else {
                return ", and " + numMilkshakes + " milkshakes";
            }
        } else {
            if (numBurgers + numFries === 0) {
                return numMilkshakes + " milkshake";
            } else {
                return ", and " + numMilkshakes + " milkshake";
            }
        }
    } else {
        return "";
    }
}

function checkAgainstOrder() {
    if(!isIfElseOrder) {
        if (numBurgersMade !== targetNumBurgers) {
            alert("Error: Number of burgers made does not match order.");
        } else if (numFriesMade !== targetNumFries) {
            alert("Error: Number of fries made does not match order.");
        } else if (numMilkshakesMade !== targetNumMilkshakes) {
            alert("Error: Number of milkshakes made does not match order.");
        } else {
            alert("Nice job!");
        }
    } else {
        checkIfElseOrders();
    }
}

function checkIfElseOrders() {
    if (machineType === "grill") {
        checkIfElseMachine(
        "numBurgersMade !== targetNumBurgers",
        "numFriesMade !== targetNumFries",
        "numMilkshakesMade !== targetNumMilkshakes",
        "grillIsOnToStart");
    } else if (machineType === "fryer") {
        checkIfElseMachine(
            "numFriesMade !== targetNumFries",
            "numBurgersMade !== targetNumBurgers",
            "numMilkshakesMade !== targetNumMilkshakes",
            "fryerIsOnToStart");
    } else {
        checkIfElseMachine(
            "numMilkshakesMade !== targetNumMilkshakes",
            "numBurgersMade !== targetNumBurgers",
            "numFriesMade !== targetNumFries",
            "mixerIsOnToStart");
    }
}

function checkIfElseMachine(ifConditional, elseConditional1, elseConditional2, machineConditional) {
    if(eval(machineConditional))
        if (eval(ifConditional)) {
            alert("Error: Number of " + 
                  ifConditional.substring(3, ifConditional.indexOf("Made")).toLowerCase() + 
                  " made does not match order.");
        } else {
            alert("Nice job!");
        }
    else {
        if (eval(elseConditional1)) {
            alert("Error: Number of " + 
                   elseConditional1.substring(3, elseConditional1.indexOf("Made")).toLowerCase() + 
                  " made does not match order.");
        } else if (eval(elseConditional2)) {
            alert("Error: Number of " + 
                   elseConditional2.substring(3, elseConditional2.indexOf("Made")).toLowerCase() + 
                  " made does not match order.");
        } else {
            alert("Nice job!");
        }
    }
}