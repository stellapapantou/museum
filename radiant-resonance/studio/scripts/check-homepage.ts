import {getCliClient} from 'sanity/cli'

const client = getCliClient()

async function check() {
  const documents = await client.fetch(`
    *[
      _type == "homepage" &&
      (_id == "21a79d24-d254-4f40-a43b-9e4669343abe" ||
       _id == "drafts.21a79d24-d254-4f40-a43b-9e4669343abe")
    ]{
      _id,
      _type,
      woolJourney
    }
  `)

  console.log(JSON.stringify(documents, null, 2))
}

check().catch((error) => {
  console.error(error)
  process.exit(1)
})
