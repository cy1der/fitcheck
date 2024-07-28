import EditShirtCell from 'src/components/Shirt/EditShirtCell'

type ShirtPageProps = {
  id: number
}

const EditShirtPage = ({ id }: ShirtPageProps) => {
  return <EditShirtCell id={id} />
}

export default EditShirtPage
