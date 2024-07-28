import type { Prisma, Headwear } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.HeadwearCreateArgs>({
  headwear: {
    one: { data: { imageUrl: 'String' } },
    two: { data: { imageUrl: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Headwear, 'headwear'>
