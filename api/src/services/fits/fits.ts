import type {
  QueryResolvers,
  MutationResolvers,
  FitRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const fits: QueryResolvers['fits'] = () => {
  return db.fit.findMany()
}

export const fit: QueryResolvers['fit'] = ({ id }) => {
  return db.fit.findUnique({
    where: { id },
  })
}

export const createFit: MutationResolvers['createFit'] = ({ input }) => {
  return db.fit.create({
    data: input,
  })
}

export const updateFit: MutationResolvers['updateFit'] = ({ id, input }) => {
  return db.fit.update({
    data: input,
    where: { id },
  })
}

export const deleteFit: MutationResolvers['deleteFit'] = ({ id }) => {
  return db.fit.delete({
    where: { id },
  })
}

export const Fit: FitRelationResolvers = {
  top: (_obj, { root }) => {
    return db.fit.findUnique({ where: { id: root?.id } }).top()
  },
  shirt: (_obj, { root }) => {
    return db.fit.findUnique({ where: { id: root?.id } }).shirt()
  },
  pants: (_obj, { root }) => {
    return db.fit.findUnique({ where: { id: root?.id } }).pants()
  },
  shoes: (_obj, { root }) => {
    return db.fit.findUnique({ where: { id: root?.id } }).shoes()
  },
  Post: (_obj, { root }) => {
    return db.fit.findUnique({ where: { id: root?.id } }).Post()
  },
  User: (_obj, { root }) => {
    return db.fit.findUnique({ where: { id: root?.id } }).User()
  },
}
