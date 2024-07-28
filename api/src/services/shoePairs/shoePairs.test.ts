import type { Shoes } from '@prisma/client'

import {
  shoePairs,
  shoes,
  createShoes,
  updateShoes,
  deleteShoes,
} from './shoePairs'
import type { StandardScenario } from './shoePairs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shoePairs', () => {
  scenario('returns all shoePairs', async (scenario: StandardScenario) => {
    const result = await shoePairs()

    expect(result.length).toEqual(Object.keys(scenario.shoes).length)
  })

  scenario('returns a single shoes', async (scenario: StandardScenario) => {
    const result = await shoes({ id: scenario.shoes.one.id })

    expect(result).toEqual(scenario.shoes.one)
  })

  scenario('creates a shoes', async () => {
    const result = await createShoes({
      input: { imageUrl: 'String' },
    })

    expect(result.imageUrl).toEqual('String')
  })

  scenario('updates a shoes', async (scenario: StandardScenario) => {
    const original = (await shoes({ id: scenario.shoes.one.id })) as Shoes
    const result = await updateShoes({
      id: original.id,
      input: { imageUrl: 'String2' },
    })

    expect(result.imageUrl).toEqual('String2')
  })

  scenario('deletes a shoes', async (scenario: StandardScenario) => {
    const original = (await deleteShoes({ id: scenario.shoes.one.id })) as Shoes
    const result = await shoes({ id: original.id })

    expect(result).toEqual(null)
  })
})
