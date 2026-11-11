CURSO.contenido.m12 = {
  html: `
<p>Llegaste al último módulo. Aquí unirás todo lo aprendido en un proyecto completo y verás cómo la misma lógica se escribe en <strong>Java</strong>, el lenguaje de tu otro curso.</p>

<h2>1. Repaso rápido de lo aprendido</h2>
<table>
  <thead><tr><th>Tema</th><th>Idea clave</th></tr></thead>
  <tbody>
    <tr><td>Computación</td><td>Entrada, proceso y salida.</td></tr>
    <tr><td>Algoritmos</td><td>Pasos ordenados, claros y finitos.</td></tr>
    <tr><td>Variables</td><td>Cajas con nombre y tipo de dato.</td></tr>
    <tr><td>Operadores</td><td>Calcular, comparar y combinar condiciones.</td></tr>
    <tr><td>Decisiones</td><td>Si / SiNo / Segun.</td></tr>
    <tr><td>Repeticiones</td><td>Para / Mientras / Repetir.</td></tr>
    <tr><td>Arreglos</td><td>Varios valores en posiciones numeradas.</td></tr>
    <tr><td>Funciones</td><td>Dividir en partes reutilizables.</td></tr>
    <tr><td>Depuración</td><td>Probar, buscar y corregir errores.</td></tr>
  </tbody>
</table>

<h2>2. Proyecto integrador: registro de calificaciones</h2>
<p><strong>Problema:</strong> Un maestro quiere capturar las calificaciones de 5 alumnos y saber el promedio del grupo, la calificación más alta, y cuántos aprobaron (7 o más).</p>

<h3>Paso 1: Entender</h3>
<ul>
  <li><strong>Entrada:</strong> 5 calificaciones entre 0 y 10.</li>
  <li><strong>Proceso:</strong> sumar, buscar la mayor, contar aprobados.</li>
  <li><strong>Salida:</strong> promedio, mayor y cantidad de aprobados.</li>
</ul>

<h3>Paso 2: Planear (en lenguaje común)</h3>
<ol>
  <li>Pedir las 5 calificaciones, validando que estén entre 0 y 10, y guardarlas en un arreglo.</li>
  <li>Recorrer el arreglo para sumar, encontrar la mayor y contar aprobados.</li>
  <li>Calcular el promedio.</li>
  <li>Mostrar resultados.</li>
</ol>

<h3>Paso 3: Pseudocódigo en PSeInt</h3>
<pre><code>Algoritmo RegistroCalificaciones
    Definir notas Como Real;
    Definir i, aprobados Como Entero;
    Definir suma, mayor, promedio Como Real;
    Dimension notas[5];

    // 1. Captura con validación
    Para i &lt;- 1 Hasta 5 Hacer
        Repetir
            Escribir "Calificación del alumno ", i, " (0 a 10):";
            Leer notas[i];
        Hasta Que notas[i] &gt;= 0 Y notas[i] &lt;= 10
    FinPara

    // 2. Procesamiento
    suma &lt;- 0;
    aprobados &lt;- 0;
    mayor &lt;- notas[1];
    Para i &lt;- 1 Hasta 5 Hacer
        suma &lt;- suma + notas[i];
        Si notas[i] &gt; mayor Entonces
            mayor &lt;- notas[i];
        FinSi
        Si notas[i] &gt;= 7 Entonces
            aprobados &lt;- aprobados + 1;
        FinSi
    FinPara
    promedio &lt;- suma / 5;

    // 3. Resultados
    Escribir "Promedio del grupo: ", promedio;
    Escribir "Calificación más alta: ", mayor;
    Escribir "Alumnos aprobados: ", aprobados;
FinAlgoritmo</code></pre>

<h3>Paso 4: Revisar con casos de prueba</h3>
<table>
  <thead><tr><th>Entrada</th><th>Promedio</th><th>Mayor</th><th>Aprobados</th></tr></thead>
  <tbody>
    <tr><td>8, 6, 9, 7, 10</td><td>8</td><td>10</td><td>4</td></tr>
    <tr><td>7, 7, 7, 7, 7</td><td>7</td><td>7</td><td>5</td></tr>
    <tr><td>0, 0, 0, 0, 0</td><td>0</td><td>0</td><td>0</td></tr>
    <tr><td>10, 10, 10, 10, 10</td><td>10</td><td>10</td><td>5</td></tr>
    <tr><td>6.9, 7, 5, 4, 8</td><td>6.18</td><td>8</td><td>2</td></tr>
  </tbody>
</table>
<p>Ejecuta tu programa con cada fila y verifica que coincida. Si algo no coincide, depúralo.</p>

<h2>3. Traducción a Java</h2>
<p>La lógica es idéntica. Solo cambia cómo se escribe. Esta tabla es tu guía:</p>
<table>
  <thead><tr><th>Concepto</th><th>PSeInt</th><th>Java</th></tr></thead>
  <tbody>
    <tr><td>Comentario</td><td><code>// texto</code></td><td><code>// texto</code></td></tr>
    <tr><td>Entero / Real / Texto / Lógico</td><td><code>Entero, Real, Caracter, Logico</code></td><td><code>int, double, String, boolean</code></td></tr>
    <tr><td>Asignar</td><td><code>x &lt;- 5;</code></td><td><code>x = 5;</code></td></tr>
    <tr><td>Comparar igualdad</td><td><code>x = 5</code></td><td><code>x == 5</code></td></tr>
    <tr><td>Distinto</td><td><code>&lt;&gt;</code></td><td><code>!=</code></td></tr>
    <tr><td>Y / O / NO</td><td><code>Y, O, NO</code></td><td><code>&amp;&amp;, ||, !</code></td></tr>
    <tr><td>Mostrar</td><td><code>Escribir x;</code></td><td><code>System.out.println(x);</code></td></tr>
    <tr><td>Leer</td><td><code>Leer x;</code></td><td><code>x = sc.nextInt();</code> con <code>Scanner</code></td></tr>
    <tr><td>Decisión</td><td><code>Si ... Entonces ... SiNo ... FinSi</code></td><td><code>if (...) { ... } else { ... }</code></td></tr>
    <tr><td>Selección</td><td><code>Segun</code></td><td><code>switch</code></td></tr>
    <tr><td>Ciclo Para</td><td><code>Para i &lt;- 1 Hasta 5</code></td><td><code>for (int i = 1; i &lt;= 5; i++)</code></td></tr>
    <tr><td>Ciclo Mientras</td><td><code>Mientras ... Hacer</code></td><td><code>while (...) { }</code></td></tr>
    <tr><td>Repetir Hasta Que</td><td><code>Repetir ... Hasta Que c</code></td><td><code>do { } while (!c);</code></td></tr>
    <tr><td>Arreglo</td><td><code>Dimension a[5]</code> (inicia en 1)</td><td><code>double[] a = new double[5];</code> (inicia en 0)</td></tr>
    <tr><td>Función</td><td><code>Funcion r &lt;- Nombre(p)</code></td><td><code>static tipo nombre(tipo p) { return ...; }</code></td></tr>
    <tr><td>Residuo</td><td><code>MOD</code></td><td><code>%</code></td></tr>
  </tbody>
</table>
<div class="aviso">
  <strong>Tres diferencias importantes</strong>
  1) En Java las instrucciones se agrupan con llaves <code>{ }</code>. 2) Los arreglos empiezan en 0. 3) Para comparar se usa <code>==</code>, y para comparar textos se usa <code>.equals()</code>.
</div>

<h3>El proyecto en Java</h3>
<p>Crea el archivo <code>RegistroCalificaciones.java</code> en Visual Studio Code, dentro de <code>CursoLogica\\java</code>:</p>
<pre><code>import java.util.Scanner;

public class RegistroCalificaciones {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[] notas = new double[5];

        // 1. Captura con validación
        for (int i = 0; i &lt; notas.length; i++) {
            do {
                System.out.print("Calificación del alumno " + (i + 1) + " (0 a 10): ");
                notas[i] = sc.nextDouble();
            } while (notas[i] &lt; 0 || notas[i] &gt; 10);
        }

        // 2. Procesamiento
        double suma = 0;
        double mayor = notas[0];
        int aprobados = 0;
        for (int i = 0; i &lt; notas.length; i++) {
            suma = suma + notas[i];
            if (notas[i] &gt; mayor) {
                mayor = notas[i];
            }
            if (notas[i] &gt;= 7) {
                aprobados++;
            }
        }
        double promedio = suma / notas.length;

        // 3. Resultados
        System.out.println("Promedio del grupo: " + promedio);
        System.out.println("Calificación más alta: " + mayor);
        System.out.println("Alumnos aprobados: " + aprobados);

        sc.close();
    }
}</code></pre>
<p>Compara línea por línea con el pseudocódigo. Verás que cada bloque tiene su equivalente directo.</p>
<div class="nota">
  <strong>Por qué en Java la validación usa || y no Y</strong>
  En PSeInt el <code>Repetir</code> termina <em>hasta que</em> la nota sea válida. En Java el <code>do-while</code> repite <em>mientras</em> sea inválida. La condición es la contraria: no (entre 0 y 10) equivale a (menor que 0 <strong>o</strong> mayor que 10).
</div>

<h2>4. Más proyectos para practicar</h2>
<ol>
  <li><strong>Cajero automático:</strong> menú con consultar saldo, depositar y retirar, con validación de saldo.</li>
  <li><strong>Adivina el número:</strong> la computadora elige un número del 1 al 100 y el usuario intenta adivinar con pistas de mayor o menor.</li>
  <li><strong>Tienda:</strong> arreglos de productos y precios, y un total con descuento.</li>
  <li><strong>Números primos:</strong> mostrar los primos del 1 al 100.</li>
  <li><strong>Calculadora con menú:</strong> usando funciones para cada operación.</li>
</ol>

<h2>5. Cómo seguir mejorando</h2>
<ul>
  <li>Practica un poco todos los días. La lógica se entrena como un músculo.</li>
  <li>Resuelve primero en papel y después en la computadora.</li>
  <li>Vuelve a hacer ejercicios viejos de otra forma.</li>
  <li>Explica tus soluciones a otras personas.</li>
  <li>Repasa tu curso de Java con los ojos nuevos: ahora entenderás el porqué de cada instrucción.</li>
</ul>

<div class="ejemplo">
  <strong>Siguiente paso</strong>
  Aprueba el cuestionario de este módulo y presenta el examen final. Este se desbloquea cuando hayas aprobado todos los módulos anteriores.
</div>
`,
  quiz: [
    {
      p: "En el proyecto integrador, ¿qué estructura se usa para guardar las 5 calificaciones?",
      o: ["Un arreglo", "Una constante", "Una función sin parámetros", "Un comentario"],
      c: 0,
      e: "Un arreglo guarda varios valores del mismo tipo."
    },
    {
      p: "¿Cuál es el operador de igualdad al comparar en Java?",
      o: ["=", "==", "<-", "=>"],
      c: 1,
      e: "En Java = asigna y == compara."
    },
    {
      p: "¿Qué equivale a 'Repetir ... Hasta Que condicion' en Java?",
      o: ["do { } while (!condicion);", "for", "switch", "if"],
      c: 0,
      e: "El do-while repite mientras la condición sea verdadera, por eso se niega."
    },
    {
      p: "¿En qué posición empieza un arreglo en Java?",
      o: ["0", "1", "-1", "Depende del tipo"],
      c: 0,
      e: "Siempre en 0."
    },
    {
      p: "¿Cómo se escribe 'Y' (and) en Java?",
      o: ["&&", "||", "!", "AND"],
      c: 0,
      e: "&& es el Y lógico, || es el O y ! es el NO."
    },
    {
      p: "¿Qué instrucción de Java equivale a Escribir en PSeInt?",
      o: ["System.out.println()", "Scanner", "return", "while"],
      c: 0,
      e: "Imprime un valor en pantalla."
    },
    {
      p: "El promedio del arreglo 8, 6, 9, 7, 10 es:",
      o: ["7", "8", "9", "40"],
      c: 1,
      e: "La suma es 40 y 40 / 5 = 8."
    },
    {
      p: "Antes de programar, ¿cuál es el primer paso recomendado?",
      o: ["Escribir código rápido", "Entender el problema y planear la solución", "Instalar otro lenguaje", "Copiar una solución"],
      c: 1,
      e: "Entender y planear evita retrabajo."
    }
  ]
};
