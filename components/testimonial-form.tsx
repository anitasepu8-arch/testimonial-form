'use client'

import { useState, type FormEvent } from 'react'

const STAR_PATH =
  'M12 2.5l2.9 6.06 6.6.86-4.86 4.54 1.24 6.54L12 18.3l-5.88 3.7 1.24-6.54L2.5 9.42l6.6-.86L12 2.5z'

const QUESTIONS = [
  {
    id: 'problem',
    label: '¿Cuál era tu principal problema o necesidad antes de trabajar conmigo?',
    placeholder: 'Describe brevemente...',
    type: 'textarea' as const,
    required: true,
  },
  {
    id: 'solution',
    label: '¿Cómo cambió tu situación después de trabajar conmigo?',
    placeholder: 'Cuéntanos los resultados...',
    type: 'textarea' as const,
    required: true,
  },
  {
    id: 'highlight',
    label: '¿Qué aspecto valoraste más de nuestro trabajo juntas?',
    placeholder: 'Lo que más te gustó...',
    type: 'textarea' as const,
    required: false,
  },
  {
    id: 'recommend',
    label: '¿A quién le recomendarías mi servicio?',
    placeholder: 'Ej: emprendedoras, mujeres de negocio...',
    type: 'text' as const,
    required: false,
  },
]

export function TestimonialForm() {
  const [rating, setRating] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      rating: String(rating),
      problem: data.get('problem'),
      solution: data.get('solution'),
      highlight: data.get('highlight'),
      recommend: data.get('recommend'),
      date: new Date().toLocaleDateString('es-ES'),
    }

    try {
      const response = await fetch('https://formspree.io/f/mwleqapv', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
        setRating(0)
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert('Hubo un error al enviar el testimonio. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('[v0] Error al enviar testimonio:', error)
      alert('Error de conexión. Por favor verifica tu conexión a internet.')
    }
  }

  return (
    <main className="tf">
      <div className="container">
        <div
          className={`success-message${showSuccess ? ' show' : ''}`}
          role="status"
          aria-live="polite"
        >
          <span aria-hidden="true">{'\u2713'}</span>
          <span>Gracias por tu tiempo. Tu testimonio se envió correctamente.</span>
        </div>

        <header className="header">
          <p className="eyebrow">Tu experiencia</p>
          <h1 className="text-balance">Cuéntame tu historia</h1>
          <p className="text-pretty">
            Tu opinión es lo que da forma a este trabajo. Compártela con calma — no hay respuestas
            correctas.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre completo" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="optional">opcional</span>
              </label>
              <input type="email" id="email" name="email" placeholder="tu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Teléfono <span className="optional">opcional</span>
              </label>
              <input type="text" id="phone" name="phone" placeholder="+34 123 456 789" />
            </div>
          </div>

          <div className="rating-group">
            <span className="rating-label" id="rating-label">
              ¿Qué calificación nos das?
            </span>
            <div className="stars" role="radiogroup" aria-labelledby="rating-label">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`star${value <= rating ? ' active' : ''}`}
                  role="radio"
                  aria-checked={value === rating}
                  aria-label={value === 1 ? '1 estrella' : `${value} estrellas`}
                  onClick={() => setRating(value)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={STAR_PATH} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="divider">En tus palabras</div>

          {QUESTIONS.map((q) =>
            q.type === 'textarea' ? (
              <div className="form-group" key={q.id}>
                <label className="question-label" htmlFor={q.id}>
                  {q.label}
                </label>
                <textarea
                  id={q.id}
                  name={q.id}
                  placeholder={q.placeholder}
                  required={q.required}
                />
              </div>
            ) : (
              <div className="form-group" key={q.id}>
                <label className="question-label" htmlFor={q.id}>
                  {q.label}
                </label>
                <input
                  type="text"
                  id={q.id}
                  name={q.id}
                  placeholder={q.placeholder}
                  required={q.required}
                />
              </div>
            ),
          )}

          <div className="form-group">
            <label className="checkbox-label" htmlFor="authorize">
              <input type="checkbox" id="authorize" name="authorize" required />
              <span>Autorizo que mi testimonio sea usado en redes sociales y web.</span>
            </label>
          </div>

          <div className="button-group">
            <button type="reset" className="btn-reset" onClick={() => setRating(0)}>
              Limpiar
            </button>
            <button type="submit" className="btn-submit">
              Enviar testimonio
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
