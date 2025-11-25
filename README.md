# Aiza Website

**Aiza Website** is a project with a **static web frontend** including AI chat.

---

## Features

### Frontend

* **Vue 3** + **Vuetify 3** for a modern UI design
* **Home Page**:

  * Multi-language support (English / German)
  * Company information, technologies, and contact details
  * Responsive design for mobile and desktop
* **AI Chat Page**:

  * User messages aligned to the right
  * AI responses aligned to the left
  * Automatic scrolling
  * Dynamic input box with rounded corners

---

## Requirements

* **Ollama Server** (local or remote)
- **Node.js** ≥ 20.19 or 22.x  

---

## Setup & Start

### 1. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend is available at `http://localhost:5173`.

---

### 2. Set up OLLAMA Server on Linux

1. **Download Ollama**

```bash
curl -LO https://ollama.com/download/linux
```

2. **Install**

```bash
sudo dpkg -i ollama_<version>_amd64.deb
```

3. **Start the server**

```bash
ollama server start
```

4. **Check server status**

```bash
ollama status
```

> Note: The server runs by default on `http://localhost:11434`. Make sure this port is accessible for the frontend.

---

## Routes

| Route | Description                        |
| ----- | ---------------------------------- |
| `/`   | Home page with company information |
| `/ai` | AI Chat with Qwendoline            |

---

## Tech Stack

* **Frontend:** Vue 3, Vuetify 3, Vite
* **AI:** Ollama
