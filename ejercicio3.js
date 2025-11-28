/*El contador de visitas
Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
duplican las visitas. Representa esta situación y determina cuál es el valor final del
contador*/

//contador de visitas

let contador_de_visitas = 100;

let visitas_adicionales = 25;

let vistas_perdidas= 10;

let vistas_duplicadas = (contador_de_visitas + visitas_adicionales - vistas_perdidas) * 2;

console.log("el valor final del contador de visitas es de: " + vistas_duplicadas);