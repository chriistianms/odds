import type { MediaType } from '@/lib/tmdb/media'

type InvalidMediaIdProps = {
  id: string
  mediaType: MediaType
}

export default function InvalidMediaId(mediaType: InvalidMediaIdProps) {
  return (
    <h1>wrong id</h1>
  )
}
