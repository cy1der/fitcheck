import type {
  QueryResolvers,
  MutationResolvers,
  HeadwearRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const headwears: QueryResolvers['headwears'] = () => {
  return db.headwear.findMany()
}

export const headwear: QueryResolvers['headwear'] = ({ id }) => {
  return db.headwear.findUnique({
    where: { id },
  })
}

export const createHeadwear: MutationResolvers['createHeadwear'] = ({
  input,
}) => {
  return db.headwear.create({
    data: input,
  })
}

export const updateHeadwear: MutationResolvers['updateHeadwear'] = ({
  id,
  input,
}) => {
  return db.headwear.update({
    data: input,
    where: { id },
  })
}

export const deleteHeadwear: MutationResolvers['deleteHeadwear'] = ({ id }) => {
  return db.headwear.delete({
    where: { id },
  })
}

export const Headwear: HeadwearRelationResolvers = {
  Fit: (_obj, { root }) => {
    return db.headwear.findUnique({ where: { id: root?.id } }).Fit()
  },
}
