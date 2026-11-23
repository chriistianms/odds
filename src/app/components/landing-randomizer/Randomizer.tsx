import Spinner from './Spinner'
import SubmitButton from './SubmitButton'
import { redirectToSelectedMedia } from '../../actions'

export default function Randomizer() {
  return (
    <form
      action = {redirectToSelectedMedia}
      className = 'flex flex-col gap-4 items-center justify-start w-full'
    >
      <Spinner />

      <SubmitButton />
    </form>
  )
}
