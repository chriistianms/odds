import 'server-only'

const tmdbApiKey = process.env.TMDB_API_KEY
const tmdbBaseUrl = process.env.API_URL

export type MediaType = 'movie' | 'tv'
type ImageType = 'backdrops' | 'logos' | 'posters'

interface IdAndMediaTypeProps {
  id: string
  mediaType: MediaType
}

interface MediaTypeAndPageProps {
  mediaType: MediaType
  page: number
}

interface WithImageType extends IdAndMediaTypeProps {
  imageType: ImageType
  includeAnyPoster?: boolean
  includeTextlessPosters?: boolean
  specificImage?: number
}

export async function checkMediaExistance({ id, mediaType }: IdAndMediaTypeProps) {
  return (await getMediaDetails({ id, mediaType })).ok
}

export async function discoverMedia({ mediaType, page }: MediaTypeAndPageProps) {
  return fetch(`${tmdbBaseUrl}/discover/${mediaType}?api_key=${tmdbApiKey}&page=${page}&include_adult=true`)
}

async function getAnyPoster({ id, mediaType }: IdAndMediaTypeProps) {
  return await (await fetch(`${tmdbBaseUrl}/${mediaType}/${id}/images?api_key=${tmdbApiKey}`)).json()
}

export async function getMediaImagesDetails({ id, imageType, includeAnyPoster = false, includeTextlessPosters = false, mediaType, specificImage = 0 }: WithImageType) {
  const data = await (await fetch(`${tmdbBaseUrl}/${mediaType}/${id}/images?api_key=${tmdbApiKey}&include_image_language=${(imageType === 'backdrops') || includeTextlessPosters ? 'en,null' : 'en'}`)).json()

  if (includeAnyPoster) {
    const fallbackPoster = await (await getAnyPoster({ id, mediaType }))

    return fallbackPoster['posters'][specificImage]
  }

  return data[imageType][specificImage]
}

export async function getMediaDetails({ id, mediaType }: IdAndMediaTypeProps) {
  return fetch(`${tmdbBaseUrl}/${mediaType}/${id}?api_key=${tmdbApiKey}`)
}
