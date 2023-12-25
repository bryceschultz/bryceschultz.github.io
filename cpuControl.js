// setup fileSystem
const fileSystem = {
    "path": "",
    "name": "",
    "type": "directory",
    "children": [
        {
            "path": "A",
            "name": "A",
            "type": "directory",
        },
        {
            "path": "B",
            "name": "B",
            "type": "directory",
            "children": [
                {
                    "path": "B/photos",
                    "name": "photos",
                    "type": "directory",
                    "children": [
                        {
                            "path": "B/photos/summer",
                            "name": "summer",
                            "type": "directory",
                            "children": [
                                {
                                    "path": "B/photos/summer/june",
                                    "name": "june",
                                    "type": "directory",
                                    "children": [
                                        {
                                            "path": "B/photos/summer/june/windsurf.jpg",
                                            "name": "windsurf.jpg",
                                            "type": "file"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "path": "B/photos/winter",
                            "name": "winter",
                            "type": "directory",
                            "children": [
                                {
                                    "path": "B/photos/winter/january",
                                    "name": "january",
                                    "type": "directory",
                                    "children": [
                                        {
                                            "path": "B/photos/winter/january/ski.png",
                                            "name": "ski.png",
                                            "type": "file"
                                        },
                                        {
                                            "path": "B/photos/winter/january/snowboard.jpg",
                                            "name": "snowboard.jpg",
                                            "type": "file"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

const sleep = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

// bootUp cpu when page first loads
const bootUp = async () => {
    const output = document.getElementById("output");
    output.style.display = "block";
    await sleep(1000);
    const powerLight = document.getElementById("powerLight");
    powerLight.classList.replace("lightOff", "lightOn");
    const asciiImage = document.createElement("pre");
    asciiImage.innerText = `
████████████████████████████████████████████████████████████████████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╬╬╬╬ÜÜÑÑÑÜÜ╬╬╬╬╬φp╬╬ÑÑÑÑÜÜÜÑp╬╬╬╬Ñ╙╙▄▄▄▄   └╙Ü╬╬╬╬ÑÑÜÜÜÜÜÜÜÜ╬╬╬╬╬╬ÜÑ╬╬╬ÑÑ╬╬Ü╬╬╬╬
"╝╫╫╫╢╢ÄÄ╢╢╫╫╫┤Ä╫╫╫╫╫╫╝╝╝╝╝╫╫╝╝^╔▓▓▓▄ww▄╠▓M██W,^╝╫╫╫╫╫╝╝╝╝╝╫╫╫╫╫╢╝╝╝ÄÄÄ╢╢╢╢╢╢╫╫╫
██▄}550▒▒▒▒▒ÉÉ55\`²33333¬  \`3\`,▓██████▀▀▄▄▄╙▀▀███╕\`?3333   333333\`:55▒▒╢▒▒▒▒▒BÉÉF
██▓█▓▄,┴▄▄▄▄▒▒╖╖╖╖_____   _  ███▄╝▓▓▓▓▄▄▄,▀██▄▄▀▌▓   __     ___╓╖╖╖╥▄▄▄▄▄▄▄╜ⁿ▄▓▓
██▓█▓███▄▄iBåÅååååÑm'≥.    ╓▄▄▓▀▀▀▀▄▄▄▄╙███▌,███ M▓ ⌂⌂    :≥¬≥αååååå╬ÉÉÉF,▄█▓██▓
▄╙▀▓▓███▓██W▄┴┼╨╚╩▒┼4╥^─  '^█▄████▓█▓███████████▓▓██    ──└╥┼┼▒▒╩╝╜╜┴^▄φ████▓██▓
████▄▄▀▀╣█████▌▄τååååñ²   \` ██████▓████████▀"""" ██"     '²τååååå"▄▓████████╨"▄▄
████████N▄▄╙▀█▌█▓▓▄J\`JJJJ.  └███████▌"           ▓╠    .JJJJJ\`]▄▓█████▀"▄▄▓█████
╢╪R╫╣╫██▓█████▌▄"▀██▓▌▄ºººº¬ ▐██████▌            ▐\`  -ººººÇ▄▓███▀▀╠▄▄████████▓Ñ4
R╪╣▌Ñ]╬█ÑS╢▓███████▓▄▌▀█▓▄▒- ████████████▄  ,▓███▀ ª╜╜¼▄▓██▀▌▄▓████████████▌▌▌Ñ╣
╣╫ÜP▀╪╬█ÑÜ▒Ñ▓██║╩█▌▀█▌██▓▓╬▀ ╟█████╠▀▀▓▀▀█▓ F"▀▀ ▐ ╔#▀▓▄█▓████████▓██▓▓▓███▌▌▌Ñ╣
██████▓█N▓▓▓▓██╬▒▓▌m╣▌╣▓█▓▓╠H'█████▌     █▓       ╗▀▀╬██╣▓▓╬█▓▓█▓▀╫██▓▓▓▓█▓▓▓███
██████▓█Ñ███╣▓▌██▓███▌▀╫▓█▓▄▄▌▄╠"███▌    ██      _▓╠▄▓▓█▓▓▓▀█████████▒▐pÑ█▓█▓▓▓▐
████████Ñ███╫▓▌███▌▓█▌▒╫▓█▓▓Ñ▌▌p ▐███N   ▀▀╙\`    π╣4W▓▓█▓▓▒▒█▓▓██▓███ÜibÑ█▓▓▓▓▓▓
█▀▀█▓▀██╬█▓╬▓╫▌▓Ñ▓█▓█▌╬╣▌╟▓╫Ñ▌▌^╓█████╫Lⁿ▀▀M▀▀ ╖ V╣▒K▓▄█▄█▓╬█╢██▓███████████████
▀▒╠▓▓▄▓█Ñ╬╟▓╬╬▌█▒╝██▓▌██É╙^"╓╔ ╣█▐██████▌"""\` ▄▀█_╕╓'╙▀▓▓╣▓▌█▓██▓▄╟█╪ΓD/██▓╪╣╣Ö▓
Ω▄▄╪▓▀▓█Ñ▓████▌▓▓╩Ñ"╙" _,▄███╓███▓████████▄⌐<╘█ █▐╔▀██▄__\`╙▀▀╝▓█╣╬████████▓╡╝▌Ö▒
╬π^▓█▄██Ñ▓▓▓█▀"  _▐▄▓███████╔████▓▐╠▀███▌╝  ▄\`  █▓╟▌Å██████▌▄,_ ""▀█▓▌╣▓▓███████
████▀▌▌▄▓█▀▓ ▐█████████████▌██████▐╡  ╙██▄A"    ██╟▌▌███████████▌█▐ █████▓▄▓╠║RÜ
]▄▓██▀▌█M▒Å^,██▀██████████████████▓╡   ▄██_    ▌████████████████¼█▐,└▓╫▓███▓████
▀╟╣£╠R▒█Ñ█▀,▌▓█▓╫██████████╫▓████▐█▌ ▄██████╖ ┌▌████▓▓╟████████Ñ▓█▓█ █████▓▌▓▌▌▓
dK╠╪╫▓▓█╩╩ █▌██████████████╠█████ ╙█▀"███Ñ█╙▀█  ██████╟███████▌▓████,'▄╬╩███▌▓▓▌`;
    output.appendChild(asciiImage);
    write("Welcome to Bryce's personal site... thanks for visiting");
    await sleep(1000);
    write("Available commands include: 'resume', 'linkedin', 'github', 'huggingface', among others...");
    startTerminal();
}

const write = (text) => {
    const input = document.createElement("p");
    input.innerHTML = text + "<br/>";
    const output = document.getElementById("output");
    output.appendChild(input);
}

const findDriveLevel = (drive, library = fileSystem) => {
    let libraryToReturn;
    if (library.path === drive) {
        return library;
    } else if (!library.children) {
        return;
    } else {
        for (let i = 0; i < library.children.length; i++) {
            libraryToReturn = findDriveLevel(drive, library.children[i])
            if (libraryToReturn != undefined) break;
        }
    }
    return libraryToReturn;
}

const input = (drive, inputNum) => {
    removeOldestInput(inputNum);
    const output = document.getElementById("output");
    const userInputContainer = document.createElement("div");
    userInputContainer.id = `userInputContainer${inputNum}`;
    userInputContainer.style.display = "flex";
    userInputContainer.style.flexDirection = "row";
    userInputContainer.style.flexWrap = "wrap";

    const currentDirectory = document.createElement("p");
    currentDirectory.innerHTML = `${drive}> `;
    userInputContainer.appendChild(currentDirectory);

    const userInput = document.createElement("input");
    userInput.style.display = ""
    userInput.classList.add("terminalInput");
    userInputContainer.appendChild(userInput);
    output.appendChild(userInputContainer);

    userInput.focus();
    userInput.addEventListener("keypress", function (event) {
        if (event.key === 'Enter') {
            if (userInput.value === 'resume') {
                window.open("https://bryceschultz.github.io/resume/", '_blank').focus();
                input(drive, inputNum + 1);
            } else if (userInput.value === 'linkedin') {
                window.open("https://www.linkedin.com/in/bryceschultz/", '_blank').focus();
                input(drive, inputNum + 1);
            } else if (userInput.value === 'github') {
                window.open("https://github.com/bryceschultz", '_blank').focus();
                input(drive, inputNum + 1);
            } else if (userInput.value === 'huggingface' || userInput.value === "hf") {
                window.open("https://huggingface.co/bryceschultz", '_blank').focus();
                input(drive, inputNum + 1);
            } else if (userInput.value === 'cd ..') {
                const driveToMoveTo = drive.substring(0, drive.lastIndexOf('/'));
                input(driveToMoveTo, inputNum + 1);
            } else if (userInput.value.includes('cd ')) {
                navigateToNewFolder(drive, userInput, inputNum, userInputContainer);
            } else if (userInput.value === "ls") {
                listFolder(drive, userInputContainer, inputNum);
            } else {
                handleUnknownInput(drive, userInputContainer, inputNum);
            }
        }
    })
}

const removeOldestInput = (inputNum) => {
    const containerNum = inputNum - 3;
    if (inputNum >= 3) {
        const oldestInput = document.getElementById(`userInputContainer${containerNum}`);
        oldestInput.style.display = "none";
    }
}

const navigateToNewFolder = (drive, userInput, inputNum, userInputContainer) => {
    const driveToMoveToWithOrigPath = drive + "/" + userInput.value.substring(3, userInput.value.length);
    const driveToMoveTo = userInput.value.substring(3, userInput.value.length);
    let validDrive = false;
    const currentDrive = findDriveLevel(drive);
    for (let i = 0; i < currentDrive.children.length; i++) {
        if (currentDrive.children[i].path === driveToMoveTo && currentDrive.children[i].type === "directory") {
            input(driveToMoveTo, inputNum + 1);
            validDrive = true;
        } else if (currentDrive.children[i].path === driveToMoveToWithOrigPath  && currentDrive.children[i].type === "directory") {
            input(driveToMoveToWithOrigPath, inputNum + 1);
            validDrive = true;
        }
    }
    if (!validDrive) {
        const response = document.createElement("p");
        response.style.width = "100%";
        response.innerHTML = `cd: not a directory: ${userInput.value.substring(3, userInput.value.length)}`;
        userInputContainer.appendChild(response);
        input(drive, inputNum + 1);
    }
}

const listFolder = (drive, userInputContainer, inputNum) => {
    const currentDrive = findDriveLevel(drive);
    for (let i = 0; i < currentDrive?.children?.length; i++) {
        const response = document.createElement("p");
        response.style.width = "100%";
        response.innerHTML = `${currentDrive.children[i].path}`;
        userInputContainer.appendChild(response);
    }
    input(drive, inputNum + 1);
}

handleUnknownInput = (drive, userInputContainer, inputNum) => {
    const response = document.createElement("p");
    response.style.width = "100%";
    response.innerHTML = "hmm not too sure what you mean by that, try again";
    userInputContainer.appendChild(response);
    input(drive, inputNum + 1);
}

const startTerminal = () => {
    let inputNum = 0;
    input("", inputNum);
}

const turnOnOrOff = () => {
    const powerLight = document.getElementById("powerLight");
    if (powerLight.classList.contains("lightOff")) {
        // turn on
        bootUp();
    } else {
        // turn off
        powerLight.classList.replace("lightOn", "lightOff");
        const output = document.getElementById("output");
        output.innerHTML = "";
    }
}

// start up cpu
bootUp();