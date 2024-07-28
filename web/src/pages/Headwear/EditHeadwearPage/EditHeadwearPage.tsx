import EditHeadwearCell from 'src/components/Headwear/EditHeadwearCell'

type HeadwearPageProps = {
  id: number
}

const EditHeadwearPage = ({ id }: HeadwearPageProps) => {
  return <EditHeadwearCell id={id} />
}

export default EditHeadwearPage
