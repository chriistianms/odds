import InvalidMediaType from '@/app/components/media/InvalidMediaType'
import MediaDetails from '@/app/components/media/MediaDetails'
import type { MediaType } from '@/lib/tmdb/media'
import { Suspense } from 'react'

interface PageProps {
  params: Promise<{
    id: string
    mediaType: string
  }>
}

function isMediaType(value: string): value is MediaType {
  return value === 'movie' || value === 'tv'
}

async function MediaPageContent({ params }: PageProps) {
  const { id, mediaType } = await params

  if (!isMediaType(mediaType)) {
    return <InvalidMediaType mediaType = {mediaType} />
  }

  return <MediaDetails id = {id} mediaType = {mediaType} />
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback = {<p>loading details...</p>}>
      <MediaPageContent params = {params} />
    </Suspense>
  )
}
