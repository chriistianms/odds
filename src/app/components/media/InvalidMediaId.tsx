type InvalidMediaIdProps = {
  id: string
}

export default function InvalidMediaId({ id }: InvalidMediaIdProps) {
  return (
    <h1 className = 'text-center'>you tried visiting an invalid id ({id})</h1>
  )
}
