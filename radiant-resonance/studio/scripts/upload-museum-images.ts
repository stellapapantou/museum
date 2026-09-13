import {getCliClient} from 'sanity/cli'
import fs from 'node:fs'
import path from 'node:path'

const client = getCliClient({
  apiVersion: '2025-01-01',
})

const homepageId =
  'drafts.21a79d24-d254-4f40-a43b-9e4669343abe'

const galleryPath = path.resolve(
  process.cwd(),
  '../public/images/gallery',
)

const imageFiles = [
  '01-proti-yli.jpg',
  '02-plysimo.jpg',
  '03-skisimo.jpg',
  '04-nimatopoiisi.jpg',
  '05-vafi.jpg',
  '06-argaleios.jpg',
  '07-foresies.jpg',
  '08-yfanta.jpg',
  '09-kentimata.jpg',
  '10-ergaleia.jpg',
  '11-spiti.jpg',
  '12-mnimes.jpg',
]

console.log('📁 Έλεγχος εικόνων...')

for (const filename of imageFiles) {
  const filePath = path.join(galleryPath, filename)

  if (!fs.existsSync(filePath)) {
    throw new Error(`❌ Δεν βρέθηκε η εικόνα: ${filePath}`)
  }

  console.log(`✓ ${filename}`)
}

const homepage = await client.fetch(
  `*[_id == $id][0]{
    "items": museum.items[]{
      _key,
      title,
      text,
      image
    }
  }`,
  {id: homepageId},
)

if (!homepage?.items || homepage.items.length !== 12) {
  throw new Error(
    `Περιμένουμε 12 museum items, αλλά βρέθηκαν ${homepage?.items?.length ?? 0}.`,
  )
}

console.log('\n📤 Ξεκινάει το upload των εικόνων...\n')

const updatedItems = []

for (let i = 0; i < homepage.items.length; i++) {
  const item = homepage.items[i]
  const filename = imageFiles[i]

  // Αν υπάρχει ήδη εικόνα, δεν την ανεβάζουμε ξανά.
  if (item.image?.asset?._ref) {
    console.log(`↷ ${i + 1}/12 ${filename} — υπάρχει ήδη, παραλείπεται.`)

    updatedItems.push(item)
    continue
  }

  const filePath = path.join(galleryPath, filename)

  console.log(`⬆️ ${i + 1}/12 ${filename}...`)

  const asset = await client.assets.upload(
    'image',
    fs.createReadStream(filePath),
    {
      filename,
    },
  )

  console.log(`   ✓ Uploaded: ${asset._id}`)

  updatedItems.push({
    ...item,
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    },
  })
}

await client
  .patch(homepageId)
  .set({
    'museum.items': updatedItems,
  })
  .commit()

console.log('\n✅ Και οι 12 εικόνες συνδέθηκαν με τα museum items.')