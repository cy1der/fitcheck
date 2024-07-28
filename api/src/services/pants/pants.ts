import type {
  QueryResolvers,
  MutationResolvers,
  PantRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const pants: QueryResolvers['pants'] = () => {
  return db.pant.findMany()
}

export const pant: QueryResolvers['pant'] = ({ id }) => {
  return db.pant.findUnique({
    where: { id },
  })
}

export const createPant: MutationResolvers['createPant'] = ({ input }) => {
  return db.pant.create({
    data: input,
  })
}

export const updatePant: MutationResolvers['updatePant'] = ({ id, input }) => {
  return db.pant.update({
    data: input,
    where: { id },
  })
}

export const deletePant: MutationResolvers['deletePant'] = ({ id }) => {
  return db.pant.delete({
    where: { id },
  })
}

export const Pant: PantRelationResolvers = {
  Fit: (_obj, { root }) => {
    return db.pant.findUnique({ where: { id: root?.id } }).Fit()
  },
}
