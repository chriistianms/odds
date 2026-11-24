import { IconDice5 } from '@tabler/icons-react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className = 'active:scale-99 bg-strawberry border-3 border-cheese-powder flex items-center justify-center overflow-hidden px-9 py-3 rounded-full transition-transform'
      disabled = {pending}
      type = 'submit'
    >
      <div className = 'flex items-center justify-center text-sugar-milk'>
        <IconDice5
          className = {`${pending ? 'animate-spin' : ''} duration-300 shrink-0 transition-transform`}
          size = {25}
        />
        <div
          className = {`${pending ? 'grid-cols-[0fr] opacity-0' : 'grid-cols-[1fr] pl-2 opacity-100'} duration-300 ease-in-out grid transition-all`}
        >
          <span
            className = {`${pending ? 'translate-x-4' : 'translate-x-0'} duration-300 ease-in-out font-bold font-outfit overflow-hidden text-lg tracking-wider transition-transform uppercase whitespace-nowrap`}
          >
            spin the reel
          </span>
        </div>
      </div>
    </button>
  )
}
