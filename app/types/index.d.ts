interface Resume {
  id: string
  companyName?: string
  jobTitle?: string
  imagePath: string
  resumePath: string
  feedback: Feedback
  jobDescription: string
}

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatBotProps {
  resumeData?: Resume
}

interface ContextSuggestion {
  key: string
  label: string
  value: string
}

interface AnalizeParams {
  file: File
  companyName: string
  jobTitle: string
  jobDescription: string
}

interface Suggestion {
  type: 'good' | 'improve'
  tip: string
}

interface CategoryConfig {
  id: string
  title: string
  score: number
  tips: {
    type: 'good' | 'improve'
    tip: string
    explanation: string
  }[]
}

interface Feedback {
  overallScore: number
  ATS: {
    score: number
    tips: {
      type: 'good' | 'improve'
      tip: string
    }[]
  }
  toneAndStyle: {
    score: number
    tips: {
      type: 'good' | 'improve'
      tip: string
      explanation: string
    }[]
  }
  content: {
    score: number
    tips: {
      type: 'good' | 'improve'
      tip: string
      explanation: string
    }[]
  }
  structure: {
    score: number
    tips: {
      type: 'good' | 'improve'
      tip: string
      explanation: string
    }[]
  }
  skills: {
    score: number
    tips: {
      type: 'good' | 'improve'
      tip: string
      explanation: string
    }[]
  }
}
