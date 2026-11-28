type InvalidMediaTypeProps = {
  mediaType: string
}

export default function InvalidMediaType({ mediaType }: InvalidMediaTypeProps) {
  return (
    <h1 className = 'text-center'>you tried visitind an invalid media type ({mediaType})</h1>
  )
}
