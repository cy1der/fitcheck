import type { Prisma, Shirt } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ShirtCreateArgs>({
  shirt: {
    one: { data: { imageUrl: 'String' } },
    two: { data: { imageUrl: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Shirt, 'shirt'>
