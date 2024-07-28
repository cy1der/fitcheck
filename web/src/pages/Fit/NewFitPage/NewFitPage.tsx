import NewFit from 'src/components/Fit/NewFit'

interface NewFitPageProps {
  headwear?: number
  shirt?: number
  pants?: number
  shoes?: number
}

const NewFitPage = ({ headwear, shirt, pants, shoes }: NewFitPageProps) => {
  return (
    <NewFit headwear={headwear} shirt={shirt} pants={pants} shoes={shoes} />
  )
}

export default NewFitPage
