CURSO.contenido.m09 = {
  html: `
<p>Imagina que necesitas guardar las calificaciones de 30 alumnos. Crear 30 variables (<code>nota1</code>, <code>nota2</code>, ...) sería muy incómodo. Para eso existen los <strong>arreglos</strong> (también llamados listas o vectores).</p>

<h2>1. ¿Qué es un arreglo?</h2>
<p>Es una variable que guarda <strong>varios valores del mismo tipo</strong>, cada uno en una posición numerada.</p>
<div class="analogia">
  <strong>Analogía: los casilleros</strong>
  Piensa en los casilleros de una escuela. Hay una fila de casilleros iguales, cada uno con un número. Para guardar o sacar algo, dices el número del casillero. El arreglo es la fila completa y cada casillero es una posición.
</div>

<h2>2. Posición o índice</h2>
<p>El número de cada casillero se llama <strong>índice</strong>.</p>
<table>
  <thead><tr><th>Índice</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead>
  <tbody>
    <tr><td>Valor</td><td>8</td><td>6</td><td>9</td><td>7</td><td>10</td></tr>
  </tbody>
</table>
<div class="aviso">
  <strong>Ojo con el índice inicial</strong>
  En PSeInt los arreglos empiezan en la posición <strong>1</strong>. En Java y en la mayoría de lenguajes empiezan en <strong>0</strong>. Un arreglo de 5 elementos en Java usa los índices 0, 1, 2, 3 y 4. Es una de las confusiones más comunes al pasar de uno a otro.
</div>

<h2>3. Crear y usar un arreglo en PSeInt</h2>
<pre><code>Definir notas Como Real;
Dimension notas[5];

notas[1] &lt;- 8;
notas[2] &lt;- 6.5;
Escribir notas[1];       // muestra 8</code></pre>
<ul>
  <li><code>Dimension notas[5]</code> reserva 5 casilleros.</li>
  <li><code>notas[1]</code> es el primer casillero.</li>
  <li>No puedes usar una posición fuera del tamaño, por ejemplo <code>notas[6]</code>. Eso genera un error.</li>
</ul>

<h2>4. Recorrer un arreglo con un ciclo</h2>
<p>La gran ventaja: el índice puede ser una variable, así que un ciclo <code>Para</code> recorre todas las posiciones.</p>
<pre><code>Algoritmo LlenarYMostrar
    Definir notas Como Real;
    Definir i Como Entero;
    Dimension notas[5];

    Para i &lt;- 1 Hasta 5 Hacer
        Escribir "Nota ", i, ":";
        Leer notas[i];
    FinPara

    Escribir "Las notas son:";
    Para i &lt;- 1 Hasta 5 Hacer
        Escribir notas[i];
    FinPara
FinAlgoritmo</code></pre>

<h2>5. Operaciones típicas</h2>

<h3>Sumar y promediar</h3>
<pre><code>suma &lt;- 0;
Para i &lt;- 1 Hasta 5 Hacer
    suma &lt;- suma + notas[i];
FinPara
promedio &lt;- suma / 5;</code></pre>

<h3>Encontrar el mayor</h3>
<p>Idea: supón que el primero es el mayor. Compara con cada uno, y si encuentras uno más grande, actualiza.</p>
<div class="analogia">
  <strong>Analogía: el campeón</strong>
  El primer participante es el campeón por ahora. Cada nuevo participante lo reta: si es mejor, se vuelve el nuevo campeón. Al terminar, el campeón es el mayor.
</div>
<pre><code>mayor &lt;- notas[1];
Para i &lt;- 2 Hasta 5 Hacer
    Si notas[i] &gt; mayor Entonces
        mayor &lt;- notas[i];
    FinSi
FinPara
Escribir "La nota más alta es: ", mayor;</code></pre>

<div class="ejemplo">
  <strong>Prueba de escritorio con 8, 6, 9, 7, 10</strong>
  <table>
    <thead><tr><th>i</th><th>notas[i]</th><th>¿&gt; mayor?</th><th>mayor</th></tr></thead>
    <tbody>
      <tr><td>inicio</td><td>-</td><td>-</td><td>8</td></tr>
      <tr><td>2</td><td>6</td><td>No</td><td>8</td></tr>
      <tr><td>3</td><td>9</td><td>Sí</td><td>9</td></tr>
      <tr><td>4</td><td>7</td><td>No</td><td>9</td></tr>
      <tr><td>5</td><td>10</td><td>Sí</td><td>10</td></tr>
    </tbody>
  </table>
</div>

<h3>Buscar un valor</h3>
<pre><code>encontrado &lt;- Falso;
Para i &lt;- 1 Hasta 5 Hacer
    Si notas[i] = buscado Entonces
        encontrado &lt;- Verdadero;
        posicion &lt;- i;
    FinSi
FinPara
Si encontrado Entonces
    Escribir "Está en la posición ", posicion;
SiNo
    Escribir "No se encontró";
FinSi</code></pre>
<p>La variable <code>encontrado</code> se llama <strong>bandera</strong>: una variable lógica que avisa si algo ocurrió.</p>

<h3>Contar elementos que cumplen algo</h3>
<pre><code>aprobados &lt;- 0;
Para i &lt;- 1 Hasta 5 Hacer
    Si notas[i] &gt;= 7 Entonces
        aprobados &lt;- aprobados + 1;
    FinSi
FinPara</code></pre>

<h2>6. Matrices (arreglos de dos dimensiones)</h2>
<p>Una matriz es una tabla con filas y columnas. Se necesita dos índices para ubicar un valor.</p>
<div class="analogia">
  <strong>Analogía: el cine</strong>
  Para ubicar un asiento dices la fila y el número de asiento: "fila 3, asiento 5". Esos son los dos índices.
</div>
<pre><code>Definir tabla Como Entero;
Dimension tabla[3,4];     // 3 filas y 4 columnas

tabla[2,3] &lt;- 15;         // fila 2, columna 3</code></pre>
<p>Para recorrerla se usan dos ciclos, uno dentro del otro:</p>
<pre><code>Para f &lt;- 1 Hasta 3 Hacer
    Para c &lt;- 1 Hasta 4 Hacer
        Escribir tabla[f,c];
    FinPara
FinPara</code></pre>
<p>El ciclo de fuera avanza una fila y el de dentro recorre todas sus columnas, como leer un libro línea por línea.</p>

<h2>7. Cómo se ve en Java (adelanto)</h2>
<pre><code>double[] notas = new double[5];
notas[0] = 8;                    // primera posición es 0
for (int i = 0; i &lt; notas.length; i++) {
    System.out.println(notas[i]);
}</code></pre>

<h2>8. Ejercicios</h2>
<ol>
  <li>Guarda 6 números y muestra solo los pares.</li>
  <li>Encuentra el valor <strong>menor</strong> de un arreglo de 8 números.</li>
  <li>Muestra el arreglo en orden inverso (del último al primero).</li>
  <li>Pide 10 edades y cuenta cuántas son mayores de edad.</li>
  <li>Llena una matriz de 3 por 3 y suma todos sus valores.</li>
</ol>
`,
  quiz: [
    {
      p: "¿Qué es un arreglo?",
      o: ["Una variable que guarda varios valores del mismo tipo en posiciones numeradas", "Un tipo de ciclo", "Un error del programa", "Un símbolo del diagrama"],
      c: 0,
      e: "Es como una fila de casilleros numerados."
    },
    {
      p: "¿Cómo se llama el número que indica la posición de un elemento?",
      o: ["Índice", "Residuo", "Constante", "Bandera"],
      c: 0,
      e: "El índice identifica cada casillero."
    },
    {
      p: "¿En qué posición empiezan los arreglos en PSeInt y en Java respectivamente?",
      o: ["0 y 0", "1 y 0", "1 y 1", "0 y 1"],
      c: 1,
      e: "PSeInt empieza en 1 y Java en 0."
    },
    {
      p: "Para un arreglo de 5 elementos en Java, ¿cuál es el último índice válido?",
      o: ["5", "4", "6", "0"],
      c: 1,
      e: "Los índices van de 0 a 4."
    },
    {
      p: "¿Qué ciclo es el más común para recorrer un arreglo?",
      o: ["Para", "Segun", "Ninguno", "Escribir"],
      c: 0,
      e: "El Para recorre cada posición con una variable como índice."
    },
    {
      p: "Para encontrar el mayor de un arreglo, ¿cuál es un buen punto de partida?",
      o: ["Suponer que el primer elemento es el mayor", "Suponer que el mayor es 0", "Sumar todos los elementos", "Ordenar al revés"],
      c: 0,
      e: "Después se compara con cada elemento y se actualiza si hay uno mayor."
    },
    {
      p: "¿Qué es una bandera?",
      o: ["Una variable lógica que avisa si algo ocurrió", "Un tipo de ciclo", "Un comentario", "Una constante numérica"],
      c: 0,
      e: "Por ejemplo, encontrado puede ser Verdadero o Falso."
    },
    {
      p: "¿Cuántos índices se necesitan para ubicar un valor en una matriz?",
      o: ["Uno", "Dos", "Tres", "Ninguno"],
      c: 1,
      e: "Fila y columna."
    }
  ]
};
