import { ComponentProps } from 'react'

export function Arrow(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.25 13.701a1.5 1.5 0 101.5 2.598l-1.5-2.598zm19.52-8.313a1.5 1.5 0 00-1.061-1.837L6.669.057a1.5 1.5 0 10-.777 2.898L17.483 6.06l-3.105 11.59a1.5 1.5 0 102.897.777l3.494-13.04zM2.75 16.3l17.32-10-1.5-2.598-17.32 10 1.5 2.598z"
        fill="currentColor"
      />
    </svg>
  )
}
