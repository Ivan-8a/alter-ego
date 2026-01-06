import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancel',
}

export default function CancelPage() {
  return (
    <div>
      <h1>Cancel</h1>
      <p>Your subscription has been cancelled.</p>
    </div>
  )
}
