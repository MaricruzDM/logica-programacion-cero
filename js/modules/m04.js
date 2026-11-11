CURSO.contenido.m04 = {
  html: `
<p>Ya sabes qué es un algoritmo. Ahora aprenderás dos formas estándar de escribirlos para que cualquiera los entienda: el <strong>pseudocódigo</strong> y el <strong>diagrama de flujo</strong>.</p>

<h2>1. Pseudocódigo</h2>
<p>Es escribir el algoritmo con palabras parecidas a un lenguaje de programación, pero sin reglas estrictas de ningún lenguaje. "Pseudo" significa "falso" o "parecido".</p>
<div class="analogia">
  <strong>Analogía: el borrador</strong>
  Antes de pintar un cuadro haces un boceto a lápiz. El pseudocódigo es el boceto del programa: sirve para pensar la solución sin pelearte con la sintaxis de un lenguaje.
</div>

<h3>Estructura básica en PSeInt</h3>
<pre><code>Algoritmo NombreDelAlgoritmo
    // Aquí van las instrucciones
FinAlgoritmo</code></pre>
<ul>
  <li><code>Algoritmo</code> y <code>FinAlgoritmo</code> marcan el inicio y el fin.</li>
  <li>Las líneas que empiezan con <code>//</code> son comentarios: notas para las personas, la computadora las ignora.</li>
  <li>Cada instrucción termina con punto y coma (<code>;</code>).</li>
  <li>Las instrucciones dentro del algoritmo se escriben con sangría (espacios a la izquierda) para que se lea mejor.</li>
</ul>

<h3>Las tres instrucciones más básicas</h3>
<table>
  <thead><tr><th>Instrucción</th><th>Qué hace</th><th>Ejemplo</th></tr></thead>
  <tbody>
    <tr><td>Escribir</td><td>Muestra un mensaje o un valor en pantalla (salida).</td><td><code>Escribir "Hola";</code></td></tr>
    <tr><td>Leer</td><td>Pide un dato al usuario (entrada).</td><td><code>Leer edad;</code></td></tr>
    <tr><td>Asignar</td><td>Guarda un valor en una variable. Se escribe con una flecha.</td><td><code>total &lt;- 10;</code></td></tr>
  </tbody>
</table>
<p>La flecha <code>&lt;-</code> significa "guarda lo de la derecha en lo de la izquierda". No es una igualdad matemática.</p>

<h3>Primer ejemplo completo</h3>
<pre><code>Algoritmo Saludo
    Definir nombre Como Caracter;
    Escribir "¿Cómo te llamas?";
    Leer nombre;
    Escribir "Mucho gusto, ", nombre;
FinAlgoritmo</code></pre>
<p>Entrada: el nombre. Proceso: guardarlo. Salida: el saludo.</p>
<div class="nota">
  <strong>Nota</strong>
  La línea <code>Definir</code> crea una "caja" para guardar el dato. Se explica a fondo en el Módulo 5.
</div>

<h2>2. Diagrama de flujo</h2>
<p>Es dibujar el algoritmo con figuras unidas por flechas. Se lee de arriba hacia abajo.</p>
<div class="analogia">
  <strong>Analogía: el mapa</strong>
  El pseudocódigo es la lista de indicaciones escrita ("da vuelta a la derecha"). El diagrama de flujo es el mapa dibujado. Ambos llevan al mismo lugar.
</div>

<h3>Símbolos principales</h3>
<table>
  <thead><tr><th>Figura</th><th>Nombre</th><th>Uso</th></tr></thead>
  <tbody>
    <tr><td>Óvalo</td><td>Inicio / Fin</td><td>Marca dónde empieza y dónde termina.</td></tr>
    <tr><td>Paralelogramo</td><td>Entrada / Salida</td><td>Leer datos o mostrar resultados.</td></tr>
    <tr><td>Rectángulo</td><td>Proceso</td><td>Cálculos o asignaciones.</td></tr>
    <tr><td>Rombo</td><td>Decisión</td><td>Una pregunta de sí o no, con dos caminos.</td></tr>
    <tr><td>Flecha</td><td>Flujo</td><td>Indica el orden de los pasos.</td></tr>
  </tbody>
</table>

<h3>Ejemplo: sumar dos números</h3>
<pre><code>   ( Inicio )
       |
       v
  /  Leer a, b  /
       |
       v
  [ suma = a + b ]
       |
       v
  / Escribir suma /
       |
       v
    ( Fin )</code></pre>
<p>Este dibujo de texto representa el diagrama. Tú lo harás con las figuras reales en diagrams.net o a mano.</p>

<h3>Mismo algoritmo en pseudocódigo</h3>
<pre><code>Algoritmo SumarDosNumeros
    Definir a, b, suma Como Real;
    Escribir "Escribe el primer número:";
    Leer a;
    Escribir "Escribe el segundo número:";
    Leer b;
    suma &lt;- a + b;
    Escribir "La suma es: ", suma;
FinAlgoritmo</code></pre>

<h2>3. La prueba de escritorio</h2>
<p>Consiste en <strong>ejecutar el algoritmo a mano</strong>, paso a paso, anotando cómo cambian los valores. Sirve para encontrar errores antes de usar la computadora.</p>
<div class="analogia">
  <strong>Analogía: ensayo de una obra</strong>
  Los actores ensayan antes del estreno para detectar fallas. La prueba de escritorio es el ensayo de tu algoritmo.
</div>
<div class="ejemplo">
  <strong>Ejemplo con a = 4 y b = 3</strong>
  <table>
    <thead><tr><th>Paso</th><th>Instrucción</th><th>a</th><th>b</th><th>suma</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Leer a</td><td>4</td><td>-</td><td>-</td></tr>
      <tr><td>2</td><td>Leer b</td><td>4</td><td>3</td><td>-</td></tr>
      <tr><td>3</td><td>suma &lt;- a + b</td><td>4</td><td>3</td><td>7</td></tr>
      <tr><td>4</td><td>Escribir suma</td><td>4</td><td>3</td><td>7</td></tr>
    </tbody>
  </table>
  Salida: 7.
</div>

<h2>4. Ejercicio en PSeInt</h2>
<ol>
  <li>Abre PSeInt y escribe el algoritmo <code>SumarDosNumeros</code>.</li>
  <li>Ejecútalo con <code>F9</code> y prueba con 4 y 3.</li>
  <li>Prueba con otros números, por ejemplo 10 y 25.</li>
  <li>En PSeInt, desde el menú <strong>Archivo</strong> o el botón de diagrama de flujo, mira cómo el programa dibuja el diagrama de tu algoritmo.</li>
  <li>Guárdalo en <code>CursoLogica\\pseint</code>.</li>
</ol>

<h3>Ejercicios para el cuaderno</h3>
<ol>
  <li>Escribe en pseudocódigo un algoritmo que pida el nombre y la edad y los muestre.</li>
  <li>Dibuja el diagrama de flujo para calcular el área de un triángulo (base por altura entre 2).</li>
  <li>Haz la prueba de escritorio del punto anterior con base 6 y altura 4.</li>
</ol>
`,
  quiz: [
    {
      p: "¿Qué es el pseudocódigo?",
      o: ["Un lenguaje que solo entienden las computadoras", "Una forma de escribir algoritmos con palabras parecidas a un lenguaje, sin reglas estrictas", "Un virus", "Un tipo de dibujo"],
      c: 1,
      e: "Es el borrador del programa, escrito en lenguaje cercano al humano."
    },
    {
      p: "En el diagrama de flujo, ¿qué figura se usa para una decisión?",
      o: ["Óvalo", "Rectángulo", "Rombo", "Paralelogramo"],
      c: 2,
      e: "El rombo representa una pregunta con dos caminos."
    },
    {
      p: "¿Qué figura marca el inicio y el fin?",
      o: ["Óvalo", "Rombo", "Flecha", "Rectángulo"],
      c: 0,
      e: "El óvalo es el símbolo de inicio y fin."
    },
    {
      p: "En PSeInt, ¿qué hace la instrucción Leer?",
      o: ["Muestra un mensaje", "Pide un dato al usuario", "Borra datos", "Termina el programa"],
      c: 1,
      e: "Leer es la entrada: recibe un dato del usuario."
    },
    {
      p: "¿Qué significa la flecha <- en pseudocódigo?",
      o: ["Es igual a", "Guarda el valor de la derecha en lo de la izquierda", "Resta", "Comenta una línea"],
      c: 1,
      e: "Es la asignación: se guarda un valor en una variable."
    },
    {
      p: "¿Para qué sirve la prueba de escritorio?",
      o: ["Para limpiar el escritorio", "Para ejecutar el algoritmo a mano y encontrar errores", "Para instalar programas", "Para dibujar iconos"],
      c: 1,
      e: "Es el ensayo del algoritmo antes de ejecutarlo en la computadora."
    },
    {
      p: "¿Cómo se escribe un comentario en PSeInt?",
      o: ["Con // al inicio", "Con ## al inicio", "Entre comillas", "No existen"],
      c: 0,
      e: "Los comentarios con // son ignorados por la computadora."
    },
    {
      p: "Si a = 5 y b = 2, y el algoritmo hace suma <- a + b, ¿cuánto vale suma?",
      o: ["3", "7", "10", "52"],
      c: 1,
      e: "5 + 2 = 7."
    }
  ]
};
