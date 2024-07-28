import type {
  QueryResolvers,
  MutationResolvers,
  ShirtRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const shirts: QueryResolvers['shirts'] = () => {
  return db.shirt.findMany()
}

export const shirt: QueryResolvers['shirt'] = ({ id }) => {
  return db.shirt.findUnique({
    where: { id },
  })
}

export const createShirt: MutationResolvers['createShirt'] = ({ input }) => {
  return db.shirt.create({
    data: input,
  })
}

export const updateShirt: MutationResolvers['updateShirt'] = ({
  id,
  input,
}) => {
  return db.shirt.update({
    data: input,
    where: { id },
  })
}

export const deleteShirt: MutationResolvers['deleteShirt'] = ({ id }) => {
  return db.shirt.delete({
    where: { id },
  })
}

export const Shirt: ShirtRelationResolvers = {
  Fit: (_obj, { root }) => {
    return db.shirt.findUnique({ where: { id: root?.id } }).Fit()
  },
}
