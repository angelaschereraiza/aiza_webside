<template>
  <v-container class="app-container" ref="appcontainer">
    <h1 class="title">
      <img src="@/assets/hexenhut.webp" alt="Hexenhut" class="icon-hexenhut" />
      Qwendoline - AI
    </h1>
    <v-card class="chat-card" elevation="2">
      <div class="chat-window">
        <div v-for="(m,i) in messages" :key="i" class="message-row" :class="m.role">
          <pre class="pre" :class="m.role">{{ m.content }}</pre>
        </div>
        <div v-if="loading" class="loading-text">...generate response</div>
      </div>

      <v-divider />

      <div class="input-area">
        <v-textarea v-model="input" label="Ask anything" rows="3" auto-grow variant="outlined" rounded-lg class="input-field" @keydown.enter.exact.prevent="send">
          <template #append-inner><v-icon class="cursor-pointer" @click.stop="openFileDialog" :disabled="loading" title="Upload images">mdi-image-plus</v-icon></template>
        </v-textarea>
        <input ref="fileInputEl" type="file" accept="image/*" multiple class="hidden-file-input" @change="onFilesSelected" />
        <div class="thumbs-send-row">
          <div v-if="images.length" class="thumbs"><div v-for="(img, idx) in images" :key="img.id" class="thumb"><img :src="img.url" :alt="img.file.name" /><button class="thumb-remove" @click="removeImage(idx)" :disabled="loading">×</button></div></div>
          <div class="send-button-container"><v-btn :loading="loading" color="primary" @click="send">Send</v-btn></div>
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
const appcontainer = ref(null)
const fileInputEl = ref(null)
const images = ref([])

function openFileDialog () {
  fileInputEl.value?.click()
}

function onFilesSelected (e) {
  const files = Array.from(e.target.files || [])
  const accepted = files.filter(f => f.type.startsWith('image/'))
  for (const file of accepted) {
    images.value.push({
      id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2)}`,
      file,
      url: URL.createObjectURL(file),
    })
  }
  e.target.value = ''
}

function removeImage (idx) {
  const [removed] = images.value.splice(idx, 1)
  if (removed?.url) URL.revokeObjectURL(removed.url)
}

function clearAllImages () {
  for (const img of images.value) {
    if (img.url) URL.revokeObjectURL(img.url)
  }
  images.value = []
}

function scrollDown() {
  nextTick(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  });
}

function fileToDataUrl(file){
  return new Promise((res, rej)=>{
    const r=new FileReader();
    r.onload=()=>res(r.result);
    r.onerror=rej;
    r.readAsDataURL(file);
  });
}

async function send(){
  if(!input.value.trim() && images.value.length===0) return;

  messages.value.push({ role:'user', content: input.value || '(images)', images: images.value.map(i=>i.url) });
  scrollDown();
  loading.value=true;

  try{
    const encoded = await Promise.all(images.value.map(i=>fileToDataUrl(i.file)));
    const payload = {
      messages: [
        { role: "system", content: "You are Qwendoline, a helpful AI assistant." },
        ...messages.value.map(m => ({
          role: m.role,
          content: m.content,
          images: m.images || []      
        })),
        {
          role: "user",
          content: input.value,
          images: images.value.map(i => i.url)
        }
      ],
      max_tokens: 1024
    };

    input.value=''; clearAllImages();

    const r = await fetch(`${API_BASE}/chat`,{
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    });

    if(r.ok){
      const data = await r.json().catch(()=>({}));
      messages.value.push({ role:'assistant', content: data?.reply ?? 'Error: Empty response from server (reply missing).', images: data?.images ?? null });
    }else{
      const maybeJson = await r.text();
      let detail = maybeJson;
      try{ detail = JSON.stringify(JSON.parse(maybeJson), null, 2); }catch{}
      messages.value.push({ role:'assistant', content:`Error: HTTP ${r.status} ${r.statusText}\n${detail}` });
    }
  }catch(e){
    messages.value.push({ role:'assistant', content:`Error: ${e.message || String(e)}` });
  }finally{
    loading.value=false; 
    scrollDown();
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
  position: sticky;
  top: 0;
  background: #000000;
  z-index: 10;
  padding: 12px 0;
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
  overflow: visible;
}

.chat-window {
  padding: 16px;
  padding-bottom: 140px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-area {
  position: sticky;
  bottom: 0;
  z-index: 20;
  background: #1a1a1a;
  padding: 16px;
  box-shadow: 0 -8px 16px rgba(0,0,0,.35);
}

.send-button-container {
  margin-left: auto;
  display: flex;
  align-items: center;
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
  overflow: auto;
  tab-size: 2;
  direction: ltr;
  unicode-bidi: plaintext;
  background: #414141;
  color: #e0e0e0;
  padding: 10px;
  border-radius: 8px;
  margin: 0;
  max-width: 60%;
  font-size: 14px;
  text-align: left;
}

.pre.user {
  background: #2a2a2a;
}

.pre.assistant {
  background: #414141;
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

.hidden-file-input {
  display: none;
}

.thumbs-send-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.thumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.thumb {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  overflow: hidden;
  background: #2a2a2a;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-remove {
  position: absolute;
  top: 4px;
  right: 4px;
  border: none;
  border-radius: 9999px;
  width: 22px;
  height: 22px;
  background: #000000aa;
  color: #ffffff;
  cursor: pointer;
}

.loading-text {
  color: #9e9e9e;
  font-size: 0.875rem;
}

</style>
