import HeadwearCell from 'src/components/Headwear/HeadwearCell'

type HeadwearPageProps = {
  id: number
}

const HeadwearPage = ({ id }: HeadwearPageProps) => {
  return <HeadwearCell id={id} />
}

export default HeadwearPage
