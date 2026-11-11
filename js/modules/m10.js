CURSO.contenido.m10 = {
  html: `
<p>Cuando un programa crece, un solo bloque largo de instrucciones se vuelve difícil de leer y de corregir. La solución es dividirlo en partes pequeñas con un nombre. Cada parte se llama <strong>función</strong> (o subproceso).</p>

<h2>1. ¿Qué es una función?</h2>
<p>Es un bloque de instrucciones con nombre, que hace una tarea concreta y se puede usar muchas veces.</p>
<div class="analogia">
  <strong>Analogía: los integrantes de un equipo</strong>
  En un restaurante, el cocinero cocina, el mesero atiende y el cajero cobra. Cada uno hace su tarea y todos juntos sirven al cliente. Las funciones son los integrantes del equipo y el programa principal es el gerente que los coordina.
</div>

<h2>2. Ventajas</h2>
<ul>
  <li><strong>Reutilizar:</strong> escribes el código una vez y lo usas las veces que quieras.</li>
  <li><strong>Leer mejor:</strong> los nombres explican qué hace cada parte.</li>
  <li><strong>Corregir fácil:</strong> si hay un error, sabes en qué función buscar.</li>
  <li><strong>Trabajar en equipo:</strong> cada persona puede hacer una función distinta.</li>
</ul>

<h2>3. Parámetros y valor de retorno</h2>
<p>Una función puede recibir datos y puede devolver un resultado.</p>
<div class="analogia">
  <strong>Analogía: la licuadora</strong>
  Le metes frutas y leche (parámetros), la enciendes, y te da un licuado (valor de retorno). No necesitas saber cómo funciona por dentro para usarla.
</div>
<table>
  <thead><tr><th>Concepto</th><th>Qué es</th></tr></thead>
  <tbody>
    <tr><td>Parámetro</td><td>Dato que la función recibe para trabajar.</td></tr>
    <tr><td>Retorno</td><td>Resultado que la función devuelve a quien la llamó.</td></tr>
    <tr><td>Llamar a la función</td><td>Usarla escribiendo su nombre con los datos.</td></tr>
  </tbody>
</table>

<h2>4. Función con retorno en PSeInt</h2>
<pre><code>Funcion resultado &lt;- Sumar(a, b)
    Definir resultado Como Real;
    resultado &lt;- a + b;
FinFuncion

Algoritmo UsarFuncion
    Definir total Como Real;
    total &lt;- Sumar(4, 3);
    Escribir "El total es: ", total;
FinAlgoritmo</code></pre>
<ul>
  <li><code>Sumar</code> es el nombre.</li>
  <li><code>a</code> y <code>b</code> son los parámetros.</li>
  <li><code>resultado</code> es lo que devuelve.</li>
  <li>En el algoritmo principal se llama con <code>Sumar(4, 3)</code> y el valor devuelto se guarda en <code>total</code>.</li>
</ul>

<h2>5. Función sin retorno</h2>
<p>A veces solo queremos que haga una acción, como mostrar algo, sin devolver nada. En PSeInt se llaman <code>SubProceso</code>.</p>
<pre><code>SubProceso MostrarBienvenida(nombre)
    Escribir "Hola, ", nombre;
    Escribir "Bienvenido al curso";
FinSubProceso

Algoritmo Principal
    MostrarBienvenida("Ana");
    MostrarBienvenida("Luis");
FinAlgoritmo</code></pre>
<p>El mismo bloque se usó dos veces con datos distintos, sin copiar el código.</p>

<h2>6. Ejemplo: función con decisión</h2>
<pre><code>Funcion esPar &lt;- EsPar(n)
    Definir esPar Como Logico;
    Si n MOD 2 = 0 Entonces
        esPar &lt;- Verdadero;
    SiNo
        esPar &lt;- Falso;
    FinSi
FinFuncion

Algoritmo Prueba
    Si EsPar(8) Entonces
        Escribir "8 es par";
    FinSi
FinAlgoritmo</code></pre>
<p>Una función que devuelve Verdadero o Falso se puede usar directamente dentro de un <code>Si</code>. Se lee casi como una frase.</p>

<h2>7. Ámbito de las variables</h2>
<p>Las variables creadas dentro de una función existen <strong>solo ahí</strong>. Fuera de ella no se pueden ver.</p>
<div class="analogia">
  <strong>Analogía: la libreta personal</strong>
  Lo que cada integrante anota en su libreta no lo ve el resto. Si quiere compartir algo, lo pasa por un parámetro o lo devuelve como resultado.
</div>

<h2>8. Cómo se ve en Java (adelanto)</h2>
<pre><code>public static double sumar(double a, double b) {
    return a + b;
}

public static void mostrarBienvenida(String nombre) {
    System.out.println("Hola, " + nombre);
}</code></pre>
<table>
  <thead><tr><th>PSeInt</th><th>Java</th></tr></thead>
  <tbody>
    <tr><td>Funcion con retorno</td><td>método con tipo de retorno (<code>double</code>, <code>int</code>...)</td></tr>
    <tr><td>SubProceso</td><td>método <code>void</code></td></tr>
    <tr><td>Parámetros</td><td>Parámetros con su tipo</td></tr>
  </tbody>
</table>

<h2>9. Cómo decidir qué va en una función</h2>
<ol>
  <li>Si repites el mismo código en dos o más lugares, conviértelo en función.</li>
  <li>Si un bloque tiene una tarea clara que puedes describir en pocas palabras, hazlo función.</li>
  <li>Dale un nombre que diga qué hace: <code>CalcularPromedio</code>, <code>EsPar</code>.</li>
  <li>Una función debe hacer una sola cosa y hacerla bien.</li>
</ol>

<h2>10. Ejercicios</h2>
<ol>
  <li>Crea una función <code>Cuadrado(n)</code> que devuelva n por n.</li>
  <li>Crea una función <code>Mayor(a, b)</code> que devuelva el mayor de dos números.</li>
  <li>Crea un subproceso que reciba un número y muestre su tabla del 1 al 10.</li>
  <li>Crea una función <code>EsMayorDeEdad(edad)</code> que devuelva Verdadero o Falso.</li>
  <li>Reescribe un algoritmo largo que ya hiciste dividiéndolo en dos o tres funciones.</li>
</ol>
`,
  quiz: [
    {
      p: "¿Qué es una función?",
      o: ["Un bloque de instrucciones con nombre que hace una tarea y se puede reutilizar", "Un tipo de variable", "Un error", "Un símbolo del diagrama"],
      c: 0,
      e: "Permite dividir y reutilizar código."
    },
    {
      p: "¿Cuál NO es una ventaja de usar funciones?",
      o: ["Reutilizar código", "Leer mejor el programa", "Que el programa sea imposible de corregir", "Ubicar errores más fácil"],
      c: 2,
      e: "Las funciones facilitan corregir, no lo dificultan."
    },
    {
      p: "¿Qué es un parámetro?",
      o: ["Un dato que la función recibe para trabajar", "El resultado que devuelve", "El nombre del programa", "Un comentario"],
      c: 0,
      e: "Es como los ingredientes que le das a la licuadora."
    },
    {
      p: "¿Qué es el valor de retorno?",
      o: ["Lo que se le entrega a la función", "El resultado que la función devuelve", "Una variable global", "Un ciclo"],
      c: 1,
      e: "Es el licuado que sale de la licuadora."
    },
    {
      p: "En PSeInt, ¿cómo se llama el bloque que realiza una acción sin devolver ningún valor?",
      o: ["SubProceso", "Constante", "Matriz", "Segun"],
      c: 0,
      e: "En Java equivale a un método void."
    },
    {
      p: "Una variable creada dentro de una función, ¿dónde se puede usar?",
      o: ["En todo el programa", "Solo dentro de esa función", "Solo en otro archivo", "En ninguna parte"],
      c: 1,
      e: "Su ámbito es la función donde se creó."
    },
    {
      p: "Si el mismo código se repite en tres lugares del programa, ¿qué conviene hacer?",
      o: ["Dejarlo así", "Convertirlo en una función", "Borrarlo", "Cambiar de lenguaje"],
      c: 1,
      e: "Una función evita la duplicación."
    },
    {
      p: "¿Cuál es un buen nombre para una función que calcula un promedio?",
      o: ["x", "CalcularPromedio", "cosa1", "hacer"],
      c: 1,
      e: "El nombre debe describir lo que hace."
    }
  ]
};
