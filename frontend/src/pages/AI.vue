<template>
  <v-container class="app-container">
    <h1 class="title">
      <img src="@/assets/hexenhut.webp" alt="Hexenhut" class="icon-hexenhut" />
      Qwendoline - AI
    </h1>
    <v-card class="chat-card" elevation="2">
      <div class="chat-window" ref="chatWindow">
        <div v-for="(m,i) in messages" :key="i" class="message-row" :class="m.role">
          <pre class="pre" :class="m.role">{{ m.content }}</pre>
        </div>
        <div v-if="loading" class="loading-text">...generate response</div>
      </div>

      <v-divider />

      <div class="input-area">
        <v-textarea v-model="input" label="Ask anything" rows="3" auto-grow variant="outlined" rounded-lg class="input-field" @keydown.enter.exact.prevent="send" />
        <div class="send-button-container">
          <v-btn :loading="loading" color="primary" @click="send">Send</v-btn>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

const API_BASE = '/ai-api'
const input = ref('')
const messages = ref([])
const loading = ref(false)
const chatWindow = ref(null)

function scrollDown () {
  nextTick(() => {
    if (chatWindow.value) chatWindow.value.scrollTop = chatWindow.value.scrollHeight
  })
}

async function send() {
  if (!input.value.trim()) return
  const userMsg = { role: 'user', content: input.value }
  messages.value.push(userMsg)
  const payload = {
    message: input.value,
    max_tokens: 1024
  }
  input.value = ''
  loading.value = true
  scrollDown()

  try {
    const r = await fetch(`${API_BASE}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    const data = await r.json()
    messages.value.push({ role: 'assistant', content: data.reply })
  } catch (e) {
    messages.value.push({ role: 'assistant', content: `Fehler: ${e.message}` })
  } finally {
    loading.value = false
    scrollDown()
  }
}

onMounted(() => {
  messages.value.push({
    role: 'assistant',
    content: "Hi! I'm Qwendoline, your code assistant. How can I help you?"
  })
})
</script>

<style scoped>

.app-container {
  max-width: 100%;
  background: #000000;
  min-height: 100vh;
  padding: 36px;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #276fff;
  margin-bottom: 16px;
}

.icon-hexenhut {
  width: 36px;
  height: 36px;
  object-fit: contain;
  display: inline-block;
}

.chat-card {
  background-color: #1a1a1a;
  color: #ffffff;
}

.chat-window {
  height: calc(100vh - 330px);
  overflow: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.message-row {
  display: flex;
  width: 100%;
}

.message-row.user {
  justify-content: flex-end;
}

.message-row.assistant {
  justify-content: flex-start;
}

.pre {
  white-space: pre-wrap;
  background: #414141;
  color: #e0e0e0;
  padding: 10px;
  border-radius: 8px;
  margin: 0;
  max-width: 60%;
  font-size: 14px;
}

.pre.user {
  background: #2a2a2a;
  text-align: right;
}

.pre.assistant {
  background: #414141;
  text-align: left;
}

.input-area {
  padding: 16px;
}

.input-field {
  color: #ffffff;
}

.input-field .v-field,
.input-field .v-field__outline,
.input-field .v-field__outline__start,
.input-field .v-field__outline__end {
  border-radius: 8px !important;
}

.send-button-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -4px;
}

.loading-text {
  color: #9e9e9e;
  font-size: 0.875rem;
}
</style>
