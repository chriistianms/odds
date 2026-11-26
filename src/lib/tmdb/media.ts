import 'server-only'

const tmdbApiKey = process.env.TMDB_API_KEY
const tmdbBaseUrl = process.env.API_URL

export type MediaType = 'movie' | 'tv'

interface DiscoverMedia {
  mediaType: MediaType
  page: number
}

export async function discoverMedia({ mediaType, page }: DiscoverMedia) {
  return fetch(`${tmdbBaseUrl}/discover/${mediaType}?api_key=${tmdbApiKey}&page=${page}&include_adult=true`)
}
