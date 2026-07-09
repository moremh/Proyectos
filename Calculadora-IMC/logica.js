document.addEventListener('DOMContentLoaded', () => {
    cargarHistorial();

    const btnTema = document.getElementById('btn-tema');
    btnTema.addEventListener('click', () => {
        const html = document.documentElement;
        html.setAttribute('data-theme', html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });

    const pesoInput = document.getElementById('peso-input');
    const pesoRango = document.getElementById('peso-rango');
    const alturaInput = document.getElementById('altura-input');
    const alturaRango = document.getElementById('altura-rango');

    // Función para pintar la barra deslizadora de color Teal
    function actualizarColorBarra(slider) {
        const porcentaje = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, var(--primary) ${porcentaje}%, var(--border-color) ${porcentaje}%)`;
    }

    // Inicializar el color de las barras al abrir la página
    actualizarColorBarra(pesoRango);
    actualizarColorBarra(alturaRango);

    // Sincronizar y pintar al mover (Peso)
    pesoRango.addEventListener('input', function() {
        pesoInput.value = this.value;
        actualizarColorBarra(this);
    });
    pesoInput.addEventListener('input', function() {
        pesoRango.value = this.value;
        actualizarColorBarra(pesoRango);
    });

    // Sincronizar y pintar al mover (Altura)
    alturaRango.addEventListener('input', function() {
        alturaInput.value = this.value;
        actualizarColorBarra(this);
    });
    alturaInput.addEventListener('input', function() {
        alturaRango.value = this.value;
        actualizarColorBarra(alturaRango);
    });

    document.getElementById('btn-calcular').addEventListener('click', calcularIMC);
    document.getElementById('btn-limpiar').addEventListener('click', limpiarHistorial);
});

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso-input').value);
    const altura = parseFloat(document.getElementById('altura-input').value);
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;

    if (isNaN(peso) || isNaN(altura) || isNaN(edad)) return alert("Revisa los datos.");

    let alturaM = altura / 100;
    let imc = parseFloat((peso / (alturaM * alturaM)).toFixed(1));

    let tmb = (10 * peso) + (6.25 * altura) - (5 * edad);
    tmb = (genero === 'm') ? tmb + 5 : tmb - 161;
    let calorias = Math.round(tmb * 1.375);

    mostrarResultados(imc, calorias, genero);
}

function mostrarResultados(imc, calorias, genero) {
    document.getElementById('resultado').classList.remove('oculto');

    let categoria = "", color = "", emoji = "", tip = "";

    // Lógica para asignar categoría y TIP ESPECÍFICO
    if (imc < 18.5) {
        categoria = "Bajo peso"; 
        color = "#0097a7"; 
        emoji = genero === 'm' ? "🧍‍♂️" : "🧍‍♀️";
        tip = "💡 Tip: Aumenta tu ingesta calórica con alimentos nutritivos (frutos secos, aguacate, proteínas).";
    } else if (imc >= 18.5 && imc < 25) {
        categoria = "Peso Normal"; 
        color = "#2ecc71"; 
        emoji = genero === 'm' ? "🏃‍♂️" : "🏃‍♀️";
        tip = "💡 Tip: ¡Excelente trabajo! Mantén tus hábitos actuales de dieta balanceada y ejercicio regular.";
        try { if (typeof confetti === 'function') confetti(); } catch (e) {}
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso"; 
        color = "#f39c12"; 
        emoji = genero === 'm' ? "🧍‍♂️" : "🧍‍♀️";
        tip = "💡 Tip: Prioriza el déficit calórico moderado. Caminar 30 minutos al día es un gran comienzo.";
    } else {
        categoria = "Obesidad"; 
        color = "#e74c3c"; 
        emoji = "👤";
        tip = "💡 Tip: Tu salud es prioridad. Te recomendamos consultar con un profesional de la salud o nutricionista.";
    }

    document.getElementById('imc-numero').textContent = imc;
    document.getElementById('imc-numero').style.color = color;
    document.getElementById('imc-categoria').textContent = categoria;
    document.getElementById('imc-categoria').style.color = color;
    document.getElementById('avatar').textContent = emoji;
    document.getElementById('calorias-numero').textContent = calorias;
    document.getElementById('tip-salud').textContent = tip; // Inyecta el tip exacto

    guardarEnHistorial(imc, categoria);
}

// === HISTORIAL ===
function guardarEnHistorial(imc, categoria) {
    let historial = JSON.parse(localStorage.getItem('nutrifit_hist')) || [];
    const fecha = new Date().toLocaleDateString();
    
    historial.unshift({ fecha: fecha, imc: imc, cat: categoria });
    if (historial.length > 3) historial.pop(); // Guarda solo los 3 últimos para que no se alargue mucho
    
    localStorage.setItem('nutrifit_hist', JSON.stringify(historial));
    cargarHistorial();
}

function cargarHistorial() {
    const lista = document.getElementById('lista-historial');
    lista.innerHTML = ''; 
    let historial = JSON.parse(localStorage.getItem('nutrifit_hist')) || [];
    
    if (historial.length === 0) {
        lista.innerHTML = '<li style="color:#7f8c8d; border:none; padding:0;">Sin registros.</li>';
        return;
    }

    historial.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>📅 ${item.fecha}</span> <strong>IMC: ${item.imc} (${item.cat})</strong>`;
        lista.appendChild(li);
    });
}

function limpiarHistorial() {
    localStorage.removeItem('nutrifit_hist');
    document.getElementById('resultado').classList.add('oculto');
    cargarHistorial();
}