import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        id: 793557,
        fit: {
          create: {
            id: 815339,
            shirt: 'String',
            pants: 'String',
            shoes: 'String',
          },
        },
      },
    },
    two: {
      data: {
        id: 8238075,
        fit: {
          create: {
            id: 749589,
            shirt: 'String',
            pants: 'String',
            shoes: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
