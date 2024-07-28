import type { Pant } from '@prisma/client'

import { pants, pant, createPant, updatePant, deletePant } from './pants'
import type { StandardScenario } from './pants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pants', () => {
  scenario('returns all pants', async (scenario: StandardScenario) => {
    const result = await pants()

    expect(result.length).toEqual(Object.keys(scenario.pant).length)
  })

  scenario('returns a single pant', async (scenario: StandardScenario) => {
    const result = await pant({ id: scenario.pant.one.id })

    expect(result).toEqual(scenario.pant.one)
  })

  scenario('creates a pant', async () => {
    const result = await createPant({
      input: { imageUrl: 'String' },
    })

    expect(result.imageUrl).toEqual('String')
  })

  scenario('updates a pant', async (scenario: StandardScenario) => {
    const original = (await pant({ id: scenario.pant.one.id })) as Pant
    const result = await updatePant({
      id: original.id,
      input: { imageUrl: 'String2' },
    })

    expect(result.imageUrl).toEqual('String2')
  })

  scenario('deletes a pant', async (scenario: StandardScenario) => {
    const original = (await deletePant({ id: scenario.pant.one.id })) as Pant
    const result = await pant({ id: original.id })

    expect(result).toEqual(null)
  })
})
