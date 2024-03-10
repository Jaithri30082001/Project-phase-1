// "use strict";
console.log("hello there!");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox-custom");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-button");
const inputInitHeight = chatInput.scrollHeight;

let userMessage;
const API_KEY = "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";

const createChatLi = (message, className) => {
  // create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p></p>` : `<p></p>`;
  // `<img src="images/loading.gif" alt="Loading..." id="loading_gif" />`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatLi.querySelector("p");
  console.log(messageElement);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
    }),
  };

  //   Send POST request to API, get response
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      messageElement.textContent = data.choices[0].message.content;
    })
    .catch((error) => {
      // console.log(error);
      messageElement.classList.add("error");
      messageElement.textContent =
        "Oops! Something went wrong. Please try again";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  //   console.log(userMessage);

  chatInput.addEventListener("input", () => {
    // adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
  });
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  //   append the user's message to chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // display "loading gif while waiting for the response"
    const incomingChatLi = createChatLi("Thinking..", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

sendChatBtn.addEventListener("click", handleChat);

// Listen for "keypress" event on the text area
chatInput.addEventListener("keydown", (event) => {
  // Check if the Enter key was pressed (key code 13)
  if (event.keyCode === 13 && !event.shiftKey && window.innerWidth > 800) {
    // if enter key is pressed without shift key and the window width is greater than 800px, handle the chat
    console.log("yes");
    event.preventDefault();
    handleChat();
  }
});

chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

// problems - chatbot cross icon stays green after clicking, when closing the animation is very very bad ( I didn't put any animation for that) and finally the text area height is not being increased as the scroll height increases
