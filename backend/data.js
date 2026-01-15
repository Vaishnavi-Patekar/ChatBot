const chatbotData = {

  start: {
    message: "Hi 👋 What do you want help with?",
    options: [
      { id: "web", text: "Web Development" },
      { id: "ai", text: "AI / Machine Learning" },
      { id: "iot", text: "IoT Projects" }
    ]
  },

  // ---------------- WEB ----------------

  web: {
    message: "Which web technology are you interested in?",
    options: [
      { id: "frontend", text: "Frontend Development" },
      { id: "backend", text: "Backend Development" },
      { id: "fullstack", text: "Full Stack Development" }
    ]
  },

  frontend: {
    message: "Choose a frontend framework:",
    options: [
      { id: "react", text: "React.js" },
      { id: "angular", text: "Angular" },
      { id: "vue", text: "Vue.js" }
    ]
  },

  react: {
    message: "React is a JavaScript library for building UI using components.",
    options: [
      { id: "frontend", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  angular: {
    message: "Angular is a TypeScript-based framework used for enterprise applications.",
    options: [
      { id: "frontend", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  vue: {
    message: "Vue.js is a progressive JavaScript framework for building UI.",
    options: [
      { id: "frontend", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  backend: {
    message: "Backend development focuses on server-side logic and databases.",
    options: [
      { id: "node", text: "Node.js" },
      { id: "java", text: "Java Backend" },
      { id: "python", text: "Python Backend" }
    ]
  },

  node: {
    message: "Node.js is used to build fast and scalable backend services.",
    options: [
      { id: "backend", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  java: {
    message: "Java backend is widely used in enterprise-level applications.",
    options: [
      { id: "backend", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  python: {
    message: "Python backend is popular for APIs, AI, and automation.",
    options: [
      { id: "backend", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  fullstack: {
    message: "Full Stack development includes frontend, backend, and database.",
    options: [
      { id: "mern", text: "MERN Stack" },
      { id: "mean", text: "MEAN Stack" },
      { id: "start", text: "Main Menu" }
    ]
  },

  mern: {
    message: "MERN = MongoDB, Express, React, Node.js.",
    options: [
      { id: "fullstack", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  mean: {
    message: "MEAN = MongoDB, Express, Angular, Node.js.",
    options: [
      { id: "fullstack", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  // ---------------- AI ----------------

  ai: {
    message: "What area of AI are you interested in?",
    options: [
      { id: "ml", text: "Machine Learning" },
      { id: "dl", text: "Deep Learning" },
      { id: "nlp", text: "Natural Language Processing" }
    ]
  },

  ml: {
    message: "Machine Learning enables systems to learn from data.",
    options: [
      { id: "ai", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  dl: {
    message: "Deep Learning uses neural networks with multiple layers.",
    options: [
      { id: "ai", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  nlp: {
    message: "NLP helps machines understand human language.",
    options: [
      { id: "ai", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  // ---------------- IOT ----------------

  iot: {
    message: "Select an IoT project idea:",
    options: [
      { id: "blind", text: "Smart Blind Stick" },
      { id: "home", text: "Home Automation" },
      { id: "health", text: "Health Monitoring System" }
    ]
  },

  blind: {
    message: "Smart Blind Stick uses sensors, AI vision & GPS for assistance.",
    options: [
      { id: "iot", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  home: {
    message: "Home Automation controls appliances using IoT & mobile apps.",
    options: [
      { id: "iot", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  health: {
    message: "Health Monitoring uses sensors to track vitals like heart rate.",
    options: [
      { id: "iot", text: "Back" },
      { id: "start", text: "Main Menu" },
      { id: "end", text: "Exit" }
    ]
  },

  // ---------------- END ----------------

  end: {
    message: "Thank you 😊 Have a great day!",
    options: []
  }
};

module.exports = chatbotData;
