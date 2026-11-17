'use server'

import { redirect } from 'next/navigation'

const tmdbApiKey = process.env.TMDB_API_KEY

if (!tmdbApiKey) {
  throw new Error('tmdb api key is not defined in the environment variables.')
}

export async function redirectToSelectedMedia() {
  const mediaType = Math.random() < 0.5 ? 'movie' : 'tv'
  const randomPage = Math.floor(Math.random() * 500) + 1
  const tmdbBaseUrl = 'https://api.themoviedb.org/3'

  const errorMessageMediaType = mediaType === 'movie' ? 'movies' : 'tv shows'

  const res = await fetch(`${tmdbBaseUrl}/discover/${mediaType}?api_key=${tmdbApiKey}&page=${randomPage}&include_adult=true`)

  if (!res.ok) {
    throw new Error(`failed to fetch a set of ${errorMessageMediaType} from tmdb api (page #${randomPage}).`)
  }

  const data = await res.json()
  const results = data.results ?? []

  if (results.length === 0) {
    throw new Error(`no ${errorMessageMediaType} were returned by tmdb for the 'discover/${mediaType}' endpoint on page #${randomPage}.`)
  }

  const randomIndex = results[Math.floor(Math.random() * results.length)]

  if (!randomIndex) {
    throw new Error(`failed to select a random item from the set of ${errorMessageMediaType} returned by tmdb for the 'discover/${mediaType}' endpoint on page #${randomPage}.`)
  }

  redirect(`/media/${mediaType}/${randomIndex.id}`)
}
