CURSO.contenido.m02 = {
  html: `
<p>En este módulo dejas lista tu laptop con Windows. Haremos todo paso a paso. Si algo no se ve igual que aquí, no te preocupes: los instaladores cambian de aspecto con el tiempo, pero los pasos son los mismos.</p>

<div class="aviso">
  <strong>Regla de seguridad</strong>
  Descarga los programas solo desde las páginas oficiales que se indican aquí. No uses sitios de "descargas gratis" ni acepte instalar programas extra que te ofrezcan en el camino.
</div>

<div class="nota">
  <strong>Y si uso la tablet</strong>
  Puedes leer el curso y hacer los cuestionarios en la tablet. Pero PSeInt, Java y Visual Studio Code se instalan en la laptop con Windows. En la tablet puedes practicar dibujando diagramas en papel o con la página diagrams.net.
</div>

<h2>1. ¿Qué es un IDE y para qué sirve?</h2>
<p>Un <strong>IDE</strong> (Entorno de Desarrollo Integrado) es el programa donde se escribe y se prueba el código.</p>
<div class="analogia">
  <strong>Analogía: tu escritorio de trabajo</strong>
  Podrías escribir una carta en una hoja suelta, pero un escritorio con lámpara, cajones y regla hace todo más cómodo. El IDE es ese escritorio: te ayuda a escribir, te marca errores y te deja ejecutar el programa.
</div>
<p>En este curso usaremos tres herramientas:</p>
<table>
  <thead><tr><th>Herramienta</th><th>Para qué</th><th>Cuándo se usa</th></tr></thead>
  <tbody>
    <tr><td>PSeInt</td><td>Practicar lógica con pseudocódigo en español.</td><td>Módulos 4 al 11.</td></tr>
    <tr><td>Java (JDK) y Visual Studio Code</td><td>Escribir código real en Java.</td><td>Módulo 12.</td></tr>
    <tr><td>diagrams.net (Draw.io)</td><td>Dibujar diagramas de flujo.</td><td>Módulo 4 en adelante.</td></tr>
  </tbody>
</table>

<h2>2. Preparación: saber cómo es tu Windows</h2>
<ol>
  <li>Presiona la tecla <strong>Windows</strong> y escribe <code>Acerca de tu PC</code>. Abre el resultado.</li>
  <li>Busca el renglón <strong>Tipo de sistema</strong>. Normalmente dice "sistema operativo de 64 bits". Anota si es de 64 o de 32 bits.</li>
</ol>
<div class="nota">
  <strong>Por qué importa</strong>
  Algunos instaladores tienen una versión para 64 bits y otra para 32 bits. Casi todas las laptops actuales son de 64 bits.
</div>

<h2>3. Crear tu carpeta de trabajo</h2>
<p>Ordenarte desde el principio evita perder archivos.</p>
<ol>
  <li>Abre el <strong>Explorador de archivos</strong> (icono de carpeta amarilla en la barra de tareas).</li>
  <li>Entra a <strong>Documentos</strong>.</li>
  <li>Clic derecho en un espacio vacío, elige <strong>Nuevo</strong> y luego <strong>Carpeta</strong>.</li>
  <li>Ponle el nombre <code>CursoLogica</code> (sin espacios ni acentos).</li>
  <li>Dentro de ella crea dos carpetas: <code>pseint</code> y <code>java</code>.</li>
</ol>
<div class="nota">
  <strong>Por qué sin espacios ni acentos</strong>
  Algunos programas se confunden con ellos. Es una costumbre que usan los programadores.
</div>

<h2>4. Instalar PSeInt</h2>
<p>PSeInt es un programa gratuito para aprender a programar con pseudocódigo en español.</p>
<ol>
  <li>Abre tu navegador y busca <code>PSeInt descargar</code>. Entra al sitio oficial: <strong>pseint.sourceforge.net</strong>.</li>
  <li>Busca la sección de descargas y elige la versión para <strong>Windows</strong>.</li>
  <li>Espera a que termine la descarga. El archivo termina en <code>.exe</code> y se guarda en la carpeta <strong>Descargas</strong>.</li>
  <li>Haz doble clic en el archivo.</li>
  <li>Si Windows pregunta "¿Quieres permitir que esta aplicación haga cambios?", elige <strong>Sí</strong>.</li>
  <li>Elige el idioma <strong>Español</strong> y presiona <strong>Siguiente</strong> en cada pantalla, dejando las opciones que vienen marcadas.</li>
  <li>Al final presiona <strong>Instalar</strong> y luego <strong>Finalizar</strong>.</li>
</ol>

<h3>Comprobar que funciona</h3>
<ol>
  <li>Abre PSeInt desde el menú Inicio.</li>
  <li>En la ventana principal escribe este programa:</li>
</ol>
<pre><code>Algoritmo Hola
    Escribir "Hola, mundo";
FinAlgoritmo</code></pre>
<ol start="3">
  <li>Presiona el botón verde de <strong>Ejecutar</strong> (o la tecla <code>F9</code>).</li>
  <li>Debe abrirse una ventana negra que diga: <code>Hola, mundo</code>.</li>
</ol>
<p>Si viste ese mensaje, tu primer programa funcionó.</p>
<p>Guarda el archivo con <strong>Archivo</strong> y <strong>Guardar</strong>, dentro de <code>CursoLogica\\pseint</code>, con el nombre <code>hola.psc</code>.</p>

<div class="aviso">
  <strong>Si Windows muestra "Windows protegió su PC"</strong>
  Puede pasar con programas poco comunes. Si descargaste el instalador de la página oficial, presiona <strong>Más información</strong> y luego <strong>Ejecutar de todas formas</strong>. Si lo descargaste de otro sitio, no lo ejecutes.
</div>

<h3>Configuración recomendada para el curso</h3>
<ol>
  <li>En PSeInt entra al menú <strong>Configurar</strong> y luego <strong>Opciones del lenguaje (perfiles)</strong>.</li>
  <li>Elige el perfil <strong>FLEXIBLE</strong> o <strong>ESTRICTO</strong>. Para aprender conviene <strong>ESTRICTO</strong>, porque te obliga a declarar bien las variables.</li>
</ol>

<h2>5. Instalar Java (JDK)</h2>
<p>Java necesita un paquete llamado <strong>JDK</strong> (Java Development Kit). Si ya lo tienes por tu otro curso, solo revisa la versión.</p>
<h3>Revisar si ya está instalado</h3>
<ol>
  <li>Presiona la tecla <strong>Windows</strong>, escribe <code>PowerShell</code> y presiona Enter.</li>
  <li>Escribe lo siguiente y presiona Enter:</li>
</ol>
<pre><code>java -version</code></pre>
<p>Si aparece algo como <code>openjdk version "21..."</code>, ya lo tienes y puedes pasar al siguiente punto. Si dice que no se reconoce el comando, instálalo así:</p>
<ol>
  <li>Entra a <strong>adoptium.net</strong> (proyecto Eclipse Temurin).</li>
  <li>Descarga el instalador de Windows (<code>.msi</code>) de la versión <strong>LTS</strong> más reciente. LTS significa soporte a largo plazo.</li>
  <li>Abre el instalador y presiona <strong>Siguiente</strong>.</li>
  <li>En la pantalla de <em>Custom Setup</em> busca estas opciones y asegúrate de activarlas: <strong>Add to PATH</strong> y <strong>Set JAVA_HOME variable</strong>.</li>
  <li>Presiona <strong>Instalar</strong> y luego <strong>Finalizar</strong>.</li>
  <li>Cierra PowerShell, ábrelo de nuevo y repite <code>java -version</code>.</li>
</ol>
<div class="analogia">
  <strong>Analogía: la dirección de la casa</strong>
  Activar "Add to PATH" es darle a Windows la dirección de Java para que sepa dónde encontrarlo cuando lo llames desde cualquier carpeta.
</div>

<h2>6. Instalar Visual Studio Code</h2>
<ol>
  <li>Entra a <strong>code.visualstudio.com</strong>.</li>
  <li>Presiona el botón de descarga para Windows.</li>
  <li>Abre el instalador y acepta el contrato.</li>
  <li>En la pantalla de tareas adicionales marca: <strong>Agregar la acción "Abrir con Code" al menú contextual de carpetas</strong> y <strong>Agregar a PATH</strong>.</li>
  <li>Presiona <strong>Instalar</strong> y luego <strong>Finalizar</strong>.</li>
</ol>
<h3>Agregar el soporte de Java</h3>
<ol>
  <li>Abre Visual Studio Code.</li>
  <li>Presiona el icono de <strong>Extensiones</strong> en la barra lateral izquierda (cuatro cuadros) o <code>Ctrl + Shift + X</code>.</li>
  <li>Busca <code>Extension Pack for Java</code> (publicado por Microsoft) y presiona <strong>Instalar</strong>.</li>
  <li>Opcional: busca <code>Spanish Language Pack for Visual Studio Code</code> para tener el programa en español.</li>
</ol>

<h3>Probar Java con tu primer archivo</h3>
<ol>
  <li>En Visual Studio Code elige <strong>Archivo</strong>, <strong>Abrir carpeta</strong>, y selecciona <code>CursoLogica\\java</code>.</li>
  <li>Crea un archivo nuevo llamado <code>Hola.java</code>.</li>
  <li>Escribe este código:</li>
</ol>
<pre><code>public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola, mundo");
    }
}</code></pre>
<ol start="4">
  <li>Guarda con <code>Ctrl + S</code>.</li>
  <li>Presiona el botón <strong>Run</strong> (triángulo) que aparece arriba a la derecha, o encima de <code>main</code>.</li>
  <li>En la parte inferior debe aparecer <code>Hola, mundo</code>.</li>
</ol>
<p>El nombre del archivo debe coincidir exactamente con el de la clase: <code>Hola.java</code> y <code>class Hola</code>.</p>

<h2>7. Herramienta de diagramas</h2>
<p>No necesitas instalar nada: abre <strong>app.diagrams.net</strong> en tu navegador, funciona también en la tablet.</p>
<ol>
  <li>Al abrir, elige dónde guardar. La opción <strong>Dispositivo</strong> guarda en tu equipo.</li>
  <li>Elige <strong>Crear nuevo diagrama</strong> y <strong>Diagrama en blanco</strong>.</li>
  <li>En el panel izquierdo busca la sección <strong>Flowchart</strong> o escribe "flowchart" en el buscador de formas.</li>
</ol>

<h2>8. Problemas comunes</h2>
<table>
  <thead><tr><th>Problema</th><th>Posible solución</th></tr></thead>
  <tbody>
    <tr><td>PowerShell dice que <code>java</code> no se reconoce.</td><td>Cierra y vuelve a abrir PowerShell. Si sigue igual, reinstala Java y activa "Add to PATH".</td></tr>
    <tr><td>PSeInt abre pero no ejecuta.</td><td>Revisa que el programa tenga <code>Algoritmo</code> al inicio y <code>FinAlgoritmo</code> al final.</td></tr>
    <tr><td>Los acentos se ven raros.</td><td>En Visual Studio Code, abajo a la derecha, verifica que diga <code>UTF-8</code>.</td></tr>
    <tr><td>Visual Studio Code no muestra el botón Run.</td><td>Espera un minuto a que termine de cargar la extensión de Java, o revisa que la carpeta abierta sea la correcta.</td></tr>
    <tr><td>El antivirus bloquea la instalación.</td><td>Confirma que la descarga viene del sitio oficial y pide apoyo a quien administre tu equipo.</td></tr>
  </tbody>
</table>

<div class="ejemplo">
  <strong>Lista de verificación</strong>
  Antes de avanzar, confirma que: tienes la carpeta CursoLogica; PSeInt ejecutó "Hola, mundo"; <code>java -version</code> muestra una versión; y Visual Studio Code ejecutó Hola.java. Si algo falló, repite esa parte antes de continuar.
</div>
`,
  quiz: [
    {
      p: "¿Qué es un IDE?",
      o: ["Un tipo de computadora", "El programa donde se escribe y se prueba el código", "Un cable de red", "Un virus"],
      c: 1,
      e: "Es el escritorio de trabajo del programador."
    },
    {
      p: "¿Para qué usaremos PSeInt en el curso?",
      o: ["Para editar fotos", "Para practicar lógica con pseudocódigo en español", "Para navegar por internet", "Para jugar"],
      c: 1,
      e: "PSeInt permite ejecutar algoritmos escritos en español."
    },
    {
      p: "¿De dónde se deben descargar los programas?",
      o: ["De cualquier sitio de descargas gratis", "De las páginas oficiales", "De mensajes que llegan por correo", "De anuncios emergentes"],
      c: 1,
      e: "Las páginas oficiales reducen el riesgo de instalar programas dañinos."
    },
    {
      p: "¿Cómo se comprueba que Java está instalado?",
      o: ["Escribiendo java -version en PowerShell", "Reiniciando la computadora", "Abriendo PSeInt", "Mirando el fondo de pantalla"],
      c: 0,
      e: "Si el comando muestra una versión, Java está listo."
    },
    {
      p: "¿Qué opción conviene activar al instalar Java para que Windows lo encuentre desde cualquier carpeta?",
      o: ["Add to PATH", "Delete files", "Hide icon", "Run at night"],
      c: 0,
      e: "PATH es la lista de lugares donde Windows busca los programas."
    },
    {
      p: "Si el archivo se llama Hola.java, ¿cómo debe llamarse la clase dentro?",
      o: ["hola2", "Hola", "Programa", "Cualquier nombre sirve"],
      c: 1,
      e: "En Java el nombre de la clase pública debe coincidir con el del archivo."
    },
    {
      p: "¿Por qué se recomienda crear carpetas sin espacios ni acentos?",
      o: ["Porque es más bonito", "Porque algunos programas se confunden con ellos", "Porque Windows lo exige", "Porque ahorra memoria"],
      c: 1,
      e: "Es una costumbre para evitar errores con rutas de archivo."
    },
    {
      p: "¿Qué herramienta de diagramas funciona en el navegador, incluso en tablet?",
      o: ["diagrams.net (Draw.io)", "PSeInt", "El JDK", "PowerShell"],
      c: 0,
      e: "diagrams.net se usa desde el navegador sin instalar nada."
    }
  ]
};
