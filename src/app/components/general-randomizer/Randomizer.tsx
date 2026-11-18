'use client'

import { redirectToSelectedMedia } from '../../actions'
import SubmitButton from './SubmitButton'

export default function Randomizer() {
  return (
    <form
      action = {redirectToSelectedMedia}
      className = 'flex flex-col justify-start items-center'
    >
      <SubmitButton />
    </form>
  )
}
