import type { Like } from '@prisma/client'

import { likes, like, createLike, updateLike, deleteLike } from './likes'
import type { StandardScenario } from './likes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('likes', () => {
  scenario('returns all likes', async (scenario: StandardScenario) => {
    const result = await likes()

    expect(result.length).toEqual(Object.keys(scenario.like).length)
  })

  scenario('returns a single like', async (scenario: StandardScenario) => {
    const result = await like({ id: scenario.like.one.id })

    expect(result).toEqual(scenario.like.one)
  })

  scenario('creates a like', async (scenario: StandardScenario) => {
    const result = await createLike({
      input: { id: 5667950, userId: scenario.like.two.userId },
    })

    expect(result.id).toEqual(5667950)
    expect(result.userId).toEqual(scenario.like.two.userId)
  })

  scenario('updates a like', async (scenario: StandardScenario) => {
    const original = (await like({ id: scenario.like.one.id })) as Like
    const result = await updateLike({
      id: original.id,
      input: { id: 7128783 },
    })

    expect(result.id).toEqual(7128783)
  })

  scenario('deletes a like', async (scenario: StandardScenario) => {
    const original = (await deleteLike({ id: scenario.like.one.id })) as Like
    const result = await like({ id: original.id })

    expect(result).toEqual(null)
  })
})
