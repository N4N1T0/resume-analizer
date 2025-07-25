import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@/components/resume/ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      id: 'what-is-ats',
      question: '¿Qué es ATS y por qué es importante?',
      answer:
        'ATS (Sistema de Seguimiento de Candidatos) es software usado por empleadores para filtrar currículums antes de la revisión humana. Nuestra herramienta asegura que tu currículum esté optimizado para pasar estos sistemas.',
    },
    {
      id: 'how-accurate',
      question: '¿Qué tan preciso es el análisis?',
      answer:
        'Nuestro análisis potenciado por IA está entrenado con miles de currículums exitosos y estándares actuales de la industria, proporcionando retroalimentación y recomendaciones altamente precisas.',
    },
    {
      id: 'file-formats',
      question: '¿Qué formatos de archivo son compatibles?',
      answer: 'Solo aceptamos archivos en formato PDF para garantizar el análisis más preciso.',
    },
    {
      id: 'data-privacy',
      question: '¿Están seguros los datos de mi currículum?',
      answer:
        'Tu currículum se almacena temporalmente en nuestros servidores durante el análisis y se elimina automáticamente después de 24 horas. Utilizamos encriptación de datos y seguimos las mejores prácticas de seguridad para proteger tu información.',
    },
  ]

  return (
    <section className='faq-section'>
      <div className='container mx-auto px-4'>
        <h2 className='text-gradient text-4xl font-semibold text-center mb-12'>
          Preguntas Frecuentes
        </h2>
        <div className='max-w-3xl mx-auto'>
          <Accordion className='faq-accordion'>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} id={faq.id} className='last:border-none'>
                <AccordionHeader itemId={faq.id} className='faq-question'>
                  <span className='text-lg font-medium text-gray-900'>{faq.question}</span>
                </AccordionHeader>
                <AccordionContent itemId={faq.id} className='faq-answer'>
                  <p className='text-dark-200 leading-relaxed'>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
