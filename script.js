document.getElementById('envelope').addEventListener('click', function() {
    var envelope = document.getElementById('envelope');
    var flap = document.getElementById('flap');
    var paper = document.getElementById('paper');
    var image = document.getElementById('image');
    var heartContainer = document.getElementById('heart-container');
    
    // Abre la solapa del sobre y muestra el papel
    envelope.classList.toggle('open');
    flap.style.transform = 'rotateX(180deg)'; // Rota hacia arriba
    paper.style.opacity = '1';
    image.style.opacity = '1'; // Muestra la imagen
    
    // Limpia los corazones existentes (en caso de clics múltiples)
    heartContainer.innerHTML = '';
    
    // Genera corazones
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartContainer.appendChild(heart);
    }
});
