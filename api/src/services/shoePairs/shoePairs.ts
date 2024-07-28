import type {
  QueryResolvers,
  MutationResolvers,
  ShoesRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const shoePairs: QueryResolvers['shoePairs'] = () => {
  return db.shoes.findMany()
}

export const shoes: QueryResolvers['shoes'] = ({ id }) => {
  return db.shoes.findUnique({
    where: { id },
  })
}

export const createShoes: MutationResolvers['createShoes'] = ({ input }) => {
  return db.shoes.create({
    data: input,
  })
}

export const updateShoes: MutationResolvers['updateShoes'] = ({
  id,
  input,
}) => {
  return db.shoes.update({
    data: input,
    where: { id },
  })
}

export const deleteShoes: MutationResolvers['deleteShoes'] = ({ id }) => {
  return db.shoes.delete({
    where: { id },
  })
}

export const Shoes: ShoesRelationResolvers = {
  Fit: (_obj, { root }) => {
    return db.shoes.findUnique({ where: { id: root?.id } }).Fit()
  },
}
