import FitCell from 'src/components/Fit/FitCell'

type FitPageProps = {
  id: number
}

const FitPage = ({ id }: FitPageProps) => {
  return <FitCell id={id} />
}

export default FitPage
