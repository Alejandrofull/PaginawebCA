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



// Función para verificar si el usuario está logueado y mostrar el saludo
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('nombre');
    
    const loginLink = document.getElementById('login-link');
    const userGreeting = document.getElementById('user-greeting');
    
    if (isLoggedIn === 'true' && userName) {
        // Si el usuario está logueado, muestra el saludo y el enlace para cerrar sesión
        userGreeting.textContent = `Hola, ${userName}`;
        loginLink.textContent = "Cerrar Sesión";
        loginLink.href = "#"; // Desactiva el enlace de redirección
        
        // Añade un evento para cerrar sesión al hacer clic
        loginLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace redireccione
            logout();
        });
    }
});

// Función para cerrar sesión
function logout() {
    // Elimina los datos de sesión de localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('nombre');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    
    // Redirige a la página principal para actualizar el estado
    window.location.href = 'ConfeccionesAlejandra.html';
}











document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    if (!validateEmail(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return;
    }
    if (name.trim() === "") {
        alert("Por favor ingresa tu nombre.");
        return;
    }
    
    mostrarMensaje("Mensaje Enviado", "Gracias por tu mensaje, nos pondremos en contacto contigo pronto.");
    this.reset();
    document.getElementById('success-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);
});
window.onscroll = function() {scrollFunction()};

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function mostrarMensaje(titulo, mensaje) {
    alert(titulo + "\n\n" + mensaje);
}



function scrollFunction() {
const scrollToTopBtn = document.getElementById("scrollToTop");
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
scrollToTopBtn.style.display = "block";
} else {
scrollToTopBtn.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}



