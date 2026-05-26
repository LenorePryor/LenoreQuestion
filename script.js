const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Okay! See you then!! - Pls select Let's go under the cat";
  gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXZjemphNjVxbG0xdnk1MmN4MmIyMHN1ZG82Y2c0OTNpOHhsdXBmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Qu9mzhLWOvAQJgp8bP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  const potentialDates = [
  "I don't actually get a response from this link. Please text me your response. Thanks!",
];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * potentialDates.length);
    const selectedDateIdea = potentialDates[randomIndex];


    alert(`Let me know when you are free: ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
