import type { Prisma, Pant } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PantCreateArgs>({
  pant: {
    one: { data: { imageUrl: 'String' } },
    two: { data: { imageUrl: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Pant, 'pant'>
