CURSO.contenido.m11 = {
  html: `
<p>Saber las estructuras no basta: lo más valioso es saber <strong>qué hacer cuando no sale la solución</strong>. Este módulo reúne las estrategias que usan los programadores experimentados.</p>

<h2>1. Un método para resolver problemas</h2>
<p>Se conoce como el método de cuatro pasos:</p>
<ol>
  <li><strong>Entender:</strong> lee el problema dos veces. Con tus palabras, ¿qué piden? ¿Qué datos hay?</li>
  <li><strong>Planear:</strong> escribe la solución en pasos, a mano, en lenguaje común.</li>
  <li><strong>Ejecutar:</strong> pásala a pseudocódigo o código.</li>
  <li><strong>Revisar:</strong> prueba con ejemplos y busca fallas.</li>
</ol>
<div class="analogia">
  <strong>Analogía: construir una casa</strong>
  Nadie empieza poniendo ladrillos. Primero se entiende qué quiere el cliente, se hacen planos, se construye y al final se revisa. Saltarse el plano suele costar más tiempo.
</div>

<h2>2. Estrategias cuando te atoras</h2>
<table>
  <thead><tr><th>Estrategia</th><th>En qué consiste</th></tr></thead>
  <tbody>
    <tr><td>Ejemplo pequeño</td><td>Resuelve a mano con datos sencillos y observa qué hiciste.</td></tr>
    <tr><td>Dividir</td><td>Resuelve primero una parte del problema, luego otra.</td></tr>
    <tr><td>Simplificar</td><td>Resuelve una versión más fácil (con menos datos) y luego amplía.</td></tr>
    <tr><td>Dibujar</td><td>Haz un esquema o diagrama de flujo.</td></tr>
    <tr><td>Hacerlo al revés</td><td>Parte del resultado esperado y piensa qué pasos lo producen.</td></tr>
    <tr><td>Explicarlo en voz alta</td><td>Cuéntaselo a alguien o a un objeto. Al explicar, suelen aparecer los errores.</td></tr>
    <tr><td>Descansar</td><td>Alejarte un rato hace que el cerebro encuentre la solución.</td></tr>
  </tbody>
</table>
<div class="ejemplo">
  <strong>Ejemplo: sumar los dígitos de un número (1234)</strong>
  A mano: 1234 → el último dígito es 4 (1234 MOD 10); queda 123 (1234 / 10 sin decimales). Sigue con 3, luego 2, luego 1, hasta que el número sea 0. De ahí sale el algoritmo: <em>mientras el número sea mayor que 0, suma su último dígito y quítalo</em>.
</div>

<h2>3. Tipos de errores</h2>
<table>
  <thead><tr><th>Tipo</th><th>Qué es</th><th>Ejemplo</th></tr></thead>
  <tbody>
    <tr><td>De sintaxis</td><td>Escribiste algo que el lenguaje no entiende. El programa ni arranca.</td><td>Falta un <code>FinSi</code> o un punto y coma.</td></tr>
    <tr><td>De ejecución</td><td>El programa arranca pero se detiene al fallar algo.</td><td>Dividir entre cero, usar una posición que no existe.</td></tr>
    <tr><td>Lógicos</td><td>El programa corre sin quejas pero da un resultado incorrecto.</td><td>Usar <code>&gt;</code> en lugar de <code>&gt;=</code>.</td></tr>
  </tbody>
</table>
<p>Los más difíciles son los lógicos, porque nadie te avisa. Por eso se necesitan pruebas.</p>

<h2>4. Casos de prueba</h2>
<p>Un caso de prueba es un conjunto de datos de entrada con el resultado que debería salir. Antes de decir "ya funciona", prueba varios.</p>
<div class="analogia">
  <strong>Analogía: probar un coche</strong>
  Un coche no se prueba solo en calle plana: se prueba en subida, bajada, lluvia y frenado brusco. Tu algoritmo también necesita pruebas diversas.
</div>
<p>Elige siempre estos tres tipos de datos:</p>
<ol>
  <li><strong>Normales:</strong> los casos típicos.</li>
  <li><strong>Límites:</strong> justo en el borde de una condición.</li>
  <li><strong>Raros:</strong> cero, negativos, vacíos, el número más grande posible.</li>
</ol>
<div class="ejemplo">
  <strong>Ejemplo: algoritmo que dice si alguien es mayor de edad (edad &gt;= 18)</strong>
  <table>
    <thead><tr><th>Entrada</th><th>Tipo</th><th>Resultado esperado</th></tr></thead>
    <tbody>
      <tr><td>25</td><td>Normal</td><td>Mayor de edad</td></tr>
      <tr><td>10</td><td>Normal</td><td>Menor de edad</td></tr>
      <tr><td>18</td><td>Límite</td><td>Mayor de edad</td></tr>
      <tr><td>17</td><td>Límite</td><td>Menor de edad</td></tr>
      <tr><td>0</td><td>Raro</td><td>Menor de edad</td></tr>
      <tr><td>-5</td><td>Raro</td><td>Debería avisar que es un dato inválido</td></tr>
    </tbody>
  </table>
</div>
<p>El último caso revela algo: el algoritmo debería <strong>validar</strong> los datos antes de usarlos.</p>

<h2>5. Validar la entrada</h2>
<p>Nunca asumas que el usuario escribirá lo correcto. Con un ciclo se puede pedir el dato hasta que sea válido:</p>
<pre><code>Repetir
    Escribir "Escribe tu edad (0 a 120):";
    Leer edad;
Hasta Que edad &gt;= 0 Y edad &lt;= 120</code></pre>

<h2>6. Depurar: encontrar y corregir errores</h2>
<p>Depurar (en inglés <em>debugging</em>) es el proceso de localizar un error y arreglarlo.</p>
<div class="analogia">
  <strong>Analogía: el detective</strong>
  El detective no adivina: reúne pistas, descarta sospechosos y encuentra al culpable. Tú haces igual con tu código.
</div>
<p>Método práctico:</p>
<ol>
  <li><strong>Reproduce el error:</strong> identifica con qué datos falla.</li>
  <li><strong>Lee el mensaje de error</strong> con calma. Suele indicar la línea y la causa.</li>
  <li><strong>Haz una prueba de escritorio</strong> con esos datos y compara lo que esperabas con lo que pasa.</li>
  <li><strong>Muestra valores intermedios</strong> con <code>Escribir</code> en puntos clave para ver dónde se desvía.</li>
  <li><strong>Cambia una sola cosa a la vez</strong> y vuelve a probar.</li>
  <li><strong>Revisa lo más común primero:</strong> comparadores, límites de ciclos, valores iniciales.</li>
</ol>
<p>En PSeInt también puedes ejecutar paso a paso (opción en el menú <strong>Ejecutar</strong>) para ver cómo cambia cada variable.</p>

<h2>7. Ejemplo de depuración</h2>
<p>Este algoritmo debería sumar los números del 1 al 5, pero muestra 10 en lugar de 15:</p>
<pre><code>suma &lt;- 0;
Para i &lt;- 1 Hasta 4 Hacer
    suma &lt;- suma + i;
FinPara
Escribir suma;</code></pre>
<div class="ejemplo">
  <strong>Diagnóstico</strong>
  Con una prueba de escritorio se ve que i solo llega hasta 4: 1 + 2 + 3 + 4 = 10. El límite del ciclo debe ser 5. Es un error lógico: el programa corre bien, pero con una cuenta equivocada.
</div>

<h2>8. Errores frecuentes de principiantes</h2>
<ul>
  <li>No inicializar contadores y acumuladores.</li>
  <li>Confundir <code>=</code> con <code>&lt;-</code> (o <code>=</code> con <code>==</code> en Java).</li>
  <li>Quedarse un paso corto o largo en un ciclo.</li>
  <li>Olvidar el cambio dentro de un <code>Mientras</code>.</li>
  <li>Usar mal los paréntesis en los cálculos.</li>
  <li>Empezar un arreglo en la posición incorrecta.</li>
  <li>No probar los valores límite.</li>
</ul>

<h2>9. Buenas prácticas</h2>
<ul>
  <li>Usa nombres de variables claros.</li>
  <li>Escribe comentarios que expliquen el porqué, no lo obvio.</li>
  <li>Mantén la sangría ordenada.</li>
  <li>Avanza en pasos pequeños y prueba cada uno.</li>
  <li>Guarda tu trabajo seguido.</li>
</ul>

<h2>10. Ejercicios</h2>
<ol>
  <li>Encuentra el error: <code>Si edad = 18 Entonces Escribir "menor"</code> cuando el objetivo es avisar a quienes no llegan a 18.</li>
  <li>Diseña 6 casos de prueba para un algoritmo que calcula el promedio de tres notas entre 0 y 10.</li>
  <li>Escribe un algoritmo que sume los dígitos de un número, y pruébalo con 1234, 0 y 7.</li>
  <li>Toma un algoritmo anterior y agrégale validación de datos.</li>
</ol>
`,
  quiz: [
    {
      p: "¿Cuál es el orden correcto del método de cuatro pasos?",
      o: ["Ejecutar, entender, revisar, planear", "Entender, planear, ejecutar, revisar", "Revisar, ejecutar, planear, entender", "Planear, revisar, entender, ejecutar"],
      c: 1,
      e: "Primero se entiende, luego se planea, se ejecuta y se revisa."
    },
    {
      p: "¿Qué tipo de error ocurre cuando el programa corre pero da un resultado incorrecto?",
      o: ["De sintaxis", "Lógico", "De hardware", "De conexión"],
      c: 1,
      e: "Es el más difícil de detectar porque nadie avisa."
    },
    {
      p: "¿Qué tipo de error impide que el programa siquiera arranque por una palabra mal escrita?",
      o: ["De sintaxis", "Lógico", "De ejecución", "De diseño"],
      c: 0,
      e: "El lenguaje no entiende lo que escribiste."
    },
    {
      p: "¿Qué es un caso de prueba límite?",
      o: ["Un dato justo en el borde de una condición, como 18 en edad >= 18", "Un dato muy grande", "Un dato escrito en mayúsculas", "Un dato borrado"],
      c: 0,
      e: "Los límites revelan errores como usar > en vez de >=."
    },
    {
      p: "¿Qué ayuda más a detectar un error lógico?",
      o: ["Ignorarlo", "Hacer una prueba de escritorio y mostrar valores intermedios", "Reiniciar la computadora", "Cambiar varias cosas al mismo tiempo"],
      c: 1,
      e: "Comparar lo esperado con lo real señala dónde se desvía."
    },
    {
      p: "¿Por qué conviene cambiar una sola cosa a la vez al depurar?",
      o: ["Para saber qué cambio arregló o empeoró el problema", "Para gastar más tiempo", "Por costumbre", "Porque lo exige PSeInt"],
      c: 0,
      e: "Si cambias varias cosas no sabrás cuál produjo el efecto."
    },
    {
      p: "¿Qué es validar la entrada?",
      o: ["Verificar que el dato del usuario sea correcto antes de usarlo", "Guardar el programa", "Cambiar el color del texto", "Borrar variables"],
      c: 0,
      e: "Evita que datos inválidos produzcan resultados erróneos."
    },
    {
      p: "Un ciclo Para i <- 1 Hasta 4 se usa para sumar del 1 al 5. ¿Qué pasa?",
      o: ["Suma 10 en lugar de 15", "Suma 15", "Da error de sintaxis", "No hace nada"],
      c: 0,
      e: "Se queda un paso corto: 1+2+3+4 = 10."
    }
  ]
};
