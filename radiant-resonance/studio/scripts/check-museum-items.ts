import {getCliClient} from 'sanity/cli'

const client = getCliClient({
  apiVersion: '2025-01-01',
})

const homepageId =
  'drafts.21a79d24-d254-4f40-a43b-9e4669343abe'

const data = await client.fetch(
  `*[_id == $id][0]{
    "museumTitle": museum.title,
    "items": museum.items[]{
      _key,
      title,
      text,
      "hasImage": defined(image.asset)
    },
    "oldWoolJourney": woolJourney
  }`,
  {id: homepageId},
)

console.log(JSON.stringify(data, null, 2))