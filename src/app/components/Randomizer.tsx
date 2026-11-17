'use client'

import { redirectToSelectedMedia } from '../actions'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type = "submit" disabled = {pending}>
      {pending ? 'randomizing...' : 'randomize'}
    </button>
  )
}

export default function Randomizer() {
  return (
    <form action = {redirectToSelectedMedia}>
      <SubmitButton />
    </form>
  )
}
