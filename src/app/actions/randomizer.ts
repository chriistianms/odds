'use server'

import { discoverMedia, type MediaType } from '@/lib/tmdb/media'
import { redirect } from 'next/navigation'

export async function redirectToRandomMedia(formData: FormData) {
  const userSelectedMediaType = formData.get('mediaType')
  let mediaType: MediaType

  switch (userSelectedMediaType) {
    case 'movie':
      mediaType = 'movie'
      break

    case 'tv':
      mediaType = 'tv'
      break

    default:
      const randomMediaType = Math.random() < 0.5 ? 'movie' : 'tv'
      mediaType = randomMediaType
  }

  const errorMessageMediaType = mediaType === 'movie' ? 'movies' : 'tv shows'

  const page = Math.floor(Math.random() * 500) + 1

  const res = await discoverMedia({ mediaType, page })

  if (!res.ok) {
    throw new Error(`failed to fetch a set of ${errorMessageMediaType} from tmdb api (page #${page}).`)
  }

  const data = await res.json()
  const results = data.results ?? []

  if (results.length === 0) {
    throw new Error(`no ${errorMessageMediaType} were returned by tmdb for the 'discover/${mediaType}' endpoint on page #${page}.`)
  }

  const randomIndex = results[Math.floor(Math.random() * results.length)]

  if (!randomIndex) {
    throw new Error(`failed to select a random item from the set of ${errorMessageMediaType} returned by tmdb for the 'discover/${mediaType}' endpoint on page #${page}.`)
  }

  redirect(`/media/${mediaType}/${randomIndex.id}`)
}
