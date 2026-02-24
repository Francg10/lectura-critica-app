// Tipos de estudios y sus preguntas
// Basado en las plantillas PDF proporcionadas

export interface Question {
  id: string;
  numero: string;
  pregunta: string;
  pista: string;
  tipo?: 'select' | 'textarea';
  opciones?: string[];
}

export interface Seccion {
  id: string;
  titulo: string;
  preguntas: Question[];
}

export interface TipoEstudio {
  id: string;
  nombre: string;
  descripcion: string;
  secciones: Seccion[];
}

// Plantilla de Evaluación Económica
export const evaluacionEconomica: TipoEstudio = {
  id: 'evaluacion-economica',
  nombre: 'Evaluación Económica',
  descripcion: '11 preguntas para entender una evaluación económica',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Son válidos los resultados?',
      preguntas: [
        {
          id: 'ee-1',
          numero: '1',
          pregunta: '¿Está bien definida la pregunta u objetivo de la evaluación?',
          pista: 'La pregunta debe aclarar:Cuál es la perspectiva del análisisSi es una evaluación económica completa (compara costes y efectos) o incompletaSi se evalúa una sola opción o se comparan varias alternativasCuál es el horizonte temporal',
        },
        {
          id: 'ee-2',
          numero: '2',
          pregunta: '¿Existe una descripción suficiente de todas las alternativas posibles y sus consecuencias?',
          pista: '¿Se define bien el árbol de decisión (o equivalente) de las actuaciones a seguir?¿Se describe la intervención o intervenciones, quién hará, a quién se aplica, dónde y con qué frecuencia?',
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados?',
      preguntas: [
        {
          id: 'ee-3',
          numero: '3',
          pregunta: '¿Existen pruebas de la efectividad, de la intervención o del programa evaluado?',
          pista: 'La efectividad puede probarse a partir de ensayos clínicos, a partir de investigación de síntesis (revisiones sistemáticas) o a partir de otros tipos de estudios. Frecuentemente, las evaluaciones económicas han de integrar diversos tipos de conocimiento a partir de distintos tipos de estudios.',
        },
        {
          id: 'ee-4',
          numero: '4',
          pregunta: '¿Los efectos de la intervención (o intervenciones) se identifican, se miden y se valoran o consideran adecuadamente?',
          pista: 'Los efectos pueden ser simples (control adecuado de la TA) o alternativamente puede utilizarse lo que se denomina el "constructo efecto", que consiste en agrupar varias medidas del efecto en una sola. Los efectos se miden en unidades naturales (años de vida), unidades más complejas (QALYs) o traslaciones de estas a unidades económicas.',
        },
        {
          id: 'ee-5',
          numero: '5',
          pregunta: '¿Los costes en que se incurre por la intervención (intervenciones) se identifican, se miden y se valoran adecuadamente?',
          pista: 'Habitualmente deben identificarse los recursos necesarios (drogas, enfermeras, etc.), medirlos en unidades adecuadas y calcular el precio de estas unidades. Los costes se definen de diferentes modos (directos médicos o no, indirectos, intangibles).',
        },
        {
          id: 'ee-6',
          numero: '6',
          pregunta: '¿Se aplican tasas de descuento a los costes de la intervención/es? ¿Y a los efectos?',
          pista: 'Las tasas de descuento se utilizan para valorar los costes y efectos futuros en términos presentes.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ee-7',
          numero: '7',
          pregunta: '¿Cuáles son los resultados de la evaluación?',
          pista: 'Qué unidades usan (coste año vida, coste QALY, beneficio neto). Los resultados idealmente deben ser consecuencia de un análisis incremental.',
        },
        {
          id: 'ee-8',
          numero: '8',
          pregunta: '¿Se realizó un análisis adecuado de sensibilidad?',
          pista: 'Es decir, cuánto cambiaría el resultado si en un modelo cambiamos variables relacionadas con los costes o con la efectividad o con otras circunstancias de uso.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Ayudarán los resultados a la compra o implantación de servicios?',
      preguntas: [
        {
          id: 'ee-9',
          numero: '9',
          pregunta: '¿Sería el programa igualmente efectivo en tu medio?',
          pista: 'Considera si la perspectiva utilizada es la adecuada y aplicable a tu contexto.',
        },
        {
          id: 'ee-10',
          numero: '10',
          pregunta: '¿Serían los costes trasladables a tu medio?',
          pista: 'Considera las diferencias en costos entre contextos.',
        },
        {
          id: 'ee-11',
          numero: '11',
          pregunta: '¿Vale la pena aplicarlos a tu medio?',
          pista: 'Evalúa si los beneficios justifican los costos en tu contexto específico.',
        },
      ],
    },
  ],
};

// Cohortes
export const cohortes: TipoEstudio = {
  id: 'cohortes',
  nombre: 'Cohortes',
  descripcion: '11 preguntas para entender un estudio de cohortes',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Son los resultados del estudio válidos?',
      preguntas: [
        {
          id: 'coh-1',
          numero: '1',
          pregunta: '¿El estudio se centra en un tema claramente definido?',
          pista: 'Una pregunta se puede definir en términos de:La población estudiadaLos factores de riesgo estudiadosLos resultados outcomes consideradosEl estudio intentó detectar un efecto beneficioso o perjudicial',
        },
        {
          id: 'coh-2',
          numero: '2',
          pregunta: '¿La cohorte se reclutó de la manera más adecuada?',
          pista: 'Se trata de buscar posibles sesgos de selección que puedan comprometer que los hallazgos se puedan generalizar. ¿La cohorte es representativa de una población definida?¿Hay algo especial en la cohorte?¿Se incluyó a todos los que deberían haberse incluido?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'coh-3',
          numero: '3',
          pregunta: '¿El resultado se midió de forma precisa con el fin de minimizar posibles sesgos?',
          pista: 'Se trata de buscar sesgos de medida o de clasificación. ¿Los autores utilizaron variables objetivas o subjetivas?¿Las medidas reflejan de forma adecuada aquello que se supone que tiene que medir?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'coh-4',
          numero: '4',
          pregunta: '¿Han tenido en cuenta los autores el potencial efecto de los factores de confusión en el diseño y/o análisis del estudio?',
          pista: 'Haz una lista de los factores que consideras importantes. Busca restricciones en el diseño y en las técnicas utilizadas como, por ejemplo, los análisis de modelización, estratificación, regresión o de sensibilidad.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'coh-5',
          numero: '5',
          pregunta: '¿El seguimiento de los sujetos fue lo suficientemente largo y completo?',
          pista: 'Los efectos buenos o malos deberían aparecer por ellos mismos. Los sujetos perdidos durante el seguimiento pueden haber tenido resultados distintos.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados?',
      preguntas: [
        {
          id: 'coh-6',
          numero: '6',
          pregunta: '¿Cuáles son los resultados de este estudio?',
          pista: '¿Cuáles son los resultados netos?¿Los autores han dado la tasa o la proporción entre los expuestos/no expuestos?¿Cómo de fuerte es la relación de asociación entre la exposición y el resultado (RR)?',
        },
        {
          id: 'coh-7',
          numero: '7',
          pregunta: '¿Cuál es la precisión de los resultados?',
          pista: 'Considera los intervalos de confianza y el tamaño de la muestra.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Son los resultados aplicables a tu medio?',
      preguntas: [
        {
          id: 'coh-10',
          numero: '10',
          pregunta: '¿Se pueden aplicar los resultados en tu medio?',
          pista: 'Considera si:Los pacientes cubiertos por el estudio pueden ser suficientemente diferentes de los de tu áreaTu medio parece ser muy diferente al del estudioPuedes estimar los beneficios y perjuicios en tu medio',
        },
        {
          id: 'coh-11',
          numero: '11',
          pregunta: '¿Va a cambiar esto tu decisión clínica?',
          pista: 'Evalúa si los resultados cambiarían tu práctica clínica.',
        },
      ],
    },
  ],
};

// Casos y Controles
export const casosYControles: TipoEstudio = {
  id: 'casos-y-controles',
  nombre: 'Casos y Controles',
  descripcion: '11 preguntas para entender un estudio de casos y controles',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Son los resultados del estudio válidos?',
      preguntas: [
        {
          id: 'cyc-3',
          numero: '3',
          pregunta: '¿Los casos se reclutaron/incluyeron de una forma aceptable?',
          pista: '¿Los casos se han definido de forma precisa?¿Los casos son representativos de una población definida?¿Se estableció un sistema fiable para la selección de todos los casos?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cyc-4',
          numero: '4',
          pregunta: '¿Los controles se seleccionaron de una manera aceptable?',
          pista: '¿Los controles son representativos de una población definida?¿Hay algo especial que afecta a los controles?¿Hay muchos no respondedores?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cyc-5',
          numero: '5',
          pregunta: '¿La exposición se midió de forma precisa con el fin de minimizar posibles sesgos?',
          pista: '¿Se definió la exposición claramente y se midió de forma precisa?¿Los autores utilizaron variables objetivas o subjetivas?¿Los métodos de medida fueron similares tanto en los casos como en los controles?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cyc-6a',
          numero: '6A',
          pregunta: '¿Qué factores de confusión han tenido en cuenta los autores?',
          pista: 'Haz una lista de los factores que piensas que son importantes y que los autores han omitido (genéticos, ambientales, socioeconómicos).',
        },
        {
          id: 'cyc-6b',
          numero: '6B',
          pregunta: '¿Han tenido en cuenta los autores el potencial de los factores de confusión en el diseño y/o análisis?',
          pista: 'Busca restricciones en el diseño y técnica, por ejemplo, análisis de modelización, estratificación, regresión o de sensibilidad.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados?',
      preguntas: [
        {
          id: 'cyc-7',
          numero: '7',
          pregunta: '¿Cuáles son los resultados de este estudio?',
          pista: '¿Cuáles son los resultados netos?¿El análisis es apropiado para su diseño?¿Cuán fuerte es la relación de asociación entre la exposición y el resultado (OR)?',
        },
        {
          id: 'cyc-8',
          numero: '8',
          pregunta: '¿Cuál es la precisión de los resultados?',
          pista: 'Tamaño del valor de P. Tamaño de los intervalos de confianza.',
        },
        {
          id: 'cyc-9',
          numero: '9',
          pregunta: '¿Te crees los resultados?',
          pista: '¡Un efecto grande es difícil de ignorar!¿Puede deberse al azar, sesgo o confusión?Considera los criterios de Bradford Hills.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Son los resultados aplicables a tu medio?',
      preguntas: [
        {
          id: 'cyc-10',
          numero: '10',
          pregunta: '¿Se pueden aplicar los resultados a tu medio?',
          pista: 'Considera si:Los pacientes cubiertos por el estudio pueden ser suficientemente diferentes de los de tu áreaTu medio parece ser muy diferente al del estudio',
        },
        {
          id: 'cyc-11',
          numero: '11',
          pregunta: '¿Los resultados de este estudio coinciden con otra evidencia disponible?',
          pista: 'Considera toda la evidencia disponible:Ensayos Clínicos aleatorizadosRevisiones SistemáticasEstudios de CohorteEstudios de Casos y ControlesSu consistencia',
        },
      ],
    },
  ],
};

// Cualitativa
export const cualitativa: TipoEstudio = {
  id: 'cualitativa',
  nombre: 'Estudio Cualitativo',
  descripcion: '10 preguntas para ayudarte a entender un estudio cualitativo',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Los resultados del estudio son válidos?',
      preguntas: [
        {
          id: 'cual-1',
          numero: '1',
          pregunta: '¿Se definieron de forma clara los objetivos de la investigación?',
          pista: '¿Quéda implícita/explícita la pregunta de investigación?¿Se identifica con claridad el objetivo/s de investigación?¿Se justifica la relevancia de los mismos?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cual-2',
          numero: '2',
          pregunta: '¿Es congruente la metodología cualitativa?',
          pista: 'Si la investigación pretende explorar las conductas o experiencias subjetivas de los participantes con respecto al fenómeno de estudio.¿Es apropiada la metodología cualitativa para dar respuesta a los objetivos de investigación planteados?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cual-3',
          numero: '3',
          pregunta: '¿El método de investigación es adecuado para alcanzar los objetivos?',
          pista: 'Si el investigador hace explícito y justifica el método elegido (p.ej. fenomenología, teoría fundamentada, etnología, etc.).',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cual-4',
          numero: '4',
          pregunta: '¿La estrategia de selección de participantes es congruente con la pregunta de investigación y el método utilizado?',
          pista: 'Hay alguna explicación relativa a la selección de los participantes. Justifica por qué los participantes seleccionados eran los más adecuados.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cual-5',
          numero: '5',
          pregunta: '¿Las técnicas de recogida de datos utilizados son congruentes con la pregunta de investigación y el método utilizado?',
          pista: 'Si se especifica claramente y justifica la técnica de recogida de datos (entrevistas, grupos de discusión, observación participante).Si se detallan aspectos concretos del proceso de recogida de datos.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cual-6',
          numero: '6',
          pregunta: '¿Se ha reflexionado sobre la relación entre el investigador y el objeto de investigación (reflexividad)?',
          pista: 'Si el investigador ha examinado de forma crítica su propio rol en el proceso de investigación (el investigador como instrumento de investigación), incluyendo sesgos potenciales.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'cual-7',
          numero: '7',
          pregunta: '¿Se han tenido en cuenta los aspectos éticos?',
          pista: 'Si el investigador ha detallado aspectos relacionados con:El consentimiento informadoLa confidencialidad de los datosEl manejo de la vulnerabilidad emocional',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados?',
      preguntas: [
        {
          id: 'cual-8',
          numero: '8',
          pregunta: '¿Fue el análisis de datos suficientemente riguroso?',
          pista: 'Si hay una descripción detallada del tipo de análisis (de contenido, del discurso, etc.) y del proceso. Si se presentan fragmentos originales de discurso significativos (verbatim).',
        },
        {
          id: 'cual-9',
          numero: '9',
          pregunta: '¿Es clara la exposición de los resultados?',
          pista: 'Los resultados corresponden a la pregunta de investigación. Los resultados se exponen de una forma detallada, comprensible.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Son los resultados aplicables en tu medio?',
      preguntas: [
        {
          id: 'cual-10',
          numero: '10',
          pregunta: '¿Son los resultados aplicables en tu medio?',
          pista: 'El investigador explica la contribución que los resultados aportan al conocimiento existente y a la práctica clínica.',
        },
      ],
    },
  ],
};

// RPC - Reglas de Predicción Clínica
export const rpc: TipoEstudio = {
  id: 'rpc',
  nombre: 'Reglas de Predicción Clínica',
  descripcion: '11 preguntas para entender las Reglas de Predicción Clínica',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Son válidos los resultados del estudio?',
      preguntas: [
        {
          id: 'rpc-1',
          numero: '1',
          pregunta: '¿La regla responde a una pregunta bien definida?',
          pista: 'La regla debe abordar una pregunta clínica específica y bien delimitada.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rpc-2',
          numero: '2',
          pregunta: '¿La población a estudio de la que se derivó la regla, incluyó un espectro adecuado de pacientes?',
          pista: 'La población debe incluir pacientes con el espectro completo de la enfermedad.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rpc-3',
          numero: '3',
          pregunta: '¿Se validó la regla en un grupo diferente de pacientes?',
          pista: 'La validación debe realizarse en una población distinta a la de derivación.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rpc-4',
          numero: '4',
          pregunta: '¿Hubo una evaluación ciega del desenlace y de las variables predictoras?',
          pista: 'La evaluación ciega reduce el sesgo de información.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rpc-5',
          numero: '5',
          pregunta: '¿Se midieron las variables predictoras y el desenlace en todos los pacientes?',
          pista: 'Debe existir un seguimiento completo de todos los pacientes.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rpc-6',
          numero: '6',
          pregunta: '¿Se describen los métodos de derivación y validación de la regla?',
          pista: 'Los métodos deben estar claramente descritos para permitir su replicación.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados?',
      preguntas: [
        {
          id: 'rpc-7',
          numero: '7',
          pregunta: '¿Se puede calcular el rendimiento de la RPC?',
          pista: 'Debe poder calcularse sensibilidad, especificidad y cocientes de probabilidad.',
        },
        {
          id: 'rpc-8',
          numero: '8',
          pregunta: '¿Cuál es la precisión de los resultados?',
          pista: 'Considera los intervalos de confianza de las medidas de rendimiento.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Son los resultados aplicables al escenario?',
      preguntas: [
        {
          id: 'rpc-9',
          numero: '9',
          pregunta: '¿Serán satisfactorios en el ámbito del escenario la reproducibilidad de la RPC y su interpretación?',
          pista: 'Considera si la regla puede implementarse de manera fiable en tu contexto.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rpc-10',
          numero: '10',
          pregunta: '¿Es aceptable la prueba en este caso?',
          pista: 'Considera la disponibilidad de la prueba, los riesgos y los costes.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rpc-11',
          numero: '11',
          pregunta: '¿Modificarán los resultados la conducta clínica, los resultados en salud o los costes?',
          pista: 'La regla debe tener impacto clínico relevante.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
  ],
};

// Diagnóstico
export const diagnostico: TipoEstudio = {
  id: 'diagnostico',
  nombre: 'Pruebas Diagnósticas',
  descripcion: '10 preguntas para entender un artículo de diagnóstico',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Son válidos los resultados del estudio?',
      preguntas: [
        {
          id: 'diag-1',
          numero: '1',
          pregunta: '¿Existió una comparación con una prueba de referencia adecuada?',
          pista: '¿Es correcto el patrón de oro? (no siempre se puede aplicar el mismo patrón de oro a todos los pacientes)',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'diag-2',
          numero: '2',
          pregunta: '¿Incluyó la muestra un espectro adecuado de pacientes?',
          pista: '¿Están adecuadamente descritos los pacientes y cómo se seleccionaron?Casi cualquier prueba distingue entre sanos y gravemente enfermos.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'diag-3',
          numero: '3',
          pregunta: '¿Existe una adecuada descripción de la prueba?',
          pista: '¿Se define con claridad qué es un resultado positivo y qué es un resultado negativo?¿Se especifica la reproducibilidad de la prueba?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'diag-4',
          numero: '4',
          pregunta: '¿Hubo evaluación "ciega" de los resultados?',
          pista: '¿Las personas que interpretaron la prueba conocían los resultados del patrón de oro (y viceversa)?',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'diag-5',
          numero: '5',
          pregunta: '¿La decisión de realizar el patrón de oro fue independiente del resultado de la prueba problema?',
          pista: 'Considerar si:Se incluyeron preferentemente los resultados positivos en la prueba a evaluarSe utilizaron diferentes patrones de oro en los positivos y en los negativos',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados?',
      preguntas: [
        {
          id: 'diag-6',
          numero: '6',
          pregunta: '¿Se pueden calcular los Cocientes de Probabilidad (Likelihood ratios)?',
          pista: '¿Se han tenido en cuenta los pacientes con resultado no concluyentes?¿Se pueden calcular los cocientes de probabilidad para distintos niveles de la prueba?',
        },
        {
          id: 'diag-7',
          numero: '7',
          pregunta: '¿Cuál es la precisión de los resultados?',
          pista: 'Hay que buscar o calcular los intervalos de confianza de los cocientes de probabilidad.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Son los resultados aplicables al escenario?',
      preguntas: [
        {
          id: 'diag-8',
          numero: '8',
          pregunta: '¿Serán satisfactorios en el ámbito del escenario la reproducibilidad de la prueba y su interpretación?',
          pista: 'Considera si el ámbito de la prueba es demasiado diferente al del escenario.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'diag-9',
          numero: '9',
          pregunta: '¿Es aceptable la prueba en este caso?',
          pista: 'Considera la disponibilidad de la prueba, los riesgos/molestias de la prueba y los costes.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'diag-10',
          numero: '10',
          pregunta: '¿Modificarán los resultados de la prueba la decisión sobre cómo actuar?',
          pista: 'Desde la perspectiva del escenario, si la actitud no va a cambiar, la prueba es inútil. Considera el umbral de acción y la probabilidad de enfermedad antes y después de la prueba.',
          tipo: 'select',
          opciones: ['Sí', 'No'],
        },
      ],
    },
  ],
};

// Revisión Sistemática
export const revision: TipoEstudio = {
  id: 'revision',
  nombre: 'Revisión Sistemática',
  descripcion: '10 preguntas para entender una revisión sistemática',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Los resultados de la revisión son válidos?',
      preguntas: [
        {
          id: 'rev-1',
          numero: '1',
          pregunta: '¿El tema de la revisión está bien definido?',
          pista: 'Un tema debe ser definido en términos de:La población de estudioLa intervención realizadaLos resultados (outcomes) considerados',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rev-2',
          numero: '2',
          pregunta: '¿Buscaron los autores el tipo de artículos adecuado?',
          pista: 'El mejor tipo de estudio es el que:Se dirige a la pregunta objeto de la revisiónTiene un diseño apropiado para la pregunta',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rev-3',
          numero: '3',
          pregunta: '¿Crees que estaban incluidos los estudios importantes y pertinentes?',
          pista: 'Busca:Qué bases de datos bibliográficas se han usadoSeguimiento de las referenciasContacto personal con expertosBúsqueda de estudios no publicados',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rev-4',
          numero: '4',
          pregunta: '¿Crees que los autores de la revisión han hecho suficiente esfuerzo para valorar la calidad de los estudios incluidos?',
          pista: 'Los autores necesitan considerar el rigor de los estudios que han identificado. La falta de rigor puede afectar al resultado de los estudios.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'rev-5',
          numero: '5',
          pregunta: 'Si los resultados de los diferentes estudios han sido mezclados para obtener un resultado combinado, ¿era razonable hacer eso?',
          pista: 'Considera si:Los resultados de los estudios eran similares entre síLos resultados de todos los estudios incluidos están claramente presentados',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados?',
      preguntas: [
        {
          id: 'rev-6',
          numero: '6',
          pregunta: '¿Cuál es el resultado global de la revisión?',
          pista: 'Si tienes claro los resultados últimos de la revisión.¿Cuáles son? (numéricamente, si es apropiado)¿Cómo están expresados los resultados? (NNT, odds ratio, etc.)',
        },
        {
          id: 'rev-7',
          numero: '7',
          pregunta: '¿Cuál es la precisión del resultado/s?',
          pista: 'Busca los intervalos de confianza de los estimadores.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Son los resultados aplicables en tu medio?',
      preguntas: [
        {
          id: 'rev-10',
          numero: '10',
          pregunta: '¿Son los resultados aplicables en tu medio?',
          pista: 'Los pacientes cubiertos por la revisión pueden ser suficientemente diferentes de los de tu área. Tu medio parece ser muy diferente al del estudio.',
        },
      ],
    },
  ],
};

// Ensayo Clínico
export const ensayoClinico: TipoEstudio = {
  id: 'ensayo-clinico',
  nombre: 'Ensayo Clínico',
  descripcion: '11 preguntas para entender un ensayo clínico',
  secciones: [
    {
      id: 'seccion-a',
      titulo: 'A. ¿Son válidos los resultados del ensayo? ¿Confiarías en ellos?',
      preguntas: [
        {
          id: 'ec-1',
          numero: '1',
          pregunta: '¿Se orienta el ensayo a una pregunta claramente definida?',
          pista: 'El ensayo debe tener una pregunta de investigación específica y bien definida.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ec-2',
          numero: '2',
          pregunta: '¿Fue aleatoria la asignación de los pacientes a los tratamientos?',
          pista: 'La aleatorización es fundamental para evitar sesgos de selección.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ec-3',
          numero: '3',
          pregunta: '¿Se mantuvo la comparabilidad de los grupos a través del estudio?',
          pista: 'Debe verificarse que los grupos seguían siendo comparables.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ec-4',
          numero: '4',
          pregunta: '¿Fue adecuado el manejo de las pérdidas durante el estudio?',
          pista: 'Las pérdidas pueden introducir sesgos si no se manejan adecuadamente.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ec-5',
          numero: '5',
          pregunta: '¿Fue adecuada la medición de los desenlaces?',
          pista: 'Los desenlaces deben medirse de forma objetiva y estandarizada.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ec-6',
          numero: '6',
          pregunta: '¿Se evitó la comunicación selectiva de resultados?',
          pista: 'Debe reportarse todos los desenlaces planificados, no solo los significativos.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
    {
      id: 'seccion-b',
      titulo: 'B. ¿Cuáles son los resultados? ¿Cuál es el efecto del tratamiento para cada desenlace?',
      preguntas: [
        {
          id: 'ec-7',
          numero: '7',
          pregunta: '¿Cuáles son los resultados del ensayo?',
          pista: 'Detalla los desenlaces positivos y negativos medidos.¿Cómo se analizó el estudio? (ITT, mITT, APP, ATT)',
        },
        {
          id: 'ec-8',
          numero: '8',
          pregunta: '¿Cuál es la precisión de los estimadores del efecto? ¿Cuáles son sus intervalos de confianza?',
          pista: 'Los intervalos de confianza indican la precisión de las estimaciones.',
        },
      ],
    },
    {
      id: 'seccion-c',
      titulo: 'C. ¿Pueden ayudarnos estos resultados?',
      preguntas: [
        {
          id: 'ec-9',
          numero: '9',
          pregunta: '¿Puede aplicarse estos resultados en tu medio o población local?',
          pista: 'Considera las diferencias entre la población del estudio y la tuya.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ec-10',
          numero: '10',
          pregunta: '¿Se han tenido en cuenta todos los resultados y su importancia clínica?',
          pista: 'Considera tanto los beneficios como los efectos adversos.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
        {
          id: 'ec-11',
          numero: '11',
          pregunta: '¿Los beneficios a obtener justifican los riesgos y los costes?',
          pista: 'Evalúa la relación beneficio/riesgo y coste/efectividad.',
          tipo: 'select',
          opciones: ['Sí', 'No sé', 'No'],
        },
      ],
    },
  ],
};

// Exportar todos los tipos de estudios
export const tiposDeEstudios: TipoEstudio[] = [
  evaluacionEconomica,
  cohortes,
  casosYControles,
  cualitativa,
  rpc,
  diagnostico,
  revision,
  ensayoClinico,
];

// Función para obtener un tipo de estudio por ID
export const obtenerTipoEstudio = (id: string): TipoEstudio | undefined => {
  return tiposDeEstudios.find((tipo) => tipo.id === id);
};
