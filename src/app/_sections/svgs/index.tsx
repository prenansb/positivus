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

export function Minus(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={18}
      height={7}
      viewBox="0 0 18 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 6.14V.5h17.76v5.64H0z" fill="#191A23" />
    </svg>
  )
}

export function Plus(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.6 25.58v-9.72H0v-5.64h9.6V.5h5.88v9.72h9.6v5.64h-9.6v9.72H9.6z"
        fill="#191A23"
      />
    </svg>
  )
}

export function Linkedin(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={17} cy={17} r={17} fill="#000" />
      <path
        d="M9.318 25h3.495V13.684H9.318V25zM9 10.072c0 1.116.9 2.019 2.065 2.019a2.015 2.015 0 002.013-2.02c0-1.115-.9-2.071-2.013-2.071A2.071 2.071 0 009 10.072zM22.452 25H26v-6.216c0-3.028-.689-5.418-4.237-5.418-1.695 0-2.86.956-3.336 1.859h-.053v-1.54h-3.337V25h3.496v-5.578c0-1.488.264-2.922 2.118-2.922 1.8 0 1.8 1.7 1.8 2.975V25z"
        fill="#B9FF66"
      />
    </svg>
  )
}
