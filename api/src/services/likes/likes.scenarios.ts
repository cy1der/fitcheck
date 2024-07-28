import type { Prisma, Like } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LikeCreateArgs>({
  like: {
    one: {
      data: {
        id: 1466945,
        user: {
          create: {
            username: 'String9909622',
            email: 'String5589738',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        id: 3415909,
        user: {
          create: {
            username: 'String8359240',
            email: 'String5862533',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Like, 'like'>
