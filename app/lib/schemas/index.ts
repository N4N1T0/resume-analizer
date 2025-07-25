/* eslint-disable @typescript-eslint/no-explicit-any */
// Upload form schema
export interface UploadFormData {
  companyName: string
  jobTitle: string
  jobDescription: string
  file: File | null
}

// Analysis parameters interface
export interface AnalizeParams {
  file: File
  companyName: string
  jobTitle: string
  jobDescription: string
}

// Resume data structure stored in KV
export interface ResumeData {
  id: string
  resumePath: string
  imagePath: string
  companyName: string
  jobTitle: string
  jobDescription: string
  feedback: string | object
}

// Form validation functions
export const validateUploadForm = (
  data: Partial<UploadFormData>,
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!data.companyName?.trim()) {
    errors.push('Company name is required')
  }

  if (!data.jobTitle?.trim()) {
    errors.push('Job title is required')
  }

  if (!data.jobDescription?.trim()) {
    errors.push('Job description is required')
  }

  if (!data.file) {
    errors.push('Resume file is required')
  } else if (data.file.type !== 'application/pdf') {
    errors.push('Only PDF files are supported')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Type guards
export const isValidAnalizeParams = (data: any): data is AnalizeParams => {
  return (
    data &&
    typeof data.companyName === 'string' &&
    typeof data.jobTitle === 'string' &&
    typeof data.jobDescription === 'string' &&
    data.file instanceof File
  )
}

export const isValidResumeData = (data: any): data is ResumeData => {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.resumePath === 'string' &&
    typeof data.imagePath === 'string' &&
    typeof data.companyName === 'string' &&
    typeof data.jobTitle === 'string' &&
    typeof data.jobDescription === 'string' &&
    (typeof data.feedback === 'string' || typeof data.feedback === 'object')
  )
}
