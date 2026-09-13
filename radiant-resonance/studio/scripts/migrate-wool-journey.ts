import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function migrate() {
  console.log('🔎 Reading existing homepage...')

  const homepage = await client.fetch(
    `*[_type == "homepage"][0]{
      _id,
      _type,
      woolJourney
    }`
  )

  if (!homepage) {
    throw new Error('Δεν βρέθηκε document τύπου homepage.')
  }

  console.log(`Homepage ID: ${homepage._id}`)

  if (!homepage.woolJourney) {
    throw new Error('Δεν βρέθηκε το woolJourney στο homepage document.')
  }

  const steps = homepage.woolJourney.steps || []

  console.log(`Βρέθηκαν ${steps.length} woolJourney steps.`)

  if (steps.length === 0) {
    throw new Error('Το woolJourney δεν περιέχει steps. Σταματάμε χωρίς αλλαγές.')
  }

  console.log('')
  console.log('=== ΠΡΟΕΠΙΣΚΟΠΗΣΗ ===')
  console.log(`Τίτλος: ${homepage.woolJourney.title}`)
  console.log('')

  steps.forEach((step: any, index: number) => {
    console.log(`${index + 1}. ${step.title || '(χωρίς τίτλο)'}`)
    console.log(`   text: ${step.description || '(χωρίς description)'}`)
    console.log(`   image: ${step.image ? 'ΝΑΙ' : 'ΟΧΙ'}`)
    console.log('')
  })

  console.log('⚠️ DRY RUN — Δεν έγινε καμία αλλαγή.')
  console.log('Αν τα παραπάνω είναι σωστά, θα κάνουμε το πραγματικό migration στο επόμενο βήμα.')
}

migrate().catch((error) => {
  console.error('❌ Migration failed:')
  console.error(error)
  process.exit(1)
})
