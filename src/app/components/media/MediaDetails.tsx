import Image from 'next/image'
import { getMediaImagesDetails, getMediaDetails, type MediaType } from '@/lib/tmdb/media'

const baseImageUrl = 'https://image.tmdb.org/t/p/original'

type MediaDetailsProps = {
  id: string
  mediaType: MediaType
}

export default async function MediaDetails({ id, mediaType }: MediaDetailsProps) {
  const details = await (await getMediaDetails({ id, mediaType })).json()

  const backdropDetails = await getMediaImagesDetails({ id, imageType: 'backdrops', mediaType })

  const posterDetails = await getMediaImagesDetails({ id, imageType: 'posters', includeTextlessPosters: !backdropDetails, mediaType })
  const fallbackPosterDetails = await getMediaImagesDetails({ id, imageType: 'posters', includeAnyPoster: !posterDetails, mediaType })
  const selectedPosterDetails = posterDetails ?? fallbackPosterDetails

  return (
    <>
      <div className = 'bg-lotion flex flex-col items-center justify-start min-h-[300px] overflow-hidden rounded-4xl shadow-[0_0_10px_10px_var(--color-grey-summit)] w-full'>
        <div className = 'min-w-full relative'>
          {backdropDetails && (
            <>
              <Image
                alt = {`${details.title ?? details.name} (${(details.release_date ?? details.first_air_date).split('-')[0]})'s backdrop`}
                className = 'h-auto w-full'
                height = {backdropDetails.height}
                loading = 'eager'
                src = {`${baseImageUrl}${backdropDetails.file_path}`}
                width = {backdropDetails.width}
              />

              <div
                aria-hidden = 'true'
                className = 'absolute bg-linear-to-b bottom-0 from-transparent h-40 inset-x-0 pointer-events-none to-lotion via-lotion/55'
              />
            </>
          )}

          <div className = '-bottom-15 absolute bg-lotion border-2 border-industrial-black h-[140px] left-3 rounded-sm w-[91px]'>
            {selectedPosterDetails && (
              <Image
                alt = {`${details.title ?? details.name} (${(details.release_date ?? details.first_air_date).split('-')[0]})'s poster`}
                className = 'h-full w-full'
                height = {selectedPosterDetails.height}
                loading = 'eager'
                src = {`${baseImageUrl}${selectedPosterDetails.file_path}`}
                width = {selectedPosterDetails.width}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
