CURSO.contenido.m07 = {
  html: `
<p>Hasta ahora los algoritmos hacían siempre lo mismo, de arriba hacia abajo. Pero en la vida real tomamos decisiones: si llueve llevo paraguas, si no, no. Las <strong>estructuras condicionales</strong> permiten que un programa elija entre caminos.</p>

<h2>1. La estructura Si - Entonces</h2>
<div class="analogia">
  <strong>Analogía: el semáforo</strong>
  Si el semáforo está en verde, avanzas. Si está en rojo, te detienes. Revisas una condición y haces algo distinto según el resultado.
</div>

<h3>Si simple (solo hace algo cuando se cumple)</h3>
<pre><code>Si condicion Entonces
    // instrucciones si es Verdadera
FinSi</code></pre>

<div class="ejemplo">
  <strong>Ejemplo: descuento</strong>
  <pre><code>Algoritmo Descuento
    Definir compra Como Real;
    Escribir "Total de la compra:";
    Leer compra;
    Si compra &gt; 1000 Entonces
        compra &lt;- compra * 0.90;
        Escribir "Se aplicó 10% de descuento";
    FinSi
    Escribir "Total a pagar: ", compra;
FinAlgoritmo</code></pre>
  Si la compra es mayor a 1000, se aplica el descuento. Si no, ese bloque se salta.
</div>

<h2>2. Si - Entonces - SiNo</h2>
<p>Ofrece dos caminos: uno cuando la condición es verdadera y otro cuando es falsa. Siempre se ejecuta exactamente uno de los dos.</p>
<pre><code>Si condicion Entonces
    // camino si es Verdadera
SiNo
    // camino si es Falsa
FinSi</code></pre>

<div class="ejemplo">
  <strong>Ejemplo: mayor de edad</strong>
  <pre><code>Algoritmo MayorEdad
    Definir edad Como Entero;
    Escribir "¿Cuántos años tienes?";
    Leer edad;
    Si edad &gt;= 18 Entonces
        Escribir "Eres mayor de edad";
    SiNo
        Escribir "Eres menor de edad";
    FinSi
FinAlgoritmo</code></pre>
</div>

<h3>Diagrama de flujo de esa decisión</h3>
<pre><code>        ( Inicio )
            |
      / Leer edad /
            |
        &lt; edad &gt;= 18 ? &gt;
        /           \\
     Si              No
      |               |
 / "Mayor" /     / "Menor" /
       \\            /
         ( Fin )</code></pre>
<p>El rombo tiene dos salidas. Cada una sigue un camino diferente y después ambos se juntan.</p>

<h2>3. Condiciones con Y / O</h2>
<div class="ejemplo">
  <strong>Ejemplo: entrada a un juego</strong>
  Se puede subir si mide al menos 120 cm y tiene 8 años o más.
  <pre><code>Si estatura &gt;= 120 Y edad &gt;= 8 Entonces
    Escribir "Puedes subir";
SiNo
    Escribir "No puedes subir";
FinSi</code></pre>
</div>

<h2>4. Condiciones anidadas</h2>
<p>Una decisión dentro de otra. Sirve cuando hay más de dos caminos.</p>
<div class="ejemplo">
  <strong>Ejemplo: clasificar una calificación</strong>
  <pre><code>Si nota &gt;= 90 Entonces
    Escribir "Excelente";
SiNo
    Si nota &gt;= 70 Entonces
        Escribir "Aprobado";
    SiNo
        Escribir "Reprobado";
    FinSi
FinSi</code></pre>
</div>
<div class="analogia">
  <strong>Analogía: el filtro de preguntas</strong>
  Es como un cuestionario telefónico: primero preguntan si eres cliente, y solo si dices que sí te preguntan por tu número de cuenta. Cada pregunta depende de la anterior.
</div>
<div class="nota">
  <strong>El orden importa</strong>
  Si revisas primero <code>nota &gt;= 70</code>, un 95 se clasificaría como "Aprobado" y nunca llegaría a "Excelente". Siempre empieza por la condición más específica o más restrictiva.
</div>

<h2>5. Selección múltiple: Segun</h2>
<p>Cuando una variable puede tener varios valores concretos (1, 2, 3...) y cada uno hace algo distinto, es más claro usar <code>Segun</code>.</p>
<pre><code>Algoritmo DiaSemana
    Definir dia Como Entero;
    Escribir "Escribe un número del 1 al 7:";
    Leer dia;
    Segun dia Hacer
        1: Escribir "Lunes";
        2: Escribir "Martes";
        3: Escribir "Miércoles";
        4: Escribir "Jueves";
        5: Escribir "Viernes";
        6: Escribir "Sábado";
        7: Escribir "Domingo";
        De Otro Modo:
            Escribir "Número no válido";
    FinSegun
FinAlgoritmo</code></pre>
<p><code>De Otro Modo</code> se ejecuta cuando ningún valor coincide. En Java esto se llama <code>switch</code> y <code>default</code>.</p>

<h2>6. Ejemplo clásico: par o impar</h2>
<pre><code>Algoritmo ParImpar
    Definir n Como Entero;
    Escribir "Escribe un número:";
    Leer n;
    Si n MOD 2 = 0 Entonces
        Escribir "Es par";
    SiNo
        Escribir "Es impar";
    FinSi
FinAlgoritmo</code></pre>

<h2>7. Prueba de escritorio con decisiones</h2>
<p>Con <code>edad = 16</code> en el ejemplo de mayor de edad:</p>
<table>
  <thead><tr><th>Paso</th><th>Qué pasa</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Se lee edad y se guarda 16.</td></tr>
    <tr><td>2</td><td>Se evalúa 16 &gt;= 18, resulta Falso.</td></tr>
    <tr><td>3</td><td>Se salta al SiNo.</td></tr>
    <tr><td>4</td><td>Se escribe "Eres menor de edad".</td></tr>
  </tbody>
</table>
<p>Prueba siempre con valores de los dos lados de la decisión. Y con el valor justo en el límite (aquí 18).</p>

<h2>8. Ejercicios</h2>
<ol>
  <li>Pide un número y di si es positivo, negativo o cero.</li>
  <li>Pide dos números y muestra cuál es el mayor (o si son iguales).</li>
  <li>Pide la edad y di si es niño (0 a 12), adolescente (13 a 17), adulto (18 a 64) o adulto mayor (65 o más).</li>
  <li>Un año es bisiesto si es múltiplo de 4 y no de 100, o si es múltiplo de 400. Escribe la condición.</li>
  <li>Haz un menú con <code>Segun</code>: 1 suma, 2 resta, 3 multiplica.</li>
</ol>
`,
  quiz: [
    {
      p: "¿Para qué sirve una estructura condicional?",
      o: ["Para repetir instrucciones", "Para elegir entre caminos según una condición", "Para declarar variables", "Para dibujar"],
      c: 1,
      e: "Permite que el programa tome decisiones."
    },
    {
      p: "En un Si - SiNo, ¿cuántos de los dos caminos se ejecutan?",
      o: ["Los dos", "Ninguno", "Exactamente uno", "Depende del color"],
      c: 2,
      e: "Se ejecuta solo uno según el resultado de la condición."
    },
    {
      p: "¿Qué figura del diagrama de flujo representa una decisión?",
      o: ["Rombo", "Óvalo", "Rectángulo", "Círculo"],
      c: 0,
      e: "El rombo tiene dos salidas: Sí y No."
    },
    {
      p: "¿Qué hace el bloque 'De Otro Modo' en un Segun?",
      o: ["Se ejecuta cuando ningún valor coincide", "Se ejecuta siempre", "Termina el programa", "Declara una variable"],
      c: 0,
      e: "Es el caso por defecto, como default en Java."
    },
    {
      p: "En una condición anidada para clasificar notas, ¿qué conviene revisar primero?",
      o: ["La condición más restrictiva (por ejemplo, nota >= 90)", "La menos restrictiva", "Cualquiera, no importa", "La que tenga menos letras"],
      c: 0,
      e: "Si se revisa primero la más amplia, los valores altos quedan mal clasificados."
    },
    {
      p: "¿Qué condición permite saber si n es impar?",
      o: ["n MOD 2 = 1", "n MOD 2 = 0", "n / 2 = 1", "n = 2"],
      c: 0,
      e: "Un número impar deja residuo 1 al dividirse entre 2."
    },
    {
      p: "Si edad = 18 y la condición es edad > 18, ¿qué resultado da?",
      o: ["Verdadero", "Falso", "18", "Error"],
      c: 1,
      e: "18 no es mayor que 18. Por eso es importante probar los valores límite."
    },
    {
      p: "Un parque exige estatura >= 120 Y edad >= 8. Una niña mide 130 y tiene 7 años. ¿Puede subir?",
      o: ["Sí", "No", "Solo si va acompañada", "No se puede saber"],
      c: 1,
      e: "Cumple la estatura pero no la edad. Con Y deben cumplirse ambas."
    }
  ]
};
