const chatInput = document.querySelector(".chat-input textarea"); 
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");
const chatbot = document.querySelector(".chatbot");

// Función para mostrar y ocultar el chatbot
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});
chatbotCloseBtn?.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
});

// Añade el mensaje al chat
function addMessage(message, type) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat", type);
    messageElement.innerHTML = `
        <span class="material-symbols-outlined">${type === "incoming" ? "smart_toy" : "person"}</span>
        <p>${message}</p>
    `;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Procesa y envía el mensaje del usuario
function handleUserMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    addMessage(userMessage, "outgoing");
    chatInput.value = "";

    // Procesa la respuesta del bot
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => addMessage(botResponse, "incoming"), 500);
}

// Respuestas del bot en función del mensaje del usuario
function getBotResponse(message) {
    message = message.toLowerCase();

    if (message.includes("hola")) {
        return "¡Hola! ¿En qué puedo ayudarte?";
    } else if (message.includes("precio") || message.includes("coste")) {
        return "Para información de precios, visita nuestra sección de precios en el sitio web.";
    } else if (message.includes("horario") || message.includes("horarios")) {
        return "Nuestros horarios de atención son de 9:00 am a 6:00 pm, de lunes a viernes.";
    } else if (message.includes("contacto") || message.includes("correo")) {
        return "Puedes contactarnos en confecciones.alejandra@gmail.com.";
    } else {
        return "Lo siento, no tengo una respuesta para eso. ¿Puedes preguntar algo más?";
    }
}

// Envía el mensaje al hacer clic en el botón o al presionar Enter
sendChatBtn.addEventListener("click", handleUserMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleUserMessage();
    }
});

// Ajusta la altura del textarea según el contenido
chatInput.addEventListener("input", () => {
    chatInput.style.height = "auto";
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});
