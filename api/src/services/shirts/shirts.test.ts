import type { Shirt } from '@prisma/client'

import { shirts, shirt, createShirt, updateShirt, deleteShirt } from './shirts'
import type { StandardScenario } from './shirts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shirts', () => {
  scenario('returns all shirts', async (scenario: StandardScenario) => {
    const result = await shirts()

    expect(result.length).toEqual(Object.keys(scenario.shirt).length)
  })

  scenario('returns a single shirt', async (scenario: StandardScenario) => {
    const result = await shirt({ id: scenario.shirt.one.id })

    expect(result).toEqual(scenario.shirt.one)
  })

  scenario('creates a shirt', async () => {
    const result = await createShirt({
      input: { imageUrl: 'String' },
    })

    expect(result.imageUrl).toEqual('String')
  })

  scenario('updates a shirt', async (scenario: StandardScenario) => {
    const original = (await shirt({ id: scenario.shirt.one.id })) as Shirt
    const result = await updateShirt({
      id: original.id,
      input: { imageUrl: 'String2' },
    })

    expect(result.imageUrl).toEqual('String2')
  })

  scenario('deletes a shirt', async (scenario: StandardScenario) => {
    const original = (await deleteShirt({ id: scenario.shirt.one.id })) as Shirt
    const result = await shirt({ id: original.id })

    expect(result).toEqual(null)
  })
})
