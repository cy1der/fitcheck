import EditPantCell from 'src/components/Pant/EditPantCell'

type PantPageProps = {
  id: number
}

const EditPantPage = ({ id }: PantPageProps) => {
  return <EditPantCell id={id} />
}

export default EditPantPage
