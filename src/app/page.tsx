import Randomizer from './components/randomizer/Randomizer'

export default function Home() {
  return (
    <>
      <div className = 'flex flex-col gap-1 items-center justify-center'>
        <h2 className = 'font-medium font-outfit text-2xl text-center'>What are we watching today?</h2>

        <h3 className = 'font-extrabold text-caribbean-coral text-xs tracking-widest uppercase'>let the odds decide</h3>
      </div>

      <Randomizer />
    </>
  )
}
