CURSO.contenido.m01 = {
  html: `
<p>Antes de dar órdenes a una computadora conviene entender cómo funciona por dentro. No necesitas ser técnico: con unas pocas ideas claras es suficiente.</p>

<h2>1. ¿Qué es una computadora?</h2>
<p>Es una máquina que <strong>recibe datos, los procesa siguiendo instrucciones y entrega un resultado</strong>. No piensa por sí sola: solo hace exactamente lo que se le indica, muy rápido y sin cansarse.</p>
<div class="analogia">
  <strong>Analogía: un ayudante muy obediente</strong>
  Imagina un ayudante que hace lo que le pidas al pie de la letra, pero que no entiende nada que no le digas. Si le dices "trae algo para tomar", se queda parado porque no sabe qué es "algo". Si le dices "trae el vaso de agua de la mesa", lo hace en un segundo. Programar es aprender a dar instrucciones tan claras como la segunda.
</div>

<h2>2. Hardware y software</h2>
<table>
  <thead><tr><th>Concepto</th><th>Qué es</th><th>Ejemplos</th></tr></thead>
  <tbody>
    <tr><td>Hardware</td><td>Las partes físicas que puedes tocar.</td><td>Pantalla, teclado, mouse, procesador, memoria.</td></tr>
    <tr><td>Software</td><td>Los programas: instrucciones que no se tocan.</td><td>Windows, un navegador, un juego, PSeInt.</td></tr>
  </tbody>
</table>
<div class="analogia">
  <strong>Analogía: el cuerpo y la mente</strong>
  El hardware es el cuerpo (manos, ojos, cerebro físico). El software son las ideas y habilidades (saber caminar, saber leer). Un cuerpo sin ideas no hace nada, y las ideas sin cuerpo no pueden actuar. Se necesitan los dos.
</div>

<h2>3. Entrada, proceso y salida</h2>
<p>Todo programa, por pequeño que sea, sigue tres etapas:</p>
<ol>
  <li><strong>Entrada:</strong> los datos que recibe (lo que escribes, un clic, un archivo).</li>
  <li><strong>Proceso:</strong> lo que hace con esos datos (sumar, comparar, ordenar).</li>
  <li><strong>Salida:</strong> el resultado que entrega (un número en pantalla, un archivo, un sonido).</li>
</ol>
<div class="analogia">
  <strong>Analogía: una cocina</strong>
  Los ingredientes son la entrada, cocinar es el proceso y el platillo servido es la salida.
</div>
<div class="ejemplo">
  <strong>Ejemplo: una calculadora</strong>
  Entrada: escribes 4, el signo + y el 3. Proceso: la calculadora suma. Salida: muestra 7.
</div>
<p>Esta idea es la base de todo el curso. Cuando tengas un problema, pregúntate siempre: <em>¿qué datos entran, qué debo hacer con ellos y qué debe salir?</em></p>

<h2>4. Las partes importantes de una computadora</h2>
<table>
  <thead><tr><th>Parte</th><th>Función</th><th>Analogía</th></tr></thead>
  <tbody>
    <tr><td>Procesador (CPU)</td><td>Ejecuta las instrucciones y hace los cálculos.</td><td>El cocinero.</td></tr>
    <tr><td>Memoria RAM</td><td>Guarda temporalmente lo que se está usando ahora. Se borra al apagar.</td><td>La mesa de trabajo.</td></tr>
    <tr><td>Almacenamiento (disco)</td><td>Guarda archivos y programas de forma permanente.</td><td>La alacena o el refrigerador.</td></tr>
    <tr><td>Dispositivos de entrada</td><td>Envían datos a la computadora.</td><td>Teclado, mouse, micrófono.</td></tr>
    <tr><td>Dispositivos de salida</td><td>Muestran resultados.</td><td>Pantalla, bocinas, impresora.</td></tr>
  </tbody>
</table>
<div class="nota">
  <strong>Por qué importa la RAM</strong>
  Cuando más adelante guardemos datos en "variables", esos datos viven en la RAM mientras el programa funciona. Por eso, si el programa termina, esos datos desaparecen, a menos que se guarden en el disco.
</div>

<h2>5. El sistema binario, explicado simple</h2>
<p>Las computadoras funcionan con electricidad, y la electricidad solo tiene dos estados: <strong>encendido</strong> y <strong>apagado</strong>. A esos dos estados se les llama <strong>1</strong> y <strong>0</strong>. A cada uno se le llama <strong>bit</strong>.</p>
<div class="analogia">
  <strong>Analogía: interruptores de luz</strong>
  Con un solo interruptor puedes decir "sí" o "no". Con muchos interruptores juntos puedes representar números, letras e imágenes, igual que con puntos y rayas se forma el código Morse.
</div>
<p>Cuando juntas 8 bits tienes un <strong>byte</strong>. Con un byte se puede representar, por ejemplo, una letra.</p>
<table>
  <thead><tr><th>Decimal</th><th>Binario</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>0</td></tr>
    <tr><td>1</td><td>1</td></tr>
    <tr><td>2</td><td>10</td></tr>
    <tr><td>3</td><td>11</td></tr>
    <tr><td>4</td><td>100</td></tr>
    <tr><td>5</td><td>101</td></tr>
  </tbody>
</table>
<p>No tendrás que escribir en binario. Solo es importante saber que, por dentro, todo se reduce a ceros y unos.</p>

<h2>6. ¿Qué es un programa?</h2>
<p>Un <strong>programa</strong> es una lista de instrucciones que la computadora ejecuta en orden. Quien las escribe es el <strong>programador</strong>.</p>

<h2>7. ¿Qué es un lenguaje de programación?</h2>
<p>La computadora solo entiende binario, pero a las personas nos resulta muy difícil escribir en ceros y unos. Por eso existen los <strong>lenguajes de programación</strong>: formas de escribir instrucciones que se parecen más a nuestro idioma. Después, un traductor las convierte a binario.</p>
<div class="analogia">
  <strong>Analogía: el intérprete</strong>
  Tú hablas español, la computadora habla binario. El lenguaje de programación (por ejemplo Java) y su traductor son el intérprete que hace posible la conversación.
</div>
<p>Hay muchos lenguajes: Java, Python, C, JavaScript. Todos distintos por fuera, pero con la <strong>misma lógica</strong> por dentro. Por eso este curso se centra en la lógica y no en un lenguaje en particular.</p>

<div class="ejemplo">
  <strong>Ejercicio para pensar</strong>
  Elige un aparato de tu casa (microondas, cajero, cafetera) y escribe cuál es su entrada, su proceso y su salida.
</div>
`,
  quiz: [
    {
      p: "¿Cuál es la mejor descripción de una computadora?",
      o: ["Una máquina que piensa por sí sola", "Una máquina que recibe datos, los procesa con instrucciones y entrega un resultado", "Solo una pantalla con teclado", "Un programa de internet"],
      c: 1,
      e: "La computadora no piensa: sigue instrucciones exactas."
    },
    {
      p: "¿Cuál de estos elementos es software?",
      o: ["El teclado", "La pantalla", "Un navegador de internet", "El procesador"],
      c: 2,
      e: "El software son los programas. Lo demás es hardware, es decir, partes físicas."
    },
    {
      p: "En la analogía de la cocina, ¿qué representa el platillo servido?",
      o: ["La entrada", "El proceso", "La salida", "La memoria"],
      c: 2,
      e: "El resultado final siempre es la salida."
    },
    {
      p: "¿Qué parte de la computadora guarda temporalmente lo que se usa en este momento y se borra al apagarla?",
      o: ["El disco duro", "La memoria RAM", "La pantalla", "El teclado"],
      c: 1,
      e: "La RAM es la mesa de trabajo: rápida pero temporal."
    },
    {
      p: "¿Qué parte ejecuta las instrucciones y hace los cálculos?",
      o: ["La impresora", "La RAM", "El procesador (CPU)", "El mouse"],
      c: 2,
      e: "El CPU es el cocinero que realiza el trabajo."
    },
    {
      p: "¿Con qué dos valores trabaja el sistema binario?",
      o: ["0 y 1", "1 y 2", "A y B", "Sí y Tal vez"],
      c: 0,
      e: "Encendido y apagado, que se representan con 1 y 0."
    },
    {
      p: "¿Cuántos bits forman un byte?",
      o: ["2", "4", "8", "16"],
      c: 2,
      e: "Un byte son 8 bits."
    },
    {
      p: "¿Para qué sirve un lenguaje de programación?",
      o: ["Para que las personas escriban instrucciones de forma entendible, que luego se traducen a binario", "Para que la computadora se repare sola", "Para conectarse a internet", "Para guardar archivos"],
      c: 0,
      e: "Es el intérprete entre el lenguaje humano y el binario."
    }
  ]
};
