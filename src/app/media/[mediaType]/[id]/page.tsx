import { Suspense } from 'react'

interface Params {
  params: Promise<{
    mediaType: string
    id: string
  }>
}

async function MediaDetails({ params }: Params) {
  const { mediaType, id } = await params

  return (
    <>
      <h1>{id} - {mediaType}</h1>
    </>
  )
}

export default function Page({ params }: Params) {
  return (
    <Suspense fallback = {<p>loading details...</p>}>
      <MediaDetails params = {params} />
    </Suspense>
  )
}
