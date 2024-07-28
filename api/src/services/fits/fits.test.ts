import type { Fit } from '@prisma/client'

import { fits, fit, createFit, updateFit, deleteFit } from './fits'
import type { StandardScenario } from './fits.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('fits', () => {
  scenario('returns all fits', async (scenario: StandardScenario) => {
    const result = await fits()

    expect(result.length).toEqual(Object.keys(scenario.fit).length)
  })

  scenario('returns a single fit', async (scenario: StandardScenario) => {
    const result = await fit({ id: scenario.fit.one.id })

    expect(result).toEqual(scenario.fit.one)
  })

  scenario('creates a fit', async (scenario: StandardScenario) => {
    const result = await createFit({
      input: {
        id: 9364145,
        shirtId: scenario.fit.two.shirtId,
        pantId: scenario.fit.two.pantId,
        shoesId: scenario.fit.two.shoesId,
      },
    })

    expect(result.id).toEqual(9364145)
    expect(result.shirtId).toEqual(scenario.fit.two.shirtId)
    expect(result.pantId).toEqual(scenario.fit.two.pantId)
    expect(result.shoesId).toEqual(scenario.fit.two.shoesId)
  })

  scenario('updates a fit', async (scenario: StandardScenario) => {
    const original = (await fit({ id: scenario.fit.one.id })) as Fit
    const result = await updateFit({
      id: original.id,
      input: { id: 3817557 },
    })

    expect(result.id).toEqual(3817557)
  })

  scenario('deletes a fit', async (scenario: StandardScenario) => {
    const original = (await deleteFit({ id: scenario.fit.one.id })) as Fit
    const result = await fit({ id: original.id })

    expect(result).toEqual(null)
  })
})
