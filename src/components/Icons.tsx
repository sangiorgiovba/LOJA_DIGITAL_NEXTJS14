import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      height="1em"
      width="1em"
      
    >
      <path d="M22 18H6a2 2 0 01-2-2V7a2 2 0 00-2-2" />
      <path d="M17 14V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v10" />
      <path d="M9 6 H20 A1 1 0 0 1 21 7 V13 A1 1 0 0 1 20 14 H9 A1 1 0 0 1 8 13 V7 A1 1 0 0 1 9 6 z" />
      <path d="M20 20 A2 2 0 0 1 18 22 A2 2 0 0 1 16 20 A2 2 0 0 1 20 20 z" />
      <path d="M11 20 A2 2 0 0 1 9 22 A2 2 0 0 1 7 20 A2 2 0 0 1 11 20 z" />
    </svg>
  ),
}