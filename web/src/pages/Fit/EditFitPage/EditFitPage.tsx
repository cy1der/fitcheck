import EditFitCell from 'src/components/Fit/EditFitCell'

type FitPageProps = {
  id: number
}

const EditFitPage = ({ id }: FitPageProps) => {
  return <EditFitCell id={id} />
}

export default EditFitPage
