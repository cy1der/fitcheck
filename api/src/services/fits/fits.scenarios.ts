import type { Prisma, Fit } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FitCreateArgs>({
  fit: {
    one: {
      data: {
        id: 7891793,
        shirt: { create: { imageUrl: 'String' } },
        pants: { create: { imageUrl: 'String' } },
        shoes: { create: { imageUrl: 'String' } },
      },
    },
    two: {
      data: {
        id: 5408427,
        shirt: { create: { imageUrl: 'String' } },
        pants: { create: { imageUrl: 'String' } },
        shoes: { create: { imageUrl: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Fit, 'fit'>
