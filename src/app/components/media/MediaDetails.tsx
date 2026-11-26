import type { MediaType } from '@/lib/tmdb/media'

type MediaDetailsProps = {
  id: string
  mediaType: MediaType
}

export default function MediaDetails({ id, mediaType }: MediaDetailsProps) {
  return (
    <h1>correct id & media type</h1>
  )
}
