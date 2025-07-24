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
      title: 'Tone & Style',
      score: feedback.toneAndStyle.score,
      tips: feedback.toneAndStyle.tips,
    },
    {
      id: 'content',
      title: 'Content',
      score: feedback.content.score,
      tips: feedback.content.tips,
    },
    {
      id: 'structure',
      title: 'Structure',
      score: feedback.structure.score,
      tips: feedback.structure.tips,
    },
    {
      id: 'skills',
      title: 'Skills',
      score: feedback.skills.score,
      tips: feedback.skills.tips,
    },
  ]

  return (
    <div className='flex flex-col gap-4 w-full'>
      <Accordion>
        {CATEGORIES.map((category) => (
          <AccordionItem key={category.id} id={category.id}>
            <AccordionHeader itemId={category.id}>
              <CategoryHeader title={category.title} categoryScore={category.score} />
            </AccordionHeader>
            <AccordionContent itemId={category.id}>
              <CategoryContent tips={category.tips} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Details
