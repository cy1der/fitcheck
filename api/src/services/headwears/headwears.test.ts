import type { Headwear } from '@prisma/client'

import {
  headwears,
  headwear,
  createHeadwear,
  updateHeadwear,
  deleteHeadwear,
} from './headwears'
import type { StandardScenario } from './headwears.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('headwears', () => {
  scenario('returns all headwears', async (scenario: StandardScenario) => {
    const result = await headwears()

    expect(result.length).toEqual(Object.keys(scenario.headwear).length)
  })

  scenario('returns a single headwear', async (scenario: StandardScenario) => {
    const result = await headwear({ id: scenario.headwear.one.id })

    expect(result).toEqual(scenario.headwear.one)
  })

  scenario('creates a headwear', async () => {
    const result = await createHeadwear({
      input: { imageUrl: 'String' },
    })

    expect(result.imageUrl).toEqual('String')
  })

  scenario('updates a headwear', async (scenario: StandardScenario) => {
    const original = (await headwear({
      id: scenario.headwear.one.id,
    })) as Headwear
    const result = await updateHeadwear({
      id: original.id,
      input: { imageUrl: 'String2' },
    })

    expect(result.imageUrl).toEqual('String2')
  })

  scenario('deletes a headwear', async (scenario: StandardScenario) => {
    const original = (await deleteHeadwear({
      id: scenario.headwear.one.id,
    })) as Headwear
    const result = await headwear({ id: original.id })

    expect(result).toEqual(null)
  })
})
