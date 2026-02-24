import { useState, useEffect, useCallback } from 'react';
import { tiposDeEstudios, obtenerTipoEstudio, TipoEstudio, Question, Seccion } from './data/estudios';
import { Download, FileSpreadsheet, FileText, Copy, RefreshCw, Save, ChevronDown, ChevronUp, Info, Check, X } from 'lucide-react';
import * as XLSX from 'xlsx';
import './App.css';

// Tipo para las respuestas
type Respuestas = Record<string, string>;

function App() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState<string>(tiposDeEstudios[0].id);
  const [respuestas, setRespuestas] = useState<Respuestas>({});
  const [mostrarPistas, setMostrarPistas] = useState<Record<string, boolean>>({});
  const [sidebarAbierto, setSidebarAbierto] = useState(true);
  const [mostrarModalExportar, setMostrarModalExportar] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const tipoActual = obtenerTipoEstudio(tipoSeleccionado);

  // Cargar respuestas desde localStorage al iniciar
  useEffect(() => {
    const guardadas = localStorage.getItem(`respuestas_${tipoSeleccionado}`);
    if (guardadas) {
      setRespuestas(JSON.parse(guardadas));
    } else {
      setRespuestas({});
    }
  }, [tipoSeleccionado]);

  // Guardar respuestas en localStorage cuando cambien
  useEffect(() => {
    if (Object.keys(respuestas).length > 0) {
      localStorage.setItem(`respuestas_${tipoSeleccionado}`, JSON.stringify(respuestas));
    }
  }, [respuestas, tipoSeleccionado]);

  // Manejar cambio en respuestas
  const manejarCambioRespuesta = (preguntaId: string, valor: string) => {
    setRespuestas((prev) => ({ ...prev, [preguntaId]: valor }));
  };

  // Alternar pista
  const alternarPista = (preguntaId: string) => {
    setMostrarPistas((prev) => ({ ...prev, [preguntaId]: !prev[preguntaId] }));
  };

  // Reiniciar formulario
  const reiniciarFormulario = () => {
    if (confirm('¿Estás seguro de que quieres borrar todas las respuestas?')) {
      setRespuestas({});
      localStorage.removeItem(`respuestas_${tipoSeleccionado}`);
    }
  };

  // Calcular progreso
  const calcularProgreso = () => {
    if (!tipoActual) return 0;
    const totalPreguntas = tipoActual.secciones.reduce((acc, seccion) => acc + seccion.preguntas.length, 0);
    const respondidas = Object.keys(respuestas).filter((key) => respuestas[key]?.trim()).length;
    return Math.round((respondidas / totalPreguntas) * 100);
  };

  // Exportar a Excel
  const exportarExcel = () => {
    if (!tipoActual) return;

    const datos = tipoActual.secciones.flatMap((seccion) =>
      seccion.preguntas.map((pregunta) => ({
        Sección: seccion.titulo,
        Número: pregunta.numero,
        Pregunta: pregunta.pregunta,
        Respuesta: respuestas[pregunta.id] || '',
        Pista: pregunta.pista,
      }))
    );

    const hoja = XLSX.utils.json_to_sheet(datos);

    // Ajustar ancho de columnas
    hoja['!cols'] = [
      { wch: 40 },
      { wch: 8 },
      { wch: 60 },
      { wch: 50 },
      { wch: 60 },
    ];

    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, 'Evaluación');
    XLSX.writeFile(libro, `${tipoActual.nombre.replace(/\s+/g, '_')}_evaluacion.xlsx`);
    setMostrarModalExportar(false);
  };

  // Copiar al portapapeles
  const copiarAlPortapapeles = () => {
    if (!tipoActual) return;

    let texto = `# ${tipoActual.nombre}\n\n`;

    tipoActual.secciones.forEach((seccion) => {
      texto += `## ${seccion.titulo}\n\n`;
      seccion.preguntas.forEach((pregunta) => {
        texto += `### ${pregunta.numero}. ${pregunta.pregunta}\n`;
        texto += `**Respuesta:** ${respuestas[pregunta.id] || 'Sin responder'}\n\n`;
      });
    });

    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
    setMostrarModalExportar(false);
  };

  // Generar HTML para copiar
  const generarHTML = () => {
    if (!tipoActual) return '';

    let html = `<h1>${tipoActual.nombre}</h1>`;

    tipoActual.secciones.forEach((seccion) => {
      html += `<h2>${seccion.titulo}</h2>`;
      seccion.preguntas.forEach((pregunta) => {
        html += `<p><strong>${pregunta.numero}. ${pregunta.pregunta}</strong></p>`;
        html += `<p>Respuesta: ${respuestas[pregunta.id] || 'Sin responder'}</p>`;
      });
    });

    return html;
  };

  // Copiar como HTML formateado
  const copiarHTML = () => {
    const html = generarHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const item = new ClipboardItem({ 'text/html': blob });
    navigator.clipboard.write([item]).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
    setMostrarModalExportar(false);
  };

  // Renderizar pregunta
  const renderizarPregunta = (pregunta: Question, seccionIndex: number, preguntaIndex: number) => {
    const tieneRespuesta = respuestas[pregunta.id]?.trim();
    const esSelect = pregunta.tipo === 'select';

    return (
      <div
        key={pregunta.id}
        className={`pregunta-card ${tieneRespuesta ? 'completada' : ''}`}
      >
        <div className="pregunta-header">
          <span className="pregunta-numero">{pregunta.numero}</span>
          <span className="pregunta-texto">{pregunta.pregunta}</span>
        </div>

        {pregunta.tipo === 'select' && pregunta.opciones ? (
          <div className="pregunta-opciones">
            {pregunta.opciones.map((opcion) => (
              <label key={opcion} className="opcion-label">
                <input
                  type="radio"
                  name={pregunta.id}
                  value={opcion}
                  checked={respuestas[pregunta.id] === opcion}
                  onChange={(e) => manejarCambioRespuesta(pregunta.id, e.target.value)}
                  className="opcion-radio"
                />
                <span className="opcion-texto">{opcion}</span>
              </label>
            ))}
          </div>
        ) : (
          <textarea
            className="pregunta-textarea"
            placeholder="Escribe tu respuesta aquí..."
            value={respuestas[pregunta.id] || ''}
            onChange={(e) => manejarCambioRespuesta(pregunta.id, e.target.value)}
            rows={3}
          />
        )}

        <div className="pista-toggle">
          <button
            className="pista-btn"
            onClick={() => alternarPista(pregunta.id)}
          >
            <Info size={16} />
            {mostrarPistas[pregunta.id] ? 'Ocultar pista' : 'Mostrar pista'}
          </button>
        </div>

        {mostrarPistas[pregunta.id] && (
          <div className="pista-contenido">
            <strong>Pista:</strong> {pregunta.pista}
          </div>
        )}
      </div>
    );
  };

  // Renderizar sección
  const renderizarSeccion = (seccion: Seccion) => {
    return (
      <div key={seccion.id} className="seccion-container">
        <h2 className="seccion-titulo">{seccion.titulo}</h2>
        <div className="seccion-preguntas">
          {seccion.preguntas.map((pregunta, index) =>
            renderizarPregunta(pregunta, 0, index)
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-titulo">
            <h1>Herramienta de Lectura Crítica</h1>
            <p>Evaluación de estudios científicos</p>
          </div>
          <div className="header-acciones">
            <button
              className="btn btn-secundario"
              onClick={reiniciarFormulario}
            >
              <RefreshCw size={18} />
              Reiniciar
            </button>
            <button
              className="btn btn-primario"
              onClick={() => setMostrarModalExportar(true)}
            >
              <Download size={18} />
              Exportar
            </button>
          </div>
        </div>

        {/* Progreso */}
        <div className="progreso-container">
          <div className="progreso-info">
            <span>Progreso:</span>
            <span className="progreso-porcentaje">{calcularProgreso()}%</span>
          </div>
          <div className="progreso-barra">
            <div
              className="progreso-fill"
              style={{ width: `${calcularProgreso()}%` }}
            />
          </div>
        </div>
      </header>

      <div className="app-main">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarAbierto ? 'abierto' : 'cerrado'}`}>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarAbierto(!sidebarAbierto)}
          >
            {sidebarAbierto ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {sidebarAbierto && (
            <>
              <h3 className="sidebar-titulo">Tipo de Estudio</h3>
              <nav className="sidebar-nav">
                {tiposDeEstudios.map((tipo) => (
                  <button
                    key={tipo.id}
                    className={`sidebar-item ${tipoSeleccionado === tipo.id ? 'activo' : ''}`}
                    onClick={() => setTipoSeleccionado(tipo.id)}
                  >
                    <span className="sidebar-item-nombre">{tipo.nombre}</span>
                    <span className="sidebar-item-desc">{tipo.descripcion}</span>
                  </button>
                ))}
              </nav>
            </>
          )}
        </aside>

        {/* Contenido principal */}
        <main className="contenido-principal">
          {tipoActual && (
            <>
              <div className="tipo-estudio-header">
                <h2>{tipoActual.nombre}</h2>
                <p>{tipoActual.descripcion}</p>
              </div>

              {tipoActual.secciones.map((seccion) => renderizarSeccion(seccion))}
            </>
          )}
        </main>
      </div>

      {/* Modal de exportación */}
      {mostrarModalExportar && (
        <div className="modal-overlay" onClick={() => setMostrarModalExportar(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Exportar Evaluación</h3>
              <button
                className="modal-close"
                onClick={() => setMostrarModalExportar(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-desc">
                Selecciona el formato de exportación más adecuado para tus necesidades:
              </p>

              <div className="export-opciones">
                <button className="export-opcion" onClick={exportarExcel}>
                  <FileSpreadsheet size={32} />
                  <span className="export-titulo">Excel</span>
                  <span className="export-desc">
                    Formato ideal para copiar a Word o editar datos
                  </span>
                </button>

                <button className="export-opcion" onClick={copiarHTML}>
                  <Copy size={32} />
                  <span className="export-titulo">Copiar HTML</span>
                  <span className="export-desc">
                    Copia formato enriquecido para pegar en Word
                  </span>
                </button>

                <button className="export-opcion" onClick={copiarAlPortapapeles}>
                  <FileText size={32} />
                  <span className="export-titulo">Copiar Texto</span>
                  <span className="export-desc">
                    Copia texto plano con formato Markdown
                  </span>
                </button>
              </div>

              {copiado && (
                <div className="copiado-notificacion">
                  <Check size={18} />
                  ¡Copiado al portapapeles!
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
