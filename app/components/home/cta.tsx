import { Link } from 'react-router'

export default function CTA() {
  return (
    <section className='cta-section'>
      <div className='cta-container'>
        <div className='cta-content'>
          <h2 className='!text-5xl font-semibold text-center mb-6'>
            ¿Listo para Optimizar tu Currículum?
          </h2>
          <p className='text-dark-200 text-lg text-center mb-8 max-w-2xl'>
            Únete a miles de buscadores de empleo que han mejorado sus posibilidades de conseguir entrevistas con
            nuestro análisis de currículum potenciado por IA.
          </p>
          <Link to='/upload' className='primary-btn text-3xl w-fit px-10 py-2'>
            Analizar Mi Currículum
          </Link>
        </div>
      </div>
    </section>
  )
}
