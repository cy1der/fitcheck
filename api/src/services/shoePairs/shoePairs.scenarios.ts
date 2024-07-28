import type { Prisma, Shoes } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ShoesCreateArgs>({
  shoes: {
    one: { data: { imageUrl: 'String' } },
    two: { data: { imageUrl: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Shoes, 'shoes'>
