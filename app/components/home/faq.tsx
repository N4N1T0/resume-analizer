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
      question: 'What is ATS and why is it important?',
      answer:
        'ATS (Applicant Tracking System) is software used by employers to filter resumes before human review. Our tool ensures your resume is optimized to pass these systems.',
    },
    {
      id: 'how-accurate',
      question: 'How accurate is the analysis?',
      answer:
        'Our AI-powered analysis is trained on thousands of successful resumes and current industry standards, providing highly accurate feedback and recommendations.',
    },
    {
      id: 'file-formats',
      question: 'What file formats are supported?',
      answer:
        'We support PDF, DOC, and DOCX file formats. PDF is recommended for the most accurate analysis.',
    },
    {
      id: 'data-privacy',
      question: 'Is my resume data secure?',
      answer:
        'Yes, we take data privacy seriously. Your resume is processed securely and is not stored on our servers after analysis.',
    },
  ]

  return (
    <section className='faq-section'>
      <div className='container mx-auto px-4'>
        <h2 className='text-gradient text-4xl font-semibold text-center mb-12'>
          Frequently Asked Questions
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
