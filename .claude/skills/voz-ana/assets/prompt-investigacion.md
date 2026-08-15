# Prompt en dos pasos — Investigar, luego producir

Adaptación del método de dos pasos (investigación → producción en voz propia) al sistema de Ana.

La versión que circula en redes pide "estudia los videos que mejor funcionan en mi nicho". Un modelo de lenguaje no puede hacer eso: no ve Instagram ni las métricas de nadie. Sin datos reales, inventa tendencias creíbles y el lote entero de guiones sale construido sobre una investigación falsa. Por eso el paso 1 de abajo **exige fuentes reales** antes de permitir conclusiones.

---

## PASO 1 — Investigación

No cerrar el chat después de este paso. La conversación entera es el contexto del paso 2.

```
Eres analista de contenido. Vas a encontrar qué está funcionando de verdad, sin
inventar nada.

FUENTE A — Mis propios datos (la más importante)
[Pegar aquí las filas del Planificador de Contenido Corto con sus Views:
título/tema, pilar, ángulo, formato, hook usado y views. Mínimo 15 piezas,
mezclando las que volaron y las que no.]

FUENTE B — Referencias del nicho
[Pegar aquí 5-10 piezas de otras cuentas que quiero entender: cuenta, tema,
hook textual y métrica visible. Si no las tengo a mano, di que falta esta
fuente en vez de suplirla con suposiciones.]

QUÉ QUIERO DE VUELTA
1. Los hooks que mejor rindieron, agrupados por TIPO (dato, pregunta de costo,
   caso concreto, confesión personal, afirmación de contraste, otro).
2. Qué tienen en común mis 3 mejores piezas — y qué tienen en común las 3
   peores. Si no hay patrón claro, dilo; no fabriques uno.
3. Qué pilar y qué ángulo rinden mejor en mi cuenta, con los números al lado.
4. Qué formato aguanta mejor: talking head, carrusel o narrativo.
5. Tres hipótesis de por qué. Marca cada una como CONFIRMADA POR DATOS o
   ESPECULATIVA. No mezcles las dos.

REGLAS
- Cada afirmación va con el número que la sostiene. Sin número, no es hallazgo.
- Si la muestra es demasiado pequeña para concluir algo, dilo — es una
  respuesta válida y más útil que una conclusión inventada.
- No me digas lo que quiero oír. Si mi contenido de mayor alcance atrae al
  público equivocado, ese es justamente el hallazgo que necesito.
```

---

## PASO 2 — Producción

En el mismo chat, sin abrir uno nuevo.

**Si eres Ana:**

```
/voz-ana Usa el análisis de arriba para escribirme [N] guiones.
Prioriza los tipos de hook que mejor rindieron según los datos.
Un hook de cada tipo antes de repetir tipo.
```

**Si es para una clienta:** pegar el BLOQUE DE VOZ del prompt de contenido semanal (ver `prompt-semana.md`) y luego la instrucción de arriba sin el `/voz-ana`.

---

## Sobre el volumen

El reel original pide 20 guiones de una sola vez. Se pueden generar, pero a partir del octavo o noveno la calidad cae de forma predecible: empiezan a ser variaciones del mismo argumento con las palabras cambiadas. Dos formas de evitarlo:

- **Pedir en lotes de 5**, cada lote anclado a un pilar o a un tipo de hook distinto. Mejor material, y se descarta un lote malo sin perder los otros.
- **Pedir 20 hooks primero**, elegir los 8 que valgan, y recién entonces desarrollar esos 8 a guion completo. Más rápido de revisar y no se gasta esfuerzo desarrollando ideas que se van a descartar igual.

La segunda es la que recomiendo: separa la decisión de qué decir de la de cómo decirlo, que es exactamente lo que hace el método de dos pasos a nivel de investigación.
