import Randomizer from './components/landing-randomizer/Randomizer'

export default function Home() {
  return (
    <>
      <h2 className = 'font-[400] font-prompt text-2xl text-center'>What are we watching today?</h2>

      <Randomizer />
    </>
  )
}
