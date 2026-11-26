import 'server-only'

const tmdbApiKey = process.env.TMDB_API_KEY
const tmdbBaseUrl = process.env.API_URL

if (!tmdbApiKey) {
  throw new Error('tmdb api key is not defined in the environment variables.')
}

export type MediaType = 'movie' | 'tv'

interface DiscoverMedia {
  mediaType: MediaType
  page: number
}

export async function discoverMedia({ mediaType, page }: DiscoverMedia) {
  return fetch(`${tmdbBaseUrl}/discover/${mediaType}?api_key=${tmdbApiKey}&page=${page}&include_adult=true`)
}
