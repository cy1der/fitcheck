import ShirtCell from 'src/components/Shirt/ShirtCell'

type ShirtPageProps = {
  id: number
}

const ShirtPage = ({ id }: ShirtPageProps) => {
  return <ShirtCell id={id} />
}

export default ShirtPage
