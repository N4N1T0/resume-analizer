import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@/components/resume/ui/accordion'
import CategoryContent from '@/components/resume/ui/category-content'
import CategoryHeader from '@/components/resume/ui/category-header'

const Details = ({ feedback }: { feedback: Feedback }) => {
  // CONST
  const CATEGORIES: CategoryConfig[] = [
    {
      id: 'tone-style',
      title: 'Tono y Estilo',
      score: feedback.toneAndStyle.score,
      tips: feedback.toneAndStyle.tips,
    },
    {
      id: 'content',
      title: 'Contenido',
      score: feedback.content.score,
      tips: feedback.content.tips,
    },
    {
      id: 'structure',
      title: 'Estructura',
      score: feedback.structure.score,
      tips: feedback.structure.tips,
    },
    {
      id: 'skills',
      title: 'Habilidades',
      score: feedback.skills.score,
      tips: feedback.skills.tips,
    },
  ]

  return (
    <Accordion>
      {CATEGORIES.map((category) => (
        <AccordionItem
          key={category.id}
          id={category.id}
          className='bg-white rounded-t-2xl rounded-b-sm shadow-xs'
        >
          <AccordionHeader itemId={category.id} className='hover:bg-light-green rounded-t-2xl'>
            <CategoryHeader title={category.title} categoryScore={category.score} />
          </AccordionHeader>
          <AccordionContent itemId={category.id} className='bg-light-green'>
            <CategoryContent tips={category.tips} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default Details
