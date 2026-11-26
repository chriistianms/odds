'use client'

import MediaTypeSelector from '@/app/components/landing/randomizer/MediaTypeSelector'
// import Spinner from '@/app/components/landing/randomizer/Spinner'
import SubmitButton from '@/app/components/landing/randomizer/SubmitButton'
import { redirectToRandomMedia } from '@/app/actions/randomizer'

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
