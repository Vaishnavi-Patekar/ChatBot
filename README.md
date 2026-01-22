# 📱 Chatbot 

This project is a **menu-driven chatbot with a WhatsApp-like chat interface**, where users interact by typing an initial message (e.g., "Hi") and then selecting predefined options to continue the conversation.

The chatbot follows a **guided conversational flow** using predefined questions and multiple-choice answers, without using NLP or AI models.

---

## 🚀 Features

- 💬 WhatsApp-style chat interface
- 🧭 Menu-driven conversation flow
- 🖱️ Clickable answer options (buttons)
- 🔁 Back, Main Menu, and Exit navigation
- ⚡ Fast responses (no NLP processing)
- 🧩 Scalable question–answer structure
- 🌐 MERN-friendly architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- JavaScript (ES6)
- CSS (custom chat UI)

### Backend
- Node.js
- Express.js

### Data Handling
- Predefined JSON-based conversation flow (`data.js`)

---

## 🧱 Project Architecture
```
React Frontend
↓
Node.js / Express API
↓
Predefined Chatbot Flow (data.js)
```


---


---

## ⚙️ How It Works

1. User opens the chatbot and types **"Hi"**
2. Chatbot responds with a question
3. User selects one of the given options
4. Chatbot replies with the next message
5. New options are displayed
6. The conversation continues until the user exits

Each option is mapped to a unique **conversation ID**, ensuring structured and predictable flow.

---




