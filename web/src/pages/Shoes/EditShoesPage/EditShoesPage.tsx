import EditShoesCell from 'src/components/Shoes/EditShoesCell'

type ShoesPageProps = {
  id: number
}

const EditShoesPage = ({ id }: ShoesPageProps) => {
  return <EditShoesCell id={id} />
}

export default EditShoesPage
