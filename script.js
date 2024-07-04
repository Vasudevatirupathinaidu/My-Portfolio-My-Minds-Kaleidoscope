/* ********************************************************** */
/* ***** Exploring My Portfolio: My Mind's Kaleidoscope ***** */
/* ********************************************************** */

document.addEventListener("DOMContentLoaded", function () {
  /* Initialize constants and variables */
  /* Portfolio details */
  const PORTFOLIO_NAME = "Exploring My Portfolio: My Mind's Kaleidoscope";
  const SUMMARY =
    "Peering into the mirror of my mind, where thoughts dance in kaleidoscopic patterns";
  const AUTHOR = "Vasudev1618";
  const CONNECT =
    "GitHub: Vasudevatirupathinaidu; Twitter: Vasudev1618(@vasudev617)";
  const VERSION = "1.0.0";
  const PORTFOLIO_INFO = {
    PORTFOLIO_NAME,
    SUMMARY,
    AUTHOR,
    CONNECT,
    VERSION,
  };

  /* Alternative names for navigation elements */
  const ALTERNATIVE_NAMES = {
    home: "nest",
    about: "intro",
    skills: "techniques",
    projects: "inventiveness",
    Blogs: "publications",
    contact: "connection",
    magnet: "neodymium",
    developer: "operator",
    sound: "echo",
  };

  /* DOM elements */
  const titleElement = document.querySelector(".title a");

  const soundModeElement = document.querySelector(".user-handlers__sound");
  const unmuteElement = document.querySelector(".unmute");
  const muteElement = document.querySelector(".mute");
  const navAudioClickElement = document.querySelector(".navElementClick");
  const developerModeElement = document.querySelector(
    ".user-handlers__developer-mode"
  );

  const magnetModeElement = document.querySelector(
    ".user-handlers__magnet-mode"
  );
  const developerModeAudioClickElement = document.querySelector(
    ".developerModeClick"
  );
  const magnetModeAudioClickElement =
    document.querySelector(".magnetModeClick");
  const shakeAudioElement = document.querySelector(".shake");

  const magnetContainer = document.querySelector(".magnet-container");
  const dataContainer = document.querySelector(".data-container");

  const magnetContainerNavigation = document.querySelector(
    ".magnet-container__navigation"
  );
  const magnetAtoms = document.querySelectorAll(".magnet-atom a");

  const terminal = document.querySelector(
    ".magnet-container__terminal-navigation"
  );
  const clearTerminalElement = document.querySelector(
    ".terminal-navigation__clear-screen"
  );
  const terminalForm = document.querySelector(
    ".terminal-navigation__command-form"
  );
  const terminalDisplay = document.querySelector(
    ".terminal-navigation__display"
  );

  /* Configuration variables */
  const magnetStrength = 200;
  const colors = [
    "#ff4066",
    "#2EA5F2",
    "#F6DB05",
    "#EF4032",
    "#7CD677",
    "#FEA773",
    "#ff6640",
  ];

  /* Console style based on browser */
  let CONSOLE_STYLE = null;
  if (navigator.userAgent.indexOf("Chrome") !== -1) {
    CONSOLE_STYLE =
      "color: #1B1A16; background: linear-gradient(to right, #EF4032, #F5DB05); font-size: 1rem; padding: 5px; margin: 2px; border-radius: 3px;";
  } else {
    CONSOLE_STYLE =
      "color: #1B1A16; background: linear-gradient(to right, #EF4032, #F5DB05); font-size: 1.4rem; border-radius: 3px;";
  }

  /* State storage */
  const stateStorage = JSON.parse(localStorage.getItem("stateStorage"));

  /* Initial state values */
  let isMagnetRepelEffectOn = true;
  let opacityForMagnetMode = 1;

  let isDeveloperModeOn = false;
  let opacityForDeveloperMode = 0.5;

  let soundName = "sound-unmute";
  let opacityForSound = 1;

  /* Update state values if stored */
  if (stateStorage) {
    if (stateStorage.isMagnetRepelEffectOn === false) {
      isMagnetRepelEffectOn = false;
    } else {
      isMagnetRepelEffectOn = true;
    }

    opacityForMagnetMode = stateStorage.opacityForMagnetMode === 0.5 ? 0.5 : 1;

    isDeveloperModeOn =
      stateStorage.isDeveloperModeOn === false ||
      !stateStorage.isDeveloperModeOn
        ? false
        : true;

    opacityForDeveloperMode =
      stateStorage.opacityForDeveloperMode === 0.5 ? 0.5 : 1;

    soundName =
      stateStorage.soundName === "sound-unmute" || !stateStorage.soundName
        ? "sound-unmute"
        : "sound-mute";
    opacityForSound = stateStorage.opacityForSound === 0.5 ? 0.5 : 1;
  }

  /* Check and handle magnet repel effect */
  if (isMagnetRepelEffectOn) {
    /* Remove the event listener when magnet mode is activated */
    magnetAtoms.forEach((magnetAtom) => {
      magnetAtom.removeEventListener("click", handleNavAudioClickElement);
    });
  } else {
    magnetModeElement.style.opacity = opacityForMagnetMode;
    /* Add the event listener back when magnet mode is deactivated */
    magnetAtoms.forEach((magnetAtom) => {
      magnetAtom.addEventListener("click", handleNavAudioClickElement);
    });
  }

  /* Handle developer mode */
  if (isDeveloperModeOn) {
    developerModeElement.style.opacity = opacityForDeveloperMode;
    terminal.classList.remove("hide");
    magnetAtoms.forEach((magnetAtom, i) => {
      magnetAtom.style.color = "rgba(96, 96, 96, 0.5)";
      magnetAtom.querySelector("span").classList.add("unhide");
      magnetAtom.querySelector("span").classList.remove("hide");
      magnetAtom.querySelector("span").style.color = colors[i];

      magnetAtom.addEventListener("click", (e) => e.preventDefault());
    });

    /* Print the portfolio and author info on console log */
    console.log(
      `%cPortfolio Name:- ${PORTFOLIO_NAME}\nSummary:- ${SUMMARY}\nAuthor:- ${AUTHOR}\nConnect:- ${CONNECT}\nVersion:- ${VERSION}`,
      CONSOLE_STYLE
    );
  }

  /* Mute or Unmute the sound */
  if (soundName === "sound-mute") {
    soundModeElement.style.setProperty("opacity", opacityForSound);

    soundModeElement.children[0].setAttribute("class", soundName);
    soundModeElement.querySelector("img").setAttribute("alt", soundName);
    soundModeElement
      .querySelector("img")
      .setAttribute("src", `./images/${soundName}.png`);
  }

  /* Handle sound mode toggle */
  soundModeElement.addEventListener("click", () => {
    if (
      soundModeElement
        .querySelector("img")
        .getAttribute("src")
        .includes("sound-unmute")
    ) {
      opacityForSound = 0.5;
      soundName = "sound-mute";
      soundModeElement.style.setProperty("opacity", opacityForSound);
      muteElement.currentTime = 0;
      muteElement.play();
    } else {
      opacityForSound = 1;
      soundName = "sound-unmute";
      soundModeElement.style.setProperty("opacity", opacityForSound);
      unmuteElement.currentTime = 0;
      unmuteElement.play();
    }

    soundModeElement.children[0].setAttribute("class", soundName);
    soundModeElement.querySelector("img").setAttribute("alt", soundName);
    soundModeElement
      .querySelector("img")
      .setAttribute("src", `./images/${soundName}.png`);

    /* Update state storage with sound mode status and opacity */
    const addItemsToStateStorage = {
      ...(localStorage.getItem("stateStorage")
        ? JSON.parse(localStorage.getItem("stateStorage"))
        : {}),
      ...{
        soundName: soundName,
        opacityForSound: opacityForSound,
      },
    };

    /* Store updated data in local storage */
    localStorage.setItem(
      "stateStorage",
      JSON.stringify(addItemsToStateStorage)
    );
  });

  /* Handle developer mode toggle */
  function handleDeveloperModeElement() {
    /* Toggle developer mode status */
    if (isDeveloperModeOn) {
      isDeveloperModeOn = false;
      opacityForDeveloperMode = 0.5;
      developerModeElement.style.opacity = opacityForDeveloperMode;
      terminal.classList.add("hide");
      /* Adjust styles for each magnet atom */
      magnetAtoms.forEach((magnetAtom) => {
        magnetAtom.style.color = "";
        magnetAtom.querySelector("span").classList.remove("unhide");
        magnetAtom.querySelector("span").classList.add("hide");
        magnetAtom.querySelector("span").style.removeProperty("color");

        magnetAtom.removeEventListener("click", (e) => e.preventDefault());
      });
      console.clear();
    } else {
      isDeveloperModeOn = true;
      opacityForDeveloperMode = 1;
      developerModeElement.style.opacity = opacityForDeveloperMode;
      terminal.classList.remove("hide");
      /* Adjust styles for each magnet atom */
      magnetAtoms.forEach((magnetAtom, i) => {
        magnetAtom.style.color = "rgba(96, 96, 96, 0.5)";
        magnetAtom.querySelector("span").classList.add("unhide");
        magnetAtom.querySelector("span").classList.remove("hide");
        magnetAtom.querySelector("span").style.color = colors[i];

        magnetAtom.addEventListener("click", (e) => e.preventDefault());
      });

      /* Print the portfolio and author info on console log */
      console.log(
        `%cPortfolio Name:- ${PORTFOLIO_NAME}\nSummary:- ${SUMMARY}\nAuthor:- ${AUTHOR}\nConnect:- ${CONNECT}\nVersion:- ${VERSION}`,
        CONSOLE_STYLE
      );
    }

    /* Play click sound if unmuted */
    if (soundName === "sound-unmute") {
      developerModeAudioClickElement.currentTime = 0;
      developerModeAudioClickElement.volume = 1;
      developerModeAudioClickElement.play();
    }

    /* Update state storage with developer mode status and opacity */
    const addItemsToStateStorage = {
      ...(localStorage.getItem("stateStorage")
        ? JSON.parse(localStorage.getItem("stateStorage"))
        : {}),
      ...{
        isDeveloperModeOn: isDeveloperModeOn,
        opacityForDeveloperMode: opacityForDeveloperMode,
      },
    };

    /* Store updated data in local storage */
    localStorage.setItem(
      "stateStorage",
      JSON.stringify(addItemsToStateStorage)
    );
  }

  developerModeElement.addEventListener("click", handleDeveloperModeElement);

  /* playAudio for nav elements */
  function playAudio() {
    if (soundName === "sound-unmute") {
      navAudioClickElement.currentTime = 0;
      navAudioClickElement.volume = 0.2;
      navAudioClickElement.play();
    }
  }

  /* navAudioClickElement handler */
  function handleNavAudioClickElement(e) {
    e.preventDefault();
    playAudio();
  }

  /* Handle magnet mode toggle */
  function handleMagnetModeElement() {
    /* Toggle magnet repel effect status */
    if (isMagnetRepelEffectOn) {
      opacityForMagnetMode = 0.5;
      magnetModeElement.style.opacity = opacityForMagnetMode;
      isMagnetRepelEffectOn = false;

      /* Reset styles for magnet atoms */
      magnetAtoms.forEach((magnetAtom) => {
        magnetAtom.style.removeProperty("transform");
        magnetAtom.style.transition = "transform 250ms ease-in-out";
      });

      /* Remove the event listener when magnet mode is activated */
      magnetAtoms.forEach((magnetAtom) => {
        magnetAtom.removeEventListener("click", handleNavAudioClickElement);
      });
    } else {
      isMagnetRepelEffectOn = true;
      opacityForMagnetMode = 1;
      magnetModeElement.style.opacity = opacityForMagnetMode;

      /* Add the event listener back when magnet mode is deactivated */
      magnetAtoms.forEach((magnetAtom) => {
        magnetAtom.addEventListener("click", handleNavAudioClickElement);
      });
    }

    /* Play click sound if unmuted */
    if (soundName === "sound-unmute") {
      magnetModeAudioClickElement.currentTime = 0;
      magnetModeAudioClickElement.play();
    }
    /* Disable navigation audio click elements based on magnet mode status */
    disableNavAudioClickElements(isMagnetRepelEffectOn);

    /* Update state storage with magnet mode status and opacity */
    const addItemsToStateStorage = {
      ...(localStorage.getItem("stateStorage")
        ? JSON.parse(localStorage.getItem("stateStorage"))
        : {}),
      ...{
        isMagnetRepelEffectOn: isMagnetRepelEffectOn,
        opacityForMagnetMode: opacityForMagnetMode,
      },
    };

    /* Store updated data in local storage */
    localStorage.setItem(
      "stateStorage",
      JSON.stringify(addItemsToStateStorage)
    );
  }

  magnetModeElement.addEventListener("click", handleMagnetModeElement);

  /* Function to disable/enable click events on navigation elements based on magnet mode */
  function disableNavAudioClickElements(isMagnetRepelEffectOn) {
    if (!isMagnetRepelEffectOn) {
      /* Add the event listener back when magnet mode is deactivated */
      magnetAtoms.forEach((magnetAtom) => {
        magnetAtom.addEventListener("click", handleNavAudioClickElement);
      });
    } else {
      /* Remove the event listener when magnet mode is activated */
      magnetAtoms.forEach((magnetAtom) => {
        magnetAtom.removeEventListener("click", handleNavAudioClickElement);
      });
    }
  }

  /* Function to toggle cursor style based on magnet mode */
  function toggleRepel(isMagnetRepelEffectOn) {
    if (isMagnetRepelEffectOn) {
      magnetContainer.style.cursor = "pointer";
    } else {
      magnetContainer.style.cursor = "default";
    }

    return isMagnetRepelEffectOn;
  }

  /* Function to calculate and apply repelling effect on magnet atoms */
  function repel(e, magnetAtom, magnetStrength) {
    /* Calculate mouse position and distance from magnet atom */
    if (e.target.closest(".magnet-container")) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const magnetAtomRect = magnetAtom.getBoundingClientRect();
      const magnetAtomX = magnetAtomRect.x + magnetAtomRect.width / 2;
      const magnetAtomY = magnetAtomRect.y + magnetAtomRect.height / 2;

      const distanceX = magnetAtomX - mouseX;
      const distanceY = magnetAtomY - mouseY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      /* Calculate repelling direction and distance */
      const directionX = distanceX / distance;
      const directionY = distanceY / distance;

      const repelX = (directionX * (magnetStrength - distance)) / 3;
      const repelY = (directionY * (magnetStrength - distance)) / 3;

      /* Apply repelling effect to magnet atom */
      if (magnetAtom.style.transform) {
        magnetAtom.style.transition = "";
      }
      magnetAtom.style.transform = `translate(${repelX}px, ${repelY}px)`;
    } else {
      /* Reset magnet atom position and transition */
      magnetAtom.style.removeProperty("transform");
      magnetAtom.style.transition = "transform 250ms ease-in-out";
    }

    /* Reset magnet atom position and transition for specific elements */
    if (
      e.target.closest(".magnet-container__terminal-navigation") ||
      e.target.closest(".user-handlers")
    ) {
      magnetAtom.style.removeProperty("transform");
      magnetAtom.style.transition = "transform 250ms ease-in-out";
      terminal.style.cursor = "default";
    }
  }

  /* Event listener for mousemove to trigger repelling effect */
  function handleMouseMoveRepellingEffect(e) {
    magnetAtoms.forEach((magnetAtom) => {
      if (isMagnetRepelEffectOn) {
        toggleRepel(isMagnetRepelEffectOn);
        magnetAtom.classList.remove("move-up");
        repel(e, magnetAtom, magnetStrength);
      } else {
        toggleRepel(isMagnetRepelEffectOn);
        magnetAtom.classList.add("move-up");
      }
    });
  }

  document.addEventListener("mousemove", handleMouseMoveRepellingEffect);

  /* Terminal */
  function handleTerminal(e) {
    e.preventDefault();

    /* Regular expression to validate command text */
    const regex = /^[A-Za-z]{1,}$/;
    let value = terminalForm.command.value.trim();

    if (regex.test(value)) {
      value = value.toLowerCase();
    } else {
      throw new Error("Invalid command text!");
    }

    /* List of available commands */
    const commands = [
      "home",
      "about",
      "skills",
      "projects",
      "blogs",
      "contact",
      "help",
      "clear",
      "reset",
    ];

    const userPrompt = commands.findIndex((command) => {
      return command === value;
    });

    /* Create and style -> prompt element and terminal paragraph element */
    const promptElement = document.createElement("p");
    const createTerminalParagraph = document.createElement("p");

    promptElement.style.color = "#04d804";
    promptElement.style.fontSize = "0.9rem";
    promptElement.style.marginTop = "10px";

    createTerminalParagraph.style.fontSize = "0.82rem";
    createTerminalParagraph.style.marginBottom = "10px";

    /* Check if magnet repel effect is on */
    if (isMagnetRepelEffectOn) {
      /* Display message for magnetic mode */
      createTerminalParagraph.innerHTML = `<p style="color:#ef4032">The website is in magnetic mode. To view the pages, please disable magnetic mode.</p>`;

      terminalDisplay.appendChild(createTerminalParagraph);
      terminalForm.reset();

      terminalDisplay.scrollTop = terminalDisplay.scrollHeight;
      return;
    }

    /* Handle user commands */
    if (userPrompt === -1 && userPrompt !== 0) {
      /* Display prompt for invalid command */
      promptElement.textContent = `/web/user → ${value}`;

      createTerminalParagraph.textContent = `Command not found. Please type "help" for assistance.`;
      createTerminalParagraph.style.color = "#ff4466";
    } else {
      if (value === "help") {
        /* Display help message */
        promptElement.textContent = `/web/user → ${value}`;
        /*
          <p style="color: #ff4066;">- home</p>
          <p style="color: #2EA5F2;">- about</p>
          <p style="color: #F6DB05;">- skills</p>
          <p style="color: #E44032;">- projects</p>
          <p style="color: #7CD677;">- blogs</p>
          <p style="color: #FEA773;">- contact</p>
          <p style="color: #ff6640;">- help</p>
          <p style="color: #f2e166;">- clear</p>
          */

        createTerminalParagraph.innerHTML = `<p style="color: #ff6640;">[List Of Commands]:</p>
          <p style="color: #E1DEC5;">- home</p>
          <p style="color: #E1DEC5;">- about</p>
          <p style="color: #E1DEC5;">- skills</p>
          <p style="color: #E1DEC5;">- projects</p>
          <p style="color: #E1DEC5;">- blogs</p>
          <p style="color: #E1DEC5;">- contact</p>
          <p style="color: #F6DB05;">- help</p>
          <p style="color: #7CD677;">- clear</p>
          <p style="color: #E44032;">- reset</p>`;
      } else if (value === "clear") {
        /* Clear terminal display */
        terminalDisplay.innerHTML = "";
      } else if (value === "reset") {
        /* Reset the website */
        localStorage.clear();
        // window.location.hash = "";
        window.location.hash = "pages/home.html";
        loadPage("pages/home.html");
        window.location.reload();
      } else {
        /* Display navigation message */
        promptElement.textContent = `/web/user → ${value}`;

        createTerminalParagraph.innerHTML = `<p style="color:#ff6640">Navigate to the ${value} page.</p>`;
      }
    }

    terminalDisplay.appendChild(promptElement);
    terminalDisplay.appendChild(createTerminalParagraph);

    terminalDisplay.scrollTop = terminalDisplay.scrollHeight;

    /* Navigate pages from terminal */
    const targetedMagnetAtom = [...magnetAtoms].filter(
      (magnetAtom) =>
        magnetAtom.textContent.split(".")[0].toLowerCase() === value
    );

    terminalForm.reset();

    if (targetedMagnetAtom[0]) {
      if (window.location.hash.includes(value)) {
        createTerminalParagraph.innerHTML = `<p style="color:#2EA5F2">You are already on the "${value}" page.</p>`;
        return;
      }
      const pageName = targetedMagnetAtom[0]
        .getAttribute("href")
        .replace("#", "");
      if (!isMagnetRepelEffectOn) {
        // window.location.hash = "";
        window.location.hash = `pages/${pageName}`;
      }
    }
  }

  terminalForm.addEventListener("submit", handleTerminal);

  /* Clear Terminal */
  function handleClearTerminalElement() {
    terminal.classList.add("shake-me-up");

    terminalDisplay.innerHTML = "";
    terminalForm.reset();

    /* Remove shake animation after animation ends */
    terminal.addEventListener(
      "animationend",
      () => {
        terminal.classList.remove("shake-me-up");
      },
      { once: true }
    );

    /* Play shake audio if unmuted */
    if (soundName === "sound-unmute") {
      shakeAudioElement.currentTime = 0;
      shakeAudioElement.play();
    }
  }

  /* Add click event listener to clear terminal element */
  clearTerminalElement.addEventListener("click", handleClearTerminalElement);

  /* Remove click event listener from clear terminal element if terminal display does not exist */
  if (!terminalDisplay)
    clearTerminalElement.removeEventListener(
      "click",
      handleClearTerminalElement
    );

  /* Add click event listener to each magnet atom for navigation */
  magnetAtoms.forEach((magnetAtom) => {
    /*  Handle navigation on magnet atom click */
    magnetAtom.addEventListener("click", (e) => {
      e.preventDefault();
      const pageName = magnetAtom.getAttribute("href").replace("#", "");
      if (!isMagnetRepelEffectOn) {
        // window.location.hash = "";
        window.location.hash = `pages/${pageName}`;
      }
    });
  });

  /* Event listener for hash change */
  function handleHashChange() {
    /* Load page based on hash change */
    const pageName = window.location.hash.substring(1);
    if (!isMagnetRepelEffectOn) {
      loadPage(pageName);
    }
  }

  window.addEventListener("hashchange", handleHashChange);

  /* Get initial page from hash and Load initial page or home page */
  const initialPage = window.location.hash.substring(1);
  loadPage(initialPage || "pages/home.html");

  /* Function to handle navigation to home page */
  function handleHomePage(e) {
    e.preventDefault();
    loadPage("pages/home.html");
    // window.location.hash = "";
    window.location.hash = "pages/home.html";
  }

  titleElement.addEventListener("click", handleHomePage);

  /* Update loadPage function to load content based on hash fragment */
  async function loadPage(pageName) {
    try {
      let file;
      if (!pageName || pageName === "") {
        file = window.location.origin + "/pages/home.html";
      } else {
        file = window.location.origin + `/${pageName}`;
      }

      /* Fetch the page content */
      const response = await fetch(file);
      const html = await response.text();
      dataContainer.innerHTML = html;

      const dataContainerPage = dataContainer.querySelector(
        ".data-container__page"
      );

      if (dataContainerPage) {
        /* Add page transition animation */
        dataContainerPage.classList.add("data-container__page-transition");

        /* Add animationend event listener to remove the page transition animation */
        dataContainerPage.addEventListener(
          "animationend",
          () => {
            dataContainerPage.classList.remove(
              "data-container__page-transition"
            );
          },
          { once: true }
        );
      }
    } catch (error) {
      console.error("Error loading page:", error);
    }
  }

  /* Drag and drop the nav elements on the data container */
  const dropZoneDataContainer = document.querySelector(".data-container");
  const dropZoneTerminal = document.querySelector(
    ".magnet-container__terminal-navigation"
  );

  function handleMagnetContainerNavigation(e) {
    let dragElement = e.target;

    /* Adjusting for Firefox compatibility */
    if (
      navigator.userAgent.indexOf("Firefox") !== -1 &&
      !isMagnetRepelEffectOn &&
      isDeveloperModeOn
    ) {
      dragElement = e.target.parentElement;
    }

    /* Event listener for drag start */
    dragElement.addEventListener("dragstart", (e) => {
      let draggedElementClassName = e.target.id;

      /* Adjusting for Firefox compatibility */
      if (
        navigator.userAgent.indexOf("Firefox") !== -1 &&
        !isMagnetRepelEffectOn &&
        isDeveloperModeOn
      ) {
        draggedElementClassName = e.target.children[0].id;
      }

      /* Disabling drag if not in magnetic or developer mode */
      if (!isMagnetRepelEffectOn && !isDeveloperModeOn) {
        e.dataTransfer.effectAllowed = "none";
      } else if (isMagnetRepelEffectOn) {
        e.dataTransfer.effectAllowed = "none";
      }

      e.dataTransfer.setData("text/plain", draggedElementClassName);
    });
  }

  magnetContainerNavigation.addEventListener(
    "mousedown",
    handleMagnetContainerNavigation
  );

  /* Preventing default behavior for dragover and drop events */
  dropZoneDataContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  /* Handling drop event to navigate to the dropped page */
  function handleDropZoneDataContainer(e) {
    e.preventDefault();

    const data = e.dataTransfer.getData("text/plain");
    let dropElement = "";
    if (data) {
      dropElement = document.getElementById(`${data}`);
    }

    // e.dataTransfer.dropEffect = 'none';

    if (dropElement) {
      const dropElementText = dropElement.innerText.trim().toLowerCase();
      if (!window.location.hash.includes(dropElementText)) {
        const pageName = dropElement.parentElement
          .getAttribute("href")
          .replace("#", "");
        if (!isMagnetRepelEffectOn) {
          // window.location.hash = "";
          window.location.hash = `pages/${pageName}`;
        }
      }
    }
  }

  dropZoneDataContainer.addEventListener("drop", handleDropZoneDataContainer);

  dropZoneTerminal.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  /* Handling drop event to update terminal input field */
  function handleDropZoneTerminal(e) {
    e.preventDefault();

    const data = e.dataTransfer.getData("text/plain");
    const dropElement = document.getElementById(`${data}`);

    if (dropElement) {
      const dropElementText = dropElement.innerText
        .trim()
        .toLowerCase()
        .replace(".", "")
        .replace("()", "");
      const terminalInputField = dropZoneTerminal.querySelector(
        "input[id='command']"
      );
      terminalInputField.value = dropElementText;
      terminalInputField.focus();
    }
  }

  dropZoneTerminal.addEventListener("drop", handleDropZoneTerminal);

  /* ****************************************************** */
  /* ***** Interact with website from browser console ***** */
  /* ****************************************************** */

  /* Namespace for website utilities */
  window.KaleidoscopeKit = {};

  /* Router for navigating between pages */
  window.KaleidoscopeKit.router = {
    __navigate__(page = "home") {
      if (isMagnetRepelEffectOn && !isDeveloperModeOn) {
        console.log(
          "%cThe website is currently in magnetic mode and not in developer mode. To view the pages, please disable magnetic mode and enable developer mode.",
          "color:#ef4032; font-size: 0.8rem;"
        );
        return;
      }

      if (!isMagnetRepelEffectOn && !isDeveloperModeOn) {
        console.log(
          "%cThe website is not currently in developer mode. To view the pages, please enable developer mode.",
          "color:#ef4032; font-size: 0.8rem;"
        );
        return;
      }

      if (isMagnetRepelEffectOn) {
        console.log(
          "%cThe website is currently in magnetic mode. To view the pages, please disable magnetic mode.",
          "color:#ef4032; font-size: 0.8rem;"
        );
        return;
      }

      if (window.location.hash.includes(page)) {
        console.log(
          `%cYou are already on the "${page}" page.`,
          "color:#2EA5F2; font-size: 0.8rem;"
        );
      }

      // window.location.hash = "";
      window.location.hash = `pages/${page}.html`.toLowerCase();
    },

    /* Methods for navigating to specific pages */
    home() {
      this.__navigate__("home");
    },

    about() {
      this.__navigate__("about");
    },

    skills() {
      this.__navigate__("skills");
    },

    projects() {
      this.__navigate__("projects");
    },

    blogs() {
      this.__navigate__("blogs");
    },

    contact() {
      this.__navigate__("contact");
    },
  };

  /* Torch light */
  function torchLightOn() {
    const torchLightElement = document.querySelector(".torch");
    torchLightElement.classList.add("torch-light");
    document.body.addEventListener("mousemove", (e) => {
      torchLightElement.style.setProperty("--x", e.clientX + "px");
      torchLightElement.style.setProperty("--y", e.clientY + "px");
    });
  }

  function torchLightOff() {
    const torchLightElement = document.querySelector(".torch");
    torchLightElement.classList.remove("torch-light");
  }

  window.KaleidoscopeKit.secretos = {
    torchLightOn,
    torchLightOff,
  };
});
