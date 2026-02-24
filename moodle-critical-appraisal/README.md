# Herramienta de Lectura Crítica

Aplicación web para evaluar estudios científicos, diseñada para integrarse en Moodle.

## Características

- **8 tipos de estudios**: Evaluación Económica, Cohortes, Casos y Controles, Cualitativo, RPC, Diagnóstico, Revisión Sistemática, Ensayo Clínico
- **Preguntas organizadas** en secciones: Validez, Resultados, Aplicabilidad
- **Espacio para escribir** en cada pregunta
- **Pistas** desplegables para cada pregunta
- **Exportación**: Excel, HTML (para Word), Texto
- **Diseño responsivo** (funciona en móvil y tablet)
- **Auto-guardado** en el navegador

## Instalación en GitHub Pages

### Pasos para subir a GitHub:

1. **Crea un nuevo repositorio** en GitHub:
   - Ve a https://github.com/new
   - Nombre: `lectura-critica-app`
   - Puedes dejarlo público o privado

2. **Sube los archivos** del proyecto:
   - Ve a la carpeta `/workspace/moodle-critical-appraisal`
   - Sube TODO el contenido al repositorio (incluyendo archivos ocultos como .gitignore)

3. **Activa GitHub Pages**:
   - Ve a **Settings** → **Pages** (en tu repositorio)
   - En "Build and deployment", bajo "Source", selecciona **Deploy from a branch**
   - En "Branch", selecciona `main` y `/ (root)`
   - Click en **Save**
   - Espera 1-2 minutos

4. **Tu app estará disponible en**:
   ```
   https://Francg10.github.io/lectura-critica-app/
   ```

### Estructura de archivos necesarios:

Asegúrate de subir estos archivos y carpetas:
- `dist/` (carpeta con los archivos compilados)
- `src/` (código fuente)
- `index.html`
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- Otros archivos de configuración

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Integración en Moodle

### Opción 1 - URL externa (recomendado):
1. Crea un recurso "URL" en Moodle
2. Pon la URL: `https://Francg10.github.io/lectura-critica-app/`

### Opción 2 - iFrame:
1. Inserta un bloque HTML en tu curso
2. Usa este código:
```html
<iframe src="https://Francg10.github.io/lectura-critica-app/"
        width="100%"
        height="800"
        style="border:none;"></iframe>
```

### Opción 3 - LTI (avanzado):
Configura como herramienta externa LTI si necesitas integración profunda con calificaciones.

## Uso de la aplicación

1. Selecciona el **tipo de estudio** del menú lateral
2. Lee cada pregunta y escribe tu evaluación en el área de texto
3. Usa el botón **"Mostrar pista"** si necesitas orientación
4. Las preguntas con respuesta se marcan en verde
5. Click en **"Exportar"** para descargar o copiar:
   - **Excel**: Descarga archivo .xlsx
   - **Copiar HTML**: Pega directamente en Word con formato
   - **Copiar Texto**: Formato Markdown

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- XLSX (para exportación Excel)
- Lucide Icons

---

Creado para evaluación de lectura crítica en ciencias de la salud.
