'use client'

import MediaTypeSelector from './MediaTypeSelector'
// import Spinner from './Spinner'
import SubmitButton from './SubmitButton'
import { redirectToRandomMedia } from '../../actions/randomizer'

export default function Randomizer() {
  return (
    <form
      action = {redirectToRandomMedia}
      className = 'flex flex-col gap-4 items-center justify-start w-full'
    >
      <MediaTypeSelector />

      {/* <Spinner /> */}

      <SubmitButton />
    </form>
  )
}
