import { useState } from 'react'

export default function MediaTypeSelector() {
  const types = [
    {
      id: 'all',
      label: 'All',
      value: 'all'
    },
    {
      id: 'movies',
      label: 'Movies',
      value: 'movie'
    },
    {
      id: 'tv',
      label: 'TV Shows',
      value: 'tv'
    }
  ]

  const [selected, setSelected] = useState('all')
  const selectedIndex = types.findIndex((type) => type.value === selected)

  return (
    <div className = 'bg-linear-to-b border border-song-of-summer from-soft-pillow mb-2 p-1 rounded-full to-cheese-powder w-[90%]'>
      <div className = 'grid grid-cols-3 relative'>
        <div
          className = 'absolute bg-linear-to-b duration-300 from-bara-red inset-y-0 left-0 rounded-full to-strawberry transition-transform w-1/3'
          style = {{ transform: `translateX(${selectedIndex * 100}%)` }}
        />

        {types.map((type) => (
          <div key = {type.id}>
            <input
              className = 'peer sr-only'
              checked = {selected === type.value}
              id = {type.id}
              name = 'mediaType'
              onChange = {() => setSelected(type.value)}
              type = 'radio'
              value = {type.value}
            />

            <label
              className = 'duration-100 flex font-medium font-outfit items-center justify-center peer-checked:text-sugar-milk px-2 py-1 relative rounded-full text-center transition-colors w-full z-10'
              htmlFor = {type.id}
            >
              {type.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
