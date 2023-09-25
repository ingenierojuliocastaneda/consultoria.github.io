// Define las rutas protegidas
const rutasProtegidas = ['/index.html'];
// Verifica si el usuario está autenticado (puedes usar sessionStorage o localStorage)
const usuarioAutenticado = sessionStorage.getItem('usuarioAutenticado');
// Función para verificar el acceso a rutas protegidas
function verificarAcceso() {
    // Obtén la ruta actual
    const rutaActual = window.location.pathname;
  
    // Verifica si la ruta actual está en la lista de rutas protegidas y si el usuario no está autenticado
    if (rutasProtegidas.includes(rutaActual) && !usuarioAutenticado) {
      // Redirige al usuario a la página de inicio de sesión (cambia "inicio-de-sesion.html" por tu URL real)
      window.location.href = '/consultoria.github.io/Logged_out.html';
    }
  }
  
  // Llama a la función para verificar el acceso cuando la página se carga
  verificarAcceso();

  // Cuando el usuario inicia sesión con éxito
sessionStorage.setItem('usuarioAutenticado', 'true');

// Cuando el usuario cierra sesión
sessionStorage.removeItem('usuarioAutenticado');

// Redirige al usuario a la página de inicio de sesión
window.location.href = '/consultoria.github.io/Logged_out.html';

  
