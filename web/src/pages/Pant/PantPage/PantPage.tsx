import PantCell from 'src/components/Pant/PantCell'

type PantPageProps = {
  id: number
}

const PantPage = ({ id }: PantPageProps) => {
  return <PantCell id={id} />
}

export default PantPage
