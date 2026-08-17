# Prompt — Extraer el BLOQUE DE VOZ de una clienta

Convierte el BRAND CORE de una clienta más sus palabras textuales en el BLOQUE DE VOZ que necesita `prompt-semana.md`. Es el paso 2 del pipeline: sin él, el bloque se llena a mano cada vez y el resultado depende de la memoria de quien lo llena.

## De dónde sale una voz, y de dónde no

La estrategia sale del diseño energético. La voz, no. Dos clientas con el mismo Mercurio no escriben igual, porque la voz se forma con su historia, su profesión, su región y su manera de defenderse cuando le discuten el precio. Derivar la voz de un placement produce una voz **asignada** — coherente en el papel, ajena en la boca de la clienta, y ella lo va a notar en la primera grabación aunque no sepa explicar por qué.

El diseño energético sirve aquí para otra cosa: define **el territorio** (de qué le toca hablar, qué rol ocupa, qué la hace irrepetible). Sus palabras textuales definen **el sonido**. Los dos hacen falta y no son intercambiables.

Por eso este prompt exige material crudo. Sin al menos una fuente de la clienta hablando o escribiendo por su cuenta, no se puede extraer una voz — se puede inventar una, que es otra cosa.

---

## El prompt

```
Vas a extraer el perfil de voz de [NOMBRE] para que otro modelo pueda escribir
contenido que suene a ella y no a un redactor genérico.

═══════════════════════════════
MATERIAL
═══════════════════════════════
A. Su BRAND CORE
[Pegar: posicionamiento, avatar, rasgos, enemigo, piedras/objeciones, pilares
de contenido, lenguaje propio.]

B. Sus palabras textuales — OBLIGATORIO
[Pegar todo lo que exista de ella hablando o escribiendo sin editar:
respuestas del cuestionario de descubrimiento, transcripciones de audios o de
la sesión, captions que haya escrito, mensajes de WhatsApp a clientes, cómo
responde cuando le objetan el precio. Cuanto más crudo, mejor: un texto que
pasó por un redactor ya no sirve como muestra.]

Si la fuente B está vacía o es muy pobre, dilo y detente. No completes con
suposiciones a partir de la fuente A — una voz inventada es peor que ninguna,
porque se usa con confianza.

═══════════════════════════════
QUÉ QUIERO DE VUELTA
═══════════════════════════════
Un BLOQUE DE VOZ con estos campos, listo para pegar:

- Quién es: posicionamiento en una frase.
- Su lector: profesión, trayectoria, qué le duele, de qué desconfía.
- Rasgos de su voz: 3-6 adjetivos. Cada uno respaldado con una cita textual
  suya que lo demuestre. Sin cita, fuera.
- Cómo suena: largo de frase típico, si saluda o va directo, si usa preguntas,
  si usa humor, formal o cercano, tuteo o usted.
- Palabras que SÍ usa: 15-25, sacadas de lo que ella escribió de verdad. No
  del vocabulario del sector.
- Palabras que NO usa: 10-15 que sonarían falsas en su boca, y por qué.
- Muletillas y giros propios: frases que repite, su forma de rematar una idea,
  cómo empieza cuando explica algo.
- Su enemigo declarado: contra qué idea escribe.
- Objeciones con su respuesta ya calibrada: usa la respuesta que ella misma da,
  no una mejorada.
- Palabras-CTA: las que ya usa, o 3-5 propuestas si no tiene.

═══════════════════════════════
REGLAS
═══════════════════════════════
1. Cada rasgo va anclado a una cita textual suya. Es la diferencia entre
   describir su voz y adivinarla.
2. No la mejores. Si habla largo y con rodeos, el perfil debe decirlo — el
   trabajo posterior es escribir como ella en su mejor día, no como otra
   persona.
3. Separa lo que viene de sus palabras de lo que viene de su BRAND CORE.
   Marca cada campo como [DE SUS PALABRAS] o [DEL BRAND CORE].
4. Si un rasgo del BRAND CORE contradice cómo habla de verdad, nómbralo en vez
   de resolverlo en silencio. Ese choque suele ser información valiosa: es la
   distancia entre la marca que quiere y la persona que es hoy.
5. Al final, en tres líneas: qué material falta para que este perfil sea sólido.
```

---

## Qué hacer con el resultado

El BLOQUE DE VOZ que sale de aquí se pega directo en `prompt-semana.md` y ya se puede producir contenido semanal para esa clienta.

Guardarlo en su página de Notion junto al BRAND CORE. Se revisa cuando la clienta cambia de oferta o de avatar, no cada semana.

## Cuando la clienta no tiene material crudo

Pasa con quien nunca ha publicado. Antes de extraer nada, conseguir el material — es rápido:

- Un audio de 5 minutos respondiendo: *¿por qué haces lo que haces?*, *¿qué te da rabia de tu industria?*, *¿qué le dices a alguien que te dice que eres cara?*
- Las tres últimas conversaciones en las que le explicó su servicio a alguien.

La tercera pregunta es la más productiva de las tres: la gente defiende su precio con su voz más real, sin filtro profesional encima.
