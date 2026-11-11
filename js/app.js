(function () {
  "use strict";

  var CLAVE = "curso-logica-v1";
  var LETRAS = ["A", "B", "C", "D", "E"];
  var $contenido = document.getElementById("contenido");
  var $lista = document.getElementById("lista-menu");
  var $btnMenu = document.getElementById("btn-menu");
  var $velo = document.getElementById("velo");

  /* ---------- Progreso guardado en el navegador ---------- */
  function leer() {
    try { return JSON.parse(localStorage.getItem(CLAVE)) || { modulos: {}, examen: null }; }
    catch (e) { return { modulos: {}, examen: null }; }
  }
  function guardar(p) {
    try { localStorage.setItem(CLAVE, JSON.stringify(p)); } catch (e) { /* modo privado */ }
  }
  var progreso = leer();

  function completados() {
    return CURSO.lista.filter(function (m) { return progreso.modulos[m.id] >= CURSO.aprobado; }).length;
  }
  function examenDisponible() { return completados() === CURSO.lista.length; }
  function moduloListo(id) { return !!CURSO.contenido[id]; }

  /* ---------- Menú ---------- */
  function construirMenu(rutaActual) {
    $lista.innerHTML = "";
    var items = [{ ruta: "inicio", titulo: "Inicio", estado: "" }];
    CURSO.lista.forEach(function (m) {
      var nota = progreso.modulos[m.id];
      var estado = nota >= CURSO.aprobado ? "Listo" : (moduloListo(m.id) ? "" : "Pronto");
      items.push({ ruta: m.id, titulo: m.titulo, estado: estado });
    });
    items.push({
      ruta: "examen", titulo: "Examen final",
      estado: progreso.examen >= CURSO.aprobado ? "Listo" : (examenDisponible() ? "" : "Bloqueado")
    });
    items.forEach(function (it) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#/" + it.ruta;
      var t = document.createElement("span");
      t.textContent = it.titulo;
      var e = document.createElement("span");
      e.className = "estado";
      e.textContent = it.estado;
      a.appendChild(t); a.appendChild(e);
      if (it.estado === "Pronto" || it.estado === "Bloqueado") a.className = "bloqueado";
      if (it.ruta === rutaActual) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      $lista.appendChild(li);
    });
    var total = CURSO.lista.length;
    var hechos = completados();
    document.getElementById("barra-progreso").style.width = Math.round(hechos / total * 100) + "%";
    document.getElementById("progreso-texto").textContent = hechos + " de " + total + " módulos";
  }

  function abrirMenu(abrir) {
    document.body.classList.toggle("menu-abierto", abrir);
    $btnMenu.setAttribute("aria-expanded", String(abrir));
    $velo.hidden = !abrir || window.innerWidth >= 960;
  }
  $btnMenu.addEventListener("click", function () {
    abrirMenu(!document.body.classList.contains("menu-abierto"));
  });
  $velo.addEventListener("click", function () { abrirMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") abrirMenu(false); });

  /* ---------- Tema claro / oscuro ---------- */
  function aplicarTema(t) {
    document.documentElement.setAttribute("data-tema", t);
    try { localStorage.setItem(CLAVE + "-tema", t); } catch (e) {}
  }
  var temaGuardado = null;
  try { temaGuardado = localStorage.getItem(CLAVE + "-tema"); } catch (e) {}
  aplicarTema(temaGuardado || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro"));
  document.getElementById("btn-tema").addEventListener("click", function () {
    aplicarTema(document.documentElement.getAttribute("data-tema") === "oscuro" ? "claro" : "oscuro");
  });

  /* ---------- Cuestionarios ---------- */
  function mezclar(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // preguntas: [{p, o:[...], c:indiceCorrecto, e:"explicación"}]
  function crearQuiz(preguntas, idBase, alTerminar) {
    var cont = document.createElement("section");
    cont.className = "quiz";
    var form = document.createElement("form");
    form.noValidate = true;

    preguntas.forEach(function (q, i) {
      var fs = document.createElement("fieldset");
      fs.className = "pregunta";
      var lg = document.createElement("legend");
      lg.textContent = (i + 1) + ". " + q.p;
      fs.appendChild(lg);
      q.o.forEach(function (texto, k) {
        var lb = document.createElement("label");
        lb.className = "opcion";
        var inp = document.createElement("input");
        inp.type = "radio";
        inp.name = idBase + "-" + i;
        inp.value = String(k);
        var sp = document.createElement("span");
        sp.textContent = LETRAS[k] + ") " + texto;
        lb.appendChild(inp); lb.appendChild(sp);
        fs.appendChild(lb);
      });
      var retro = document.createElement("div");
      retro.className = "retro";
      retro.setAttribute("aria-live", "polite");
      fs.appendChild(retro);
      form.appendChild(fs);
    });

    var acciones = document.createElement("div");
    acciones.className = "acciones";
    var enviar = document.createElement("button");
    enviar.type = "submit"; enviar.className = "btn"; enviar.textContent = "Revisar respuestas";
    var reiniciar = document.createElement("button");
    reiniciar.type = "button"; reiniciar.className = "btn sec"; reiniciar.textContent = "Intentar de nuevo";
    reiniciar.hidden = true;
    acciones.appendChild(enviar); acciones.appendChild(reiniciar);
    form.appendChild(acciones);

    var res = document.createElement("div");
    res.setAttribute("aria-live", "polite");
    form.appendChild(res);
    cont.appendChild(form);

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var fieldsets = form.querySelectorAll(".pregunta");
      var sinResponder = 0, buenas = 0;
      preguntas.forEach(function (q, i) {
        var sel = form.querySelector("input[name='" + idBase + "-" + i + "']:checked");
        if (!sel) sinResponder++;
      });
      if (sinResponder > 0) {
        res.innerHTML = "";
        var aviso = document.createElement("div");
        aviso.className = "resultado mal";
        aviso.textContent = "Te faltan " + sinResponder + " pregunta(s) por responder.";
        res.appendChild(aviso);
        return;
      }
      preguntas.forEach(function (q, i) {
        var fs = fieldsets[i];
        var sel = form.querySelector("input[name='" + idBase + "-" + i + "']:checked");
        var elegida = parseInt(sel.value, 10);
        var opciones = fs.querySelectorAll(".opcion");
        opciones.forEach(function (o) { o.classList.remove("correcta", "incorrecta"); });
        opciones[q.c].classList.add("correcta");
        var retro = fs.querySelector(".retro");
        if (elegida === q.c) {
          buenas++;
          retro.textContent = "Correcto. " + (q.e || "");
        } else {
          opciones[elegida].classList.add("incorrecta");
          retro.textContent = "Respuesta correcta: " + LETRAS[q.c] + ". " + (q.e || "");
        }
        fs.querySelectorAll("input").forEach(function (x) { x.disabled = true; });
      });
      var pct = Math.round(buenas / preguntas.length * 100);
      var ok = pct >= CURSO.aprobado;
      res.innerHTML = "";
      var r = document.createElement("div");
      r.className = "resultado " + (ok ? "ok" : "mal");
      r.textContent = "Resultado: " + buenas + " de " + preguntas.length + " (" + pct + "%). " +
        (ok ? "Aprobado." : "Necesitas " + CURSO.aprobado + "% para aprobar. Repasa y vuelve a intentar.");
      res.appendChild(r);
      enviar.disabled = true;
      reiniciar.hidden = false;
      alTerminar(pct);
    });

    reiniciar.addEventListener("click", function () { alTerminar(null, true); });
    return cont;
  }

  /* ---------- Vistas ---------- */
  function limpiar() { $contenido.innerHTML = ""; }

  function vistaInicio() {
    limpiar();
    var h = document.createElement("div");
    h.innerHTML =
      "<h1>Lógica de Programación desde Cero</h1>" +
      "<p>Un curso para aprender a pensar como programador, sin necesidad de experiencia previa. " +
      "Cada tema tiene explicaciones simples, analogías y un cuestionario al final. " +
      "Al terminar todos los módulos podrás presentar el examen final.</p>" +
      "<div class='nota'><strong>Cómo avanzar</strong>Abre el menú, elige un módulo y sigue el orden. " +
      "Necesitas " + CURSO.aprobado + "% en cada cuestionario para marcarlo como terminado. " +
      "Tu avance se guarda en este navegador.</div>";
    var acc = document.createElement("div");
    acc.className = "acciones";
    var a = document.createElement("a");
    a.className = "btn"; a.href = "#/m00"; a.textContent = "Comenzar el curso";
    acc.appendChild(a);
    h.appendChild(acc);
    $contenido.appendChild(h);
  }

  function navegacion(id) {
    var idx = CURSO.lista.findIndex(function (m) { return m.id === id; });
    var acc = document.createElement("div");
    acc.className = "acciones";
    if (idx > 0) {
      var p = document.createElement("a");
      p.className = "btn sec"; p.href = "#/" + CURSO.lista[idx - 1].id; p.textContent = "Anterior";
      acc.appendChild(p);
    }
    var sig = document.createElement("a");
    sig.className = "btn";
    if (idx < CURSO.lista.length - 1) {
      sig.href = "#/" + CURSO.lista[idx + 1].id; sig.textContent = "Siguiente módulo";
    } else {
      sig.href = "#/examen"; sig.textContent = "Ir al examen final";
    }
    acc.appendChild(sig);
    return acc;
  }

  function vistaModulo(id) {
    limpiar();
    var meta = CURSO.lista.find(function (m) { return m.id === id; });
    var mod = CURSO.contenido[id];
    if (!mod) {
      $contenido.innerHTML = "<h1>" + meta.titulo + "</h1><div class='aviso'><strong>Próximamente</strong>Este módulo todavía se está preparando.</div>";
      $contenido.appendChild(navegacion(id));
      return;
    }
    var art = document.createElement("article");
    art.innerHTML = "<h1>" + meta.titulo + "</h1>" + mod.html;
    $contenido.appendChild(art);

    var titulo = document.createElement("h2");
    titulo.textContent = "Cuestionario del módulo";
    $contenido.appendChild(titulo);
    var previo = progreso.modulos[id];
    if (previo != null) {
      var pn = document.createElement("p");
      pn.textContent = "Tu mejor resultado: " + previo + "%.";
      $contenido.appendChild(pn);
    }
    var holder = document.createElement("div");
    $contenido.appendChild(holder);

    function montar() {
      holder.innerHTML = "";
      holder.appendChild(crearQuiz(mezclarPreguntas(mod.quiz), id, function (pct, reintento) {
        if (reintento) { montar(); return; }
        if (pct > (progreso.modulos[id] || 0)) progreso.modulos[id] = pct;
        guardar(progreso);
        construirMenu(id);
      }));
    }
    montar();
    $contenido.appendChild(navegacion(id));
  }

  // Mezcla el orden de las opciones manteniendo la respuesta correcta
  function mezclarPreguntas(qs) {
    return qs.map(function (q) {
      var orden = mezclar(q.o.map(function (_, i) { return i; }));
      return { p: q.p, e: q.e, o: orden.map(function (i) { return q.o[i]; }), c: orden.indexOf(q.c) };
    });
  }

  function vistaExamen() {
    limpiar();
    var h1 = document.createElement("h1");
    h1.textContent = "Examen final";
    $contenido.appendChild(h1);
    if (!examenDisponible()) {
      var av = document.createElement("div");
      av.className = "aviso";
      av.innerHTML = "<strong>Todavía no disponible</strong>Aprueba los cuestionarios de todos los módulos para desbloquearlo. Llevas " +
        completados() + " de " + CURSO.lista.length + ".";
      $contenido.appendChild(av);
      return;
    }
    var pool = [];
    CURSO.lista.forEach(function (m) {
      var mod = CURSO.contenido[m.id];
      if (mod) pool = pool.concat(mod.examen && mod.examen.length ? mod.examen : mod.quiz);
    });
    var intro = document.createElement("p");
    intro.textContent = "Preguntas de todo el curso. Necesitas " + CURSO.aprobado + "% para aprobar. Puedes repetirlo las veces que quieras.";
    $contenido.appendChild(intro);
    if (progreso.examen != null) {
      var pn = document.createElement("p");
      pn.textContent = "Tu mejor resultado: " + progreso.examen + "%.";
      $contenido.appendChild(pn);
    }
    var holder = document.createElement("div");
    $contenido.appendChild(holder);
    function montar() {
      holder.innerHTML = "";
      var elegidas = mezclarPreguntas(mezclar(pool).slice(0, 25));
      holder.appendChild(crearQuiz(elegidas, "examen", function (pct, reintento) {
        if (reintento) { montar(); window.scrollTo(0, 0); return; }
        if (pct > (progreso.examen || 0)) progreso.examen = pct;
        guardar(progreso);
        construirMenu("examen");
      }));
    }
    montar();
  }

  /* ---------- Rutas ---------- */
  function ruta() {
    var r = (location.hash.replace(/^#\/?/, "") || "inicio");
    var valida = r === "inicio" || r === "examen" || CURSO.lista.some(function (m) { return m.id === r; });
    if (!valida) r = "inicio";
    if (r === "inicio") vistaInicio();
    else if (r === "examen") vistaExamen();
    else vistaModulo(r);
    construirMenu(r);
    document.title = (r === "inicio" ? "" : (r === "examen" ? "Examen final" : CURSO.lista.find(function (m) { return m.id === r; }).titulo) + " | ") + "Lógica de Programación";
    window.scrollTo(0, 0);
    if (window.innerWidth < 960) abrirMenu(false);
    $contenido.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", ruta);

  abrirMenu(window.innerWidth >= 960);
  ruta();
})();
