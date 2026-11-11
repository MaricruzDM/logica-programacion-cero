CURSO.contenido.m08 = {
  html: `
<p>Las computadoras son excelentes para repetir tareas sin cansarse. En lugar de escribir la misma instrucción 100 veces, usamos una <strong>repetición</strong> o <strong>ciclo</strong> (también llamado bucle).</p>

<div class="analogia">
  <strong>Analogía: lavar platos</strong>
  Mientras haya platos sucios, tomas uno, lo lavas y lo dejas a secar. No escribes una instrucción por cada plato: repites la misma acción hasta que no queden más.
</div>

<h2>1. Ciclo Mientras</h2>
<p>Repite mientras la condición sea verdadera. La condición se revisa <strong>antes</strong> de cada vuelta, así que puede no ejecutarse ni una vez.</p>
<pre><code>Mientras condicion Hacer
    // instrucciones que se repiten
FinMientras</code></pre>

<div class="ejemplo">
  <strong>Ejemplo: contar del 1 al 5</strong>
  <pre><code>Algoritmo Contar
    Definir i Como Entero;
    i &lt;- 1;
    Mientras i &lt;= 5 Hacer
        Escribir i;
        i &lt;- i + 1;
    FinMientras
FinAlgoritmo</code></pre>
</div>

<h3>Prueba de escritorio</h3>
<table>
  <thead><tr><th>Vuelta</th><th>i antes</th><th>¿i &lt;= 5?</th><th>Escribe</th><th>i después</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>1</td><td>Sí</td><td>1</td><td>2</td></tr>
    <tr><td>2</td><td>2</td><td>Sí</td><td>2</td><td>3</td></tr>
    <tr><td>3</td><td>3</td><td>Sí</td><td>3</td><td>4</td></tr>
    <tr><td>4</td><td>4</td><td>Sí</td><td>4</td><td>5</td></tr>
    <tr><td>5</td><td>5</td><td>Sí</td><td>5</td><td>6</td></tr>
    <tr><td>-</td><td>6</td><td>No</td><td>-</td><td>Sale del ciclo</td></tr>
  </tbody>
</table>

<h2>2. Las tres piezas de un ciclo</h2>
<ol>
  <li><strong>Inicio:</strong> el valor con el que arranca la variable (<code>i &lt;- 1</code>).</li>
  <li><strong>Condición:</strong> hasta cuándo se repite (<code>i &lt;= 5</code>).</li>
  <li><strong>Cambio:</strong> algo que acerca la condición a terminar (<code>i &lt;- i + 1</code>).</li>
</ol>

<h2>3. Ciclo infinito</h2>
<p>Ocurre cuando la condición nunca deja de cumplirse. Normalmente se olvidó la línea de cambio.</p>
<div class="aviso">
  <strong>Ejemplo de error</strong>
  <pre><code>i &lt;- 1;
Mientras i &lt;= 5 Hacer
    Escribir i;     // falta i &lt;- i + 1
FinMientras</code></pre>
  Aquí i siempre vale 1, la condición siempre es verdadera y el programa escribe 1 sin parar. Si te pasa en PSeInt, cierra la ventana de ejecución o presiona el botón de detener.
</div>

<h2>4. Ciclo Repetir - Hasta Que</h2>
<p>Primero ejecuta las instrucciones y <strong>después</strong> revisa la condición. Se repite hasta que la condición se vuelve verdadera. Siempre se ejecuta al menos una vez.</p>
<pre><code>Repetir
    // instrucciones
Hasta Que condicion</code></pre>
<div class="analogia">
  <strong>Analogía: probar la sopa</strong>
  Primero pruebas la sopa, y después decides si ya está lista. Por lo menos una probada siempre haces.
</div>
<div class="ejemplo">
  <strong>Ejemplo: validar una contraseña</strong>
  <pre><code>Algoritmo ValidarClave
    Definir clave Como Entero;
    Repetir
        Escribir "Escribe la clave:";
        Leer clave;
    Hasta Que clave = 1234
    Escribir "Acceso concedido";
FinAlgoritmo</code></pre>
</div>
<p>En Java este ciclo es <code>do ... while</code>, pero con la condición contraria: sigue <em>mientras</em> la condición sea verdadera.</p>

<h2>5. Ciclo Para</h2>
<p>Se usa cuando sabes cuántas veces quieres repetir. Reúne inicio, límite y cambio en una sola línea.</p>
<pre><code>Para i &lt;- 1 Hasta 5 Con Paso 1 Hacer
    Escribir i;
FinPara</code></pre>
<p>Hace lo mismo que el ejemplo del <code>Mientras</code>, pero más corto. El <code>Con Paso 1</code> es opcional cuando se cuenta de uno en uno.</p>
<div class="ejemplo">
  <strong>Ejemplo: tabla de multiplicar</strong>
  <pre><code>Algoritmo Tabla
    Definir n, i Como Entero;
    Escribir "¿Qué tabla quieres?";
    Leer n;
    Para i &lt;- 1 Hasta 10 Hacer
        Escribir n, " x ", i, " = ", n * i;
    FinPara
FinAlgoritmo</code></pre>
</div>

<h3>¿Cuál ciclo elijo?</h3>
<table>
  <thead><tr><th>Situación</th><th>Ciclo</th></tr></thead>
  <tbody>
    <tr><td>Sé cuántas veces repetir.</td><td>Para</td></tr>
    <tr><td>No sé cuántas veces, y puede que ni una.</td><td>Mientras</td></tr>
    <tr><td>No sé cuántas veces, pero al menos una.</td><td>Repetir - Hasta Que</td></tr>
  </tbody>
</table>

<h2>6. Contadores y acumuladores</h2>
<h3>Contador</h3>
<p>Variable que <strong>cuenta</strong> cuántas veces ocurre algo. Siempre aumenta de una cantidad fija (normalmente 1).</p>
<pre><code>contador &lt;- contador + 1;</code></pre>

<h3>Acumulador</h3>
<p>Variable que <strong>suma valores distintos</strong>. Aumenta de una cantidad variable.</p>
<pre><code>suma &lt;- suma + numero;</code></pre>
<div class="analogia">
  <strong>Analogía: la alcancía</strong>
  El contador es el número de monedas que hay (siempre sube de una en una). El acumulador es el dinero total (sube según el valor de cada moneda).
</div>
<div class="aviso">
  <strong>No olvides inicializar</strong>
  Antes del ciclo, el contador y el acumulador deben valer 0. Si no, empiezan con un valor basura y el resultado sale mal.
</div>

<h2>7. Ejemplo completo: suma y promedio de 5 números</h2>
<pre><code>Algoritmo SumaPromedio
    Definir i Como Entero;
    Definir numero, suma, promedio Como Real;
    suma &lt;- 0;
    Para i &lt;- 1 Hasta 5 Hacer
        Escribir "Número ", i, ":";
        Leer numero;
        suma &lt;- suma + numero;
    FinPara
    promedio &lt;- suma / 5;
    Escribir "Suma: ", suma;
    Escribir "Promedio: ", promedio;
FinAlgoritmo</code></pre>

<div class="ejemplo">
  <strong>Prueba de escritorio con 4, 6, 2, 8, 5</strong>
  <table>
    <thead><tr><th>i</th><th>numero</th><th>suma</th></tr></thead>
    <tbody>
      <tr><td>-</td><td>-</td><td>0</td></tr>
      <tr><td>1</td><td>4</td><td>4</td></tr>
      <tr><td>2</td><td>6</td><td>10</td></tr>
      <tr><td>3</td><td>2</td><td>12</td></tr>
      <tr><td>4</td><td>8</td><td>20</td></tr>
      <tr><td>5</td><td>5</td><td>25</td></tr>
    </tbody>
  </table>
  Promedio = 25 / 5 = 5.
</div>

<h2>8. Ejemplo con contador: cuántos pares</h2>
<pre><code>Algoritmo ContarPares
    Definir i, n, pares Como Entero;
    pares &lt;- 0;
    Para i &lt;- 1 Hasta 10 Hacer
        Escribir "Escribe un número:";
        Leer n;
        Si n MOD 2 = 0 Entonces
            pares &lt;- pares + 1;
        FinSi
    FinPara
    Escribir "Hubo ", pares, " números pares";
FinAlgoritmo</code></pre>
<p>Aquí se combinan las tres ideas: un ciclo, una decisión y un contador.</p>

<h2>9. Ejercicios</h2>
<ol>
  <li>Muestra los números del 10 al 1 (cuenta hacia atrás).</li>
  <li>Muestra solo los números pares del 1 al 20.</li>
  <li>Suma los números del 1 al 100.</li>
  <li>Pide números hasta que el usuario escriba 0, y al final muestra cuántos escribió.</li>
  <li>Calcula el factorial de un número (5! = 5 x 4 x 3 x 2 x 1 = 120).</li>
</ol>
`,
  quiz: [
    {
      p: "¿Para qué sirve un ciclo?",
      o: ["Para repetir instrucciones sin escribirlas muchas veces", "Para declarar variables", "Para terminar el programa", "Para guardar archivos"],
      c: 0,
      e: "Evita duplicar instrucciones y se adapta a la cantidad de repeticiones."
    },
    {
      p: "¿Cuál ciclo conviene si se sabe exactamente cuántas veces repetir?",
      o: ["Para", "Repetir - Hasta Que", "Ninguno", "Segun"],
      c: 0,
      e: "El ciclo Para junta inicio, límite y cambio en una sola línea."
    },
    {
      p: "¿Qué ciclo se ejecuta siempre al menos una vez?",
      o: ["Mientras", "Repetir - Hasta Que", "Si", "Segun"],
      c: 1,
      e: "Revisa la condición hasta el final de cada vuelta."
    },
    {
      p: "¿Qué causa normalmente un ciclo infinito?",
      o: ["Usar demasiadas variables", "Olvidar el cambio que acerca la condición al final", "Escribir en español", "Usar comentarios"],
      c: 1,
      e: "Si nada modifica la variable de la condición, nunca termina."
    },
    {
      p: "¿Cuál es la diferencia entre un contador y un acumulador?",
      o: ["El contador sube una cantidad fija; el acumulador suma valores variables", "No hay diferencia", "El acumulador solo resta", "El contador guarda texto"],
      c: 0,
      e: "Contador: +1. Acumulador: + el valor que corresponda."
    },
    {
      p: "¿Con qué valor se debe inicializar normalmente un acumulador de suma?",
      o: ["1", "0", "-1", "100"],
      c: 1,
      e: "El 0 no altera la suma. Es el valor neutro."
    },
    {
      p: "¿Cuántas veces se ejecuta Para i <- 1 Hasta 5?",
      o: ["4", "5", "6", "Infinitas"],
      c: 1,
      e: "i toma los valores 1, 2, 3, 4 y 5."
    },
    {
      p: "En el ciclo Mientras i <= 3 con i <- 1 y i <- i + 1 dentro, ¿cuánto vale i al salir?",
      o: ["3", "4", "1", "0"],
      c: 1,
      e: "Con i = 3 todavía entra y lo aumenta a 4. Entonces 4 <= 3 es falso y sale."
    }
  ]
};
