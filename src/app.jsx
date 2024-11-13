import { useLayoutEffect } from 'preact/hooks'
import { MakeTenoxUI } from '@tenoxui/core/full'
import { property } from '@tenoxui/property'
import { generateColors } from '@nousantx/color-generator'

export function App() {
  const values = generateColors({
    option: {
      format: 'object2',
      prefix: 'tx-'
    },
    color: {
      neutral: '#575757',
      primary: '#f11174',
      red: '#e01515'
    }
  })

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'child',
      `
    (body): bg-tx-neutral-950 text-tx-neutral-50;
    (main): p-2rem d-flex flex-parent-center h-mn-100vh;
    (header): tw-balance ta-center;
    (h1): fs-2.5rem lh-1 fw-500 family-poppins ls--0.035em;
    (p): fs-14px lh-1.3 ls--0.015em text-tx-neutral-300 fw-500;
    `
    )

    document.querySelectorAll('*').forEach((element) => {
      new MakeTenoxUI({
        element,
        property,
        values,
        attributify: true
      }).useDOM()
    })
  }, [])

  return (
    <>
      <main>
        <header>
          <h1>Hello world, its a great day to try tenoxui!</h1>
          <p class="mt-1rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </header>
      </main>
    </>
  )
}
