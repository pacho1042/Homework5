/*==Definir los elementos a seleccionar==*/
const parrafo = document.getElementById('parrafo');
const btnGenerar = document.getElementById('cambiarBtn');

/*====Se define el evento clik===*/
btnGenerar.addEventListener('click', function () {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    let color = `rgb(${colorR}, ${colorG}, ${colorB})`;

    parrafo.textContent = 'Nuevo texto desde el click!!';
    parrafo.style.backgroundColor = color;
    console.log('boton clickeado', color);

});

