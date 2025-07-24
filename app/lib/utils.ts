import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Format file size to human readable string
/**
 * Formats a file size in bytes to a human readable string
 * @param bytes - The size in bytes to format
 * @returns A string representing the size with appropriate unit (Bytes, KB, MB, or GB)
 * @example
 * formatSize(1024) // Returns "1 KB"
 * formatSize(1234567) // Returns "1.18 MB"
 */
export const formatSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(2))

  return `${formattedSize} ${sizes[i]}`
}

/**
 * Generates a cryptographically secure UUID v4
 * @returns A randomly generated UUID string
 * @example
 * generateUUID() // Returns "123e4567-e89b-12d3-a456-426614174000"
 */
export const generateUUID = () => crypto.randomUUID()

/**
 * Merges tailwind classes with clsx.
 * @param  {...any} inputs - List of tailwind classes or objects with tailwind classes.
 * @returns {string} The merged tailwind classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
