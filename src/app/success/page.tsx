import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success',
}

export default function SuccessPage() {
  return (
    <div>
      <h1>Success</h1>
      <p>Your payment was successful!</p>
    </div>
  )
}
