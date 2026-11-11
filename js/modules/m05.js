CURSO.contenido.m05 = {
  html: `
<p>Los programas trabajan con datos: nombres, edades, precios, fechas. Para usarlos necesitamos un lugar donde guardarlos mientras el programa funciona. Ese lugar se llama <strong>variable</strong>.</p>

<h2>1. ¿Qué es una variable?</h2>
<p>Una variable es un espacio en la memoria (RAM) con un nombre, donde se guarda un dato que puede cambiar.</p>
<div class="analogia">
  <strong>Analogía: cajas con etiqueta</strong>
  Imagina cajas en una bodega. Cada una tiene una etiqueta con su nombre (por ejemplo <em>edad</em>) y adentro guarda un valor (por ejemplo 25). Puedes sacar el contenido para verlo, o reemplazarlo por otro. La etiqueta es el nombre y lo guardado es el valor.
</div>

<h2>2. Tipos de datos</h2>
<p>No es lo mismo guardar un número que un texto. Cada caja tiene una forma según lo que guarda. A eso se le llama <strong>tipo de dato</strong>.</p>
<table>
  <thead><tr><th>Tipo (PSeInt)</th><th>Qué guarda</th><th>Ejemplos</th><th>En Java</th></tr></thead>
  <tbody>
    <tr><td>Entero</td><td>Números sin decimales.</td><td>5, -20, 1000</td><td><code>int</code></td></tr>
    <tr><td>Real</td><td>Números con decimales.</td><td>3.14, 9.5, -0.25</td><td><code>double</code></td></tr>
    <tr><td>Caracter (o Texto)</td><td>Letras y palabras.</td><td>"Ana", "Hola"</td><td><code>String</code></td></tr>
    <tr><td>Logico</td><td>Verdadero o Falso.</td><td>Verdadero, Falso</td><td><code>boolean</code></td></tr>
  </tbody>
</table>
<div class="aviso">
  <strong>Error común</strong>
  Un número entre comillas es texto. <code>"25"</code> es un texto con los caracteres 2 y 5, y no se puede sumar como número. <code>25</code> sin comillas sí es número.
</div>

<h2>3. Declarar una variable</h2>
<p>Antes de usar una variable se le <strong>declara</strong>: se le pone nombre y se le dice qué tipo guarda.</p>
<pre><code>Definir edad Como Entero;
Definir precio Como Real;
Definir nombre Como Caracter;
Definir aprobado Como Logico;</code></pre>
<p>También se pueden declarar varias del mismo tipo juntas:</p>
<pre><code>Definir a, b, c Como Entero;</code></pre>

<h2>4. Reglas para nombrar variables</h2>
<ul>
  <li>Deben empezar con una letra.</li>
  <li>No llevan espacios ni acentos. Usa letras, números y guion bajo.</li>
  <li>No pueden ser palabras reservadas del lenguaje (como <code>Si</code>, <code>Para</code>, <code>Escribir</code>).</li>
  <li>Deben ser descriptivas. <code>precioFinal</code> es mejor que <code>x</code>.</li>
  <li>Mayúsculas y minúsculas pueden importar en otros lenguajes como Java, así que mantén un estilo constante.</li>
</ul>
<table>
  <thead><tr><th>Nombre</th><th>¿Válido?</th></tr></thead>
  <tbody>
    <tr><td><code>edad</code></td><td>Sí</td></tr>
    <tr><td><code>total_pagar</code></td><td>Sí</td></tr>
    <tr><td><code>2datos</code></td><td>No, empieza con número.</td></tr>
    <tr><td><code>mi edad</code></td><td>No, tiene espacio.</td></tr>
    <tr><td><code>Si</code></td><td>No, es palabra reservada.</td></tr>
  </tbody>
</table>

<h2>5. Asignar valores</h2>
<p>Se usa la flecha para guardar un valor en la variable. Al hacerlo, el valor anterior se pierde.</p>
<pre><code>edad &lt;- 20;
edad &lt;- edad + 1;    // ahora edad vale 21</code></pre>
<div class="nota">
  <strong>Cómo leer edad &lt;- edad + 1</strong>
  No es una ecuación matemática. Significa: "toma lo que hay en la caja edad, súmale 1, y guarda el resultado en la misma caja".
</div>

<h2>6. Constantes</h2>
<p>Una <strong>constante</strong> es un dato que no cambia durante el programa, por ejemplo el valor de pi o el porcentaje de IVA.</p>
<pre><code>Definir IVA Como Real;
IVA &lt;- 0.16;</code></pre>
<p>En Java existe la palabra <code>final</code> para impedir que se cambie. En PSeInt por convención se escribe en mayúsculas y no se modifica.</p>

<h2>7. Entrada y salida de datos</h2>
<pre><code>Algoritmo PromedioSimple
    Definir nombre Como Caracter;
    Definir nota1, nota2, promedio Como Real;

    Escribir "Escribe tu nombre:";
    Leer nombre;
    Escribir "Escribe tu primera nota:";
    Leer nota1;
    Escribir "Escribe tu segunda nota:";
    Leer nota2;

    promedio &lt;- (nota1 + nota2) / 2;
    Escribir nombre, ", tu promedio es: ", promedio;
FinAlgoritmo</code></pre>
<p>Siempre muestra un mensaje con <code>Escribir</code> antes de <code>Leer</code>. Si no, el usuario no sabrá qué debe teclear.</p>

<h2>8. Intercambiar dos valores</h2>
<p>Un clásico de la lógica. Tienes <code>a = 5</code> y <code>b = 8</code>, y quieres que queden <code>a = 8</code> y <code>b = 5</code>.</p>
<div class="analogia">
  <strong>Analogía: dos vasos</strong>
  Si tienes un vaso de agua y uno de jugo y quieres intercambiarlos, necesitas un tercer vaso vacío. Sin él, al verter uno en el otro se mezclan.
</div>
<pre><code>auxiliar &lt;- a;
a &lt;- b;
b &lt;- auxiliar;</code></pre>
<div class="ejemplo">
  <strong>Prueba de escritorio</strong>
  <table>
    <thead><tr><th>Instrucción</th><th>a</th><th>b</th><th>auxiliar</th></tr></thead>
    <tbody>
      <tr><td>Inicio</td><td>5</td><td>8</td><td>-</td></tr>
      <tr><td>auxiliar &lt;- a</td><td>5</td><td>8</td><td>5</td></tr>
      <tr><td>a &lt;- b</td><td>8</td><td>8</td><td>5</td></tr>
      <tr><td>b &lt;- auxiliar</td><td>8</td><td>5</td><td>5</td></tr>
    </tbody>
  </table>
</div>

<h2>9. Ejercicios</h2>
<ol>
  <li>Escribe un algoritmo que pida el precio de un producto y calcule el total con IVA del 16%.</li>
  <li>Pide una temperatura en grados Celsius y conviértela a Fahrenheit (multiplica por 9, divide entre 5 y suma 32).</li>
  <li>Intercambia los valores de dos variables y muestra el resultado antes y después.</li>
</ol>
<p>Pruébalos en PSeInt y compáralos con tu prueba de escritorio.</p>
`,
  quiz: [
    {
      p: "¿Qué es una variable?",
      o: ["Un espacio en memoria con nombre donde se guarda un dato que puede cambiar", "Un tipo de error", "Un dibujo del diagrama", "Un programa completo"],
      c: 0,
      e: "Es la caja con etiqueta que guarda un valor."
    },
    {
      p: "¿Qué tipo de dato conviene para guardar el precio 19.99?",
      o: ["Entero", "Real", "Logico", "No se puede guardar"],
      c: 1,
      e: "Los números con decimales son de tipo Real (double en Java)."
    },
    {
      p: "¿Qué tipo de dato guarda solo Verdadero o Falso?",
      o: ["Entero", "Caracter", "Real", "Logico"],
      c: 3,
      e: "Es el tipo lógico (boolean en Java)."
    },
    {
      p: "¿Cuál es un nombre de variable válido?",
      o: ["2nota", "mi nota", "nota_final", "Si"],
      c: 2,
      e: "No puede empezar con número, tener espacios ni ser palabra reservada."
    },
    {
      p: "Si edad vale 20 y se ejecuta edad <- edad + 1, ¿cuánto vale edad después?",
      o: ["20", "21", "1", "Da error"],
      c: 1,
      e: "Se toma el valor actual, se suma 1 y se guarda de nuevo."
    },
    {
      p: "¿Qué es una constante?",
      o: ["Un valor que cambia todo el tiempo", "Un dato que no cambia durante el programa", "Un tipo de bucle", "Un error"],
      c: 1,
      e: "Por ejemplo, el porcentaje de IVA."
    },
    {
      p: "¿Por qué se usa una variable auxiliar para intercambiar dos valores?",
      o: ["Porque Windows lo pide", "Para no perder uno de los valores al sobrescribir", "Para ahorrar memoria", "No es necesario usarla"],
      c: 1,
      e: "Sin la tercera variable, el primer valor se pierde al sobrescribirlo."
    },
    {
      p: "¿Cuál es la mejor práctica antes de usar Leer?",
      o: ["No escribir nada", "Mostrar un mensaje indicando qué dato se espera", "Cerrar el programa", "Usar solo números"],
      c: 1,
      e: "El mensaje evita que el usuario no sepa qué teclear."
    }
  ]
};
