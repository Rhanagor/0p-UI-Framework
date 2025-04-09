/* 0% UI Framework */

//MODALS
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// ALERT
function showAlert(type,msg) {
  // Crea un contenedor para la alerta
  var alertContainer = document.getElementById("alert-container");

  // Crea un nuevo div de alerta
  var alert = document.createElement("div");
  alert.classList.add("alert", type); 

  // Agrega el contenido de la alerta
  alert.innerHTML = `
    <span class="closebtn" onclick="closeAlert(this)">&times;</span>
    ${msg}.
  `;

  // Añade la alerta al contenedor
  alertContainer.appendChild(alert);
}

function closeAlert(element) {
  var alert = element.parentElement;
  alert.style.display = 'none';
}



//TOAST
// Función para mostrar el toast con la posición especificada
function showToast(message, position = 'top-right') {
  const toast = document.getElementById('toast');
  toast.textContent = message;

  // Remover cualquier clase de posición previa
  toast.classList.remove('top-right', 'top-center', 'bottom-right', 'bottom-center', 'bottom-left', 'top-left');

  // Añadir la clase de la posición especificada
  toast.classList.add(position);

  // Mostrar el toast
  toast.classList.add('show');
  
  // Ocultar el toast después de 3 segundos
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
  }, 3000); 

  // Asegurarnos de que el toast no reaparezca después de desaparecer
  setTimeout(() => {
    toast.classList.remove('hide');
  }, 3500); 
}


// TABS
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Cargar el primer tab por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-btn").click(); 
});



// ACORDEON
document.querySelectorAll('.accordion-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

