import 'server-only'

const tmdbApiKey = process.env.TMDB_API_KEY
const tmdbBaseUrl = process.env.API_URL

export type MediaType = 'movie' | 'tv'

interface DiscoverMediaProps {
  mediaType: MediaType
  page: number
}

export async function discoverMedia({ mediaType, page }: DiscoverMediaProps) {
  return fetch(`${tmdbBaseUrl}/discover/${mediaType}?api_key=${tmdbApiKey}&page=${page}&include_adult=true`)
}

interface MediaDetailsProps {
  id: string
  mediaType: MediaType
}

export async function getMediaDetails({ id, mediaType }: MediaDetailsProps) {
  return fetch(`${tmdbBaseUrl}/${mediaType}/${id}?api_key=${tmdbApiKey}`)
}

interface CheckMediaExistanceProps {
  id: string
  mediaType: MediaType
}

export async function checkMediaExistance({ id, mediaType }: CheckMediaExistanceProps) {
  return (await getMediaDetails({ id, mediaType })).ok
}
