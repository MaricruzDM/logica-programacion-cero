CURSO.contenido.m06 = {
  html: `
<p>Con las variables guardamos datos. Ahora aprenderemos a operar con ellos: calcular, comparar y combinar condiciones.</p>

<h2>1. Operadores aritméticos</h2>
<table>
  <thead><tr><th>Operación</th><th>Símbolo</th><th>Ejemplo</th><th>Resultado</th></tr></thead>
  <tbody>
    <tr><td>Suma</td><td><code>+</code></td><td><code>7 + 2</code></td><td>9</td></tr>
    <tr><td>Resta</td><td><code>-</code></td><td><code>7 - 2</code></td><td>5</td></tr>
    <tr><td>Multiplicación</td><td><code>*</code></td><td><code>7 * 2</code></td><td>14</td></tr>
    <tr><td>División</td><td><code>/</code></td><td><code>7 / 2</code></td><td>3.5</td></tr>
    <tr><td>Potencia</td><td><code>^</code></td><td><code>3 ^ 2</code></td><td>9</td></tr>
    <tr><td>Residuo (módulo)</td><td><code>MOD</code> o <code>%</code></td><td><code>7 MOD 2</code></td><td>1</td></tr>
  </tbody>
</table>

<h3>El residuo, explicado con ejemplos</h3>
<p>El residuo es lo que sobra al dividir.</p>
<div class="analogia">
  <strong>Analogía: repartir galletas</strong>
  Tienes 7 galletas y las repartes entre 2 niños. A cada uno le tocan 3 y sobra 1. Ese 1 es el residuo: <code>7 MOD 2 = 1</code>.
</div>
<p>Con el residuo se pueden resolver cosas útiles:</p>
<ul>
  <li><strong>¿Es par?</strong> Si <code>n MOD 2 = 0</code>, el número es par. Si da 1, es impar.</li>
  <li><strong>¿Es múltiplo de 5?</strong> Si <code>n MOD 5 = 0</code>.</li>
</ul>
<p>En Java, el residuo se escribe con <code>%</code> y la potencia no es un operador (se usa <code>Math.pow</code>).</p>

<h2>2. Orden de las operaciones</h2>
<p>Igual que en matemáticas, no todo se calcula de izquierda a derecha. El orden es:</p>
<ol>
  <li>Paréntesis <code>( )</code></li>
  <li>Potencia <code>^</code></li>
  <li>Multiplicación, división y residuo</li>
  <li>Suma y resta</li>
</ol>
<div class="ejemplo">
  <strong>Ejemplo</strong>
  <code>2 + 3 * 4</code> da 14, porque primero se multiplica (3 * 4 = 12) y luego se suma (2 + 12).<br>
  <code>(2 + 3) * 4</code> da 20, porque los paréntesis se hacen primero.
</div>
<div class="aviso">
  <strong>Error común al calcular un promedio</strong>
  <code>a + b / 2</code> divide solo b entre 2 y luego suma a. Lo correcto es <code>(a + b) / 2</code>. Ante la duda, usa paréntesis.
</div>

<h2>3. Operadores de comparación</h2>
<p>Comparan dos valores y siempre dan como resultado <strong>Verdadero</strong> o <strong>Falso</strong>.</p>
<table>
  <thead><tr><th>Significado</th><th>PSeInt</th><th>Java</th><th>Ejemplo</th><th>Resultado</th></tr></thead>
  <tbody>
    <tr><td>Igual a</td><td><code>=</code></td><td><code>==</code></td><td><code>5 = 5</code></td><td>Verdadero</td></tr>
    <tr><td>Distinto de</td><td><code>&lt;&gt;</code></td><td><code>!=</code></td><td><code>5 &lt;&gt; 3</code></td><td>Verdadero</td></tr>
    <tr><td>Mayor que</td><td><code>&gt;</code></td><td><code>&gt;</code></td><td><code>3 &gt; 5</code></td><td>Falso</td></tr>
    <tr><td>Menor que</td><td><code>&lt;</code></td><td><code>&lt;</code></td><td><code>3 &lt; 5</code></td><td>Verdadero</td></tr>
    <tr><td>Mayor o igual</td><td><code>&gt;=</code></td><td><code>&gt;=</code></td><td><code>5 &gt;= 5</code></td><td>Verdadero</td></tr>
    <tr><td>Menor o igual</td><td><code>&lt;=</code></td><td><code>&lt;=</code></td><td><code>6 &lt;= 5</code></td><td>Falso</td></tr>
  </tbody>
</table>
<div class="aviso">
  <strong>No confundas = con &lt;-</strong>
  En PSeInt, <code>&lt;-</code> guarda un valor (asignación) y <code>=</code> pregunta si dos cosas son iguales (comparación). En Java es distinto: <code>=</code> asigna y <code>==</code> compara.
</div>

<h2>4. Operadores lógicos</h2>
<p>Sirven para combinar varias condiciones en una sola.</p>
<table>
  <thead><tr><th>Operador</th><th>PSeInt</th><th>Java</th><th>Significado</th></tr></thead>
  <tbody>
    <tr><td>Y</td><td><code>Y</code></td><td><code>&amp;&amp;</code></td><td>Verdadero solo si <strong>ambas</strong> son verdaderas.</td></tr>
    <tr><td>O</td><td><code>O</code></td><td><code>||</code></td><td>Verdadero si <strong>al menos una</strong> es verdadera.</td></tr>
    <tr><td>NO</td><td><code>NO</code></td><td><code>!</code></td><td>Invierte el valor.</td></tr>
  </tbody>
</table>

<h3>Analogías</h3>
<div class="analogia">
  <strong>Y: entrar a un concierto</strong>
  Para entrar necesitas boleto <em>Y</em> identificación. Si te falta una, no entras.
</div>
<div class="analogia">
  <strong>O: pagar una compra</strong>
  Puedes pagar con efectivo <em>O</em> con tarjeta. Con que tengas una de las dos, puedes pagar.
</div>
<div class="analogia">
  <strong>NO: el interruptor</strong>
  Si la luz está encendida, NO(encendida) es apagada. Siempre da lo contrario.
</div>

<h3>Tablas de verdad</h3>
<p>Muestran todos los resultados posibles. V es Verdadero y F es Falso.</p>
<table>
  <thead><tr><th>A</th><th>B</th><th>A Y B</th><th>A O B</th></tr></thead>
  <tbody>
    <tr><td>V</td><td>V</td><td>V</td><td>V</td></tr>
    <tr><td>V</td><td>F</td><td>F</td><td>V</td></tr>
    <tr><td>F</td><td>V</td><td>F</td><td>V</td></tr>
    <tr><td>F</td><td>F</td><td>F</td><td>F</td></tr>
  </tbody>
</table>
<table>
  <thead><tr><th>A</th><th>NO A</th></tr></thead>
  <tbody>
    <tr><td>V</td><td>F</td></tr>
    <tr><td>F</td><td>V</td></tr>
  </tbody>
</table>

<div class="ejemplo">
  <strong>Ejemplo: ¿puede conducir?</strong>
  Una persona puede conducir si tiene 18 años o más <em>Y</em> tiene licencia.
  <pre><code>edad &gt;= 18 Y tieneLicencia = Verdadero</code></pre>
  Si edad = 20 y tieneLicencia = Verdadero: Verdadero Y Verdadero = Verdadero.<br>
  Si edad = 20 y tieneLicencia = Falso: Verdadero Y Falso = Falso.
</div>

<div class="ejemplo">
  <strong>Ejemplo: ¿está dentro de un rango?</strong>
  Una nota es válida si está entre 0 y 10:
  <pre><code>nota &gt;= 0 Y nota &lt;= 10</code></pre>
  En muchos lenguajes no se puede escribir <code>0 &lt;= nota &lt;= 10</code>. Se deben separar las dos condiciones.
</div>

<h2>5. Prioridad entre operadores</h2>
<p>De mayor a menor prioridad: aritméticos, comparaciones, <code>NO</code>, <code>Y</code>, <code>O</code>. Los paréntesis siempre mandan.</p>
<div class="nota">
  <strong>Recomendación</strong>
  Si mezclas <code>Y</code> con <code>O</code>, usa paréntesis para dejar claro tu intención. Por ejemplo: <code>(a Y b) O c</code>.
</div>

<h2>6. Ejercicios</h2>
<ol>
  <li>Calcula a mano: <code>10 - 2 * 3</code> y <code>(10 - 2) * 3</code>.</li>
  <li>Calcula: <code>17 MOD 5</code> y <code>20 MOD 4</code>.</li>
  <li>Si a = 5 y b = 10, ¿qué da <code>a &gt; 3 Y b &lt; 8</code>? ¿Y <code>a &gt; 3 O b &lt; 8</code>?</li>
  <li>Escribe una condición que sea verdadera cuando un número esté entre 1 y 100.</li>
  <li>Escribe una condición que sea verdadera si un año es múltiplo de 4.</li>
</ol>
`,
  quiz: [
    {
      p: "¿Cuánto es 2 + 3 * 4?",
      o: ["20", "14", "24", "9"],
      c: 1,
      e: "Primero se multiplica (12) y luego se suma 2."
    },
    {
      p: "¿Cuánto es 7 MOD 2?",
      o: ["3", "3.5", "1", "0"],
      c: 2,
      e: "7 dividido entre 2 es 3 y sobra 1."
    },
    {
      p: "¿Qué condición indica que un número n es par?",
      o: ["n MOD 2 = 0", "n MOD 2 = 1", "n / 2 = 1", "n * 2 = 0"],
      c: 0,
      e: "Un número par no deja residuo al dividirse entre 2."
    },
    {
      p: "¿Qué resultado dan siempre las comparaciones?",
      o: ["Un número", "Un texto", "Verdadero o Falso", "Nada"],
      c: 2,
      e: "Las comparaciones producen valores lógicos."
    },
    {
      p: "¿Cuándo es Verdadera la expresión A Y B?",
      o: ["Cuando alguna es verdadera", "Cuando ambas son verdaderas", "Cuando ambas son falsas", "Siempre"],
      c: 1,
      e: "El Y exige que se cumplan las dos condiciones."
    },
    {
      p: "¿Cuándo es Falsa la expresión A O B?",
      o: ["Cuando ambas son falsas", "Cuando una es verdadera", "Cuando ambas son verdaderas", "Nunca"],
      c: 0,
      e: "El O solo es falso si las dos son falsas."
    },
    {
      p: "Si a = 5 y b = 10, ¿cuánto da a > 3 Y b < 8?",
      o: ["Verdadero", "Falso", "5", "No se puede saber"],
      c: 1,
      e: "a > 3 es Verdadero, pero b < 8 es Falso, entonces Verdadero Y Falso es Falso."
    },
    {
      p: "En PSeInt, ¿qué diferencia hay entre <- y =?",
      o: ["Ninguna", "<- guarda un valor y = compara", "<- compara y = guarda un valor", "Ambas restan"],
      c: 1,
      e: "La flecha asigna; el igual compara."
    },
    {
      p: "¿Cuál es la forma correcta de calcular el promedio de a y b?",
      o: ["a + b / 2", "(a + b) / 2", "a / 2 + b", "a + (b / 2)"],
      c: 1,
      e: "Los paréntesis hacen que primero se sume y luego se divida."
    }
  ]
};
