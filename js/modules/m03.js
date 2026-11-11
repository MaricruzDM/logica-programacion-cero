CURSO.contenido.m03 = {
  html: `
<p>Ahora empieza lo más importante: aprender a pensar en problemas. Aún no usaremos programas, solo la cabeza y un cuaderno.</p>

<h2>1. ¿Qué es un problema?</h2>
<p>En programación, un <strong>problema</strong> es una situación en la que tenemos unos datos y queremos llegar a un resultado.</p>
<div class="ejemplo">
  <strong>Ejemplo</strong>
  "Tengo el precio de un producto y el dinero que me dieron. Quiero saber cuánto cambio devolver." Datos: precio y dinero recibido. Resultado: el cambio.
</div>

<h2>2. Cómo analizar un problema</h2>
<p>Antes de resolver, responde estas cuatro preguntas:</p>
<ol>
  <li><strong>¿Qué me piden?</strong> (el resultado)</li>
  <li><strong>¿Qué datos tengo?</strong> (la entrada)</li>
  <li><strong>¿Qué debo hacer con esos datos?</strong> (el proceso)</li>
  <li><strong>¿Cómo sé que terminé?</strong> (la condición de fin)</li>
</ol>
<div class="ejemplo">
  <strong>Ejemplo: calcular el área de un rectángulo</strong>
  <ul>
    <li>Me piden: el área.</li>
    <li>Datos: la base y la altura.</li>
    <li>Proceso: multiplicar base por altura.</li>
    <li>Termino: cuando muestro el resultado.</li>
  </ul>
</div>

<h2>3. Dividir un problema grande</h2>
<p>Un problema grande asusta. La solución es partirlo en problemas pequeños, hasta que cada parte sea fácil.</p>
<div class="analogia">
  <strong>Analogía: preparar una comida para visitas</strong>
  "Hacer la comida" parece enorme. Pero se divide en: comprar ingredientes, preparar la sopa, preparar el plato fuerte, poner la mesa. Cada parte se vuelve manejable.
</div>

<h2>4. ¿Qué es un algoritmo?</h2>
<p>Un <strong>algoritmo</strong> es una serie de pasos ordenados, claros y finitos que resuelve un problema.</p>
<div class="analogia">
  <strong>Analogía: la receta</strong>
  Una receta es un algoritmo: tiene ingredientes (entrada), pasos (proceso) y un platillo (salida). Si sigues los pasos en orden, siempre obtienes el mismo resultado.
</div>

<h2>5. Características de un buen algoritmo</h2>
<table>
  <thead><tr><th>Característica</th><th>Significa</th><th>Mal ejemplo</th></tr></thead>
  <tbody>
    <tr><td>Preciso</td><td>Cada paso dice exactamente qué hacer.</td><td>"Agrega un poco de sal."</td></tr>
    <tr><td>Ordenado</td><td>Los pasos van en secuencia correcta.</td><td>Meter el pastel al horno antes de hacer la mezcla.</td></tr>
    <tr><td>Finito</td><td>Termina en algún momento.</td><td>"Camina hacia adelante hasta que te canses" sin límite claro.</td></tr>
    <tr><td>Definido</td><td>Con los mismos datos, siempre da el mismo resultado.</td><td>"Elige un número cualquiera."</td></tr>
  </tbody>
</table>

<h2>6. Ejemplo completo: preparar un té</h2>
<p><strong>Versión mala (muy general):</strong></p>
<ol>
  <li>Prepara el té.</li>
</ol>
<p><strong>Versión buena:</strong></p>
<ol>
  <li>Inicio.</li>
  <li>Llenar la tetera con agua.</li>
  <li>Poner la tetera en la estufa y encender el fuego.</li>
  <li>Esperar a que el agua hierva.</li>
  <li>Apagar el fuego.</li>
  <li>Poner una bolsa de té en una taza.</li>
  <li>Verter el agua caliente en la taza.</li>
  <li>Esperar 3 minutos.</li>
  <li>Retirar la bolsa de té.</li>
  <li>Fin.</li>
</ol>
<div class="nota">
  <strong>Observa</strong>
  Todo algoritmo tiene un inicio y un fin. Cada paso es una sola acción pequeña. Y el orden importa: si apagas el fuego antes de hervir el agua, el té sale mal.
</div>

<h2>7. Ejemplo con decisiones: retirar dinero de un cajero</h2>
<ol>
  <li>Inicio.</li>
  <li>Insertar la tarjeta.</li>
  <li>Escribir el NIP.</li>
  <li>Si el NIP es incorrecto: mostrar un mensaje y volver al paso 3.</li>
  <li>Escribir la cantidad a retirar.</li>
  <li>Si la cantidad es mayor al saldo: mostrar "Saldo insuficiente" e ir al fin.</li>
  <li>Entregar el dinero.</li>
  <li>Devolver la tarjeta.</li>
  <li>Fin.</li>
</ol>
<p>Aparecen dos ideas que veremos a fondo más adelante: <strong>decisiones</strong> ("Si...") y <strong>repeticiones</strong> ("volver al paso 3").</p>

<h2>8. El enemigo de los algoritmos: la ambigüedad</h2>
<p>Una instrucción es ambigua si se puede entender de más de una forma.</p>
<div class="ejemplo">
  <strong>Ejemplo: hacer un sándwich</strong>
  "Pon el jamón en el pan." ¿Pan entero? ¿Pan ya cortado? ¿Con mantequilla? Una persona lo interpreta con sentido común, pero una computadora no. En programación debemos decir cada detalle.
</div>
<p>Un buen truco: pídele a otra persona que siga tu algoritmo al pie de la letra. Donde se equivoque o se detenga, hay un paso ambiguo.</p>

<h2>9. Ejercicios para hacer en tu cuaderno</h2>
<ol>
  <li>Escribe el algoritmo para cambiar una llanta ponchada.</li>
  <li>Escribe el algoritmo para calcular el promedio de tres calificaciones.</li>
  <li>Describe el algoritmo para decidir si una persona puede entrar a una película con clasificación para mayores de 18 años.</li>
</ol>
`,
  quiz: [
    {
      p: "¿Qué es un algoritmo?",
      o: ["Una computadora muy rápida", "Una serie de pasos ordenados, claros y finitos que resuelve un problema", "Un lenguaje de programación", "Un tipo de error"],
      c: 1,
      e: "Un algoritmo es la receta que resuelve el problema."
    },
    {
      p: "¿Cuál de estas NO es una pregunta clave para analizar un problema?",
      o: ["¿Qué me piden?", "¿Qué datos tengo?", "¿De qué color es la computadora?", "¿Cómo sé que terminé?"],
      c: 2,
      e: "El color no influye en la solución. Las otras ayudan a entender el problema."
    },
    {
      p: "¿Qué significa que un algoritmo sea finito?",
      o: ["Que tiene muchos pasos", "Que termina en algún momento", "Que solo sirve una vez", "Que no usa números"],
      c: 1,
      e: "Un algoritmo que nunca termina no resuelve el problema."
    },
    {
      p: "¿Cuál de estos pasos es ambiguo?",
      o: ["Agregar 2 cucharadas de azúcar", "Agregar un poco de azúcar", "Mezclar durante 30 segundos", "Apagar la estufa"],
      c: 1,
      e: "'Un poco' no dice cuánto exactamente."
    },
    {
      p: "¿Para qué sirve dividir un problema grande en partes pequeñas?",
      o: ["Para que sea más fácil de resolver", "Para hacerlo más largo", "Para no resolverlo", "Para que se vea más bonito"],
      c: 0,
      e: "Las partes pequeñas son más sencillas y se resuelven una por una."
    },
    {
      p: "En el problema 'calcular el área de un rectángulo', ¿cuáles son los datos de entrada?",
      o: ["El área", "La base y la altura", "La multiplicación", "El resultado en pantalla"],
      c: 1,
      e: "El área es el resultado; la base y la altura son las entradas."
    },
    {
      p: "Si un algoritmo con los mismos datos da resultados distintos cada vez, ¿qué característica le falta?",
      o: ["Ser definido", "Tener un inicio", "Estar en español", "Tener números"],
      c: 0,
      e: "Un algoritmo definido siempre produce el mismo resultado con los mismos datos."
    },
    {
      p: "¿Por qué importa el orden de los pasos?",
      o: ["Porque cambiar el orden puede dar un resultado incorrecto", "Porque así se ve más ordenado", "No importa el orden", "Porque lo exige Windows"],
      c: 0,
      e: "Como en una receta, el orden cambia el resultado."
    }
  ]
};
