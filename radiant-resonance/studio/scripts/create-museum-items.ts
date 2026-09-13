import {getCliClient} from 'sanity/cli'

const client = getCliClient({
  apiVersion: '2025-01-01',
})

const homepageId =
  'drafts.21a79d24-d254-4f40-a43b-9e4669343abe'

const museumItems = [
  {
    title: 'Πρώτη ύλη',
    text: 'Μαλλί από πρόβατα της Πίνδου, όπως το έφερναν οι παλιοί.',
    imagePath: '/images/gallery/01-proti-yli.jpg',
  },
  {
    title: 'Πλύσιμο',
    text: 'Το μαλλί καθαριζόταν με νερό και κυκλικά αυτοσχέδια.',
    imagePath: '/images/gallery/02-plysimo.jpg',
  },
  {
    title: 'Σκάσιμο',
    text: 'Οι ίνες χτενίζονταν ώστε να γίνουν απαλές και ομοιόμορφες.',
    imagePath: '/images/gallery/03-skisimo.jpg',
  },
  {
    title: 'Νηματοποίηση',
    text: 'Οι ίνες γυρίζονταν νήμα με το αδράχτι ή τη ρόκα.',
    imagePath: '/images/gallery/04-nimatopoiisi.jpg',
  },
  {
    title: 'Βαφή',
    text: 'Τα νήματα βάφονταν με φυσικές φυτικές βαφές από ρίζες και φύλλα.',
    imagePath: '/images/gallery/05-vafi.jpg',
  },
  {
    title: 'Αργαλειός',
    text: 'Το νήμα τοποθετείται στον αργαλειό, στον στημόνι, τον χτένι και αρχίζει το ύφασμα.',
    imagePath: '/images/gallery/06-argaleios.jpg',
  },
  {
    title: 'Παραδοσιακές φορεσιές',
    text: 'Φορεσιές και υφαντά της περιοχής με μεράκι και τέχνη.',
    imagePath: '/images/gallery/07-foresies.jpg',
  },
  {
    title: 'Υφαντά & διακοσμητικά',
    text: 'Μοτίβα και χρώματα που κουβαλούν μνήμες και ιστορίες.',
    imagePath: '/images/gallery/08-yfanta.jpg',
  },
  {
    title: 'Κεντήματα & ταπές',
    text: 'Κεντήματα και υφαντά που στόλιζαν σπίτια και προίκες.',
    imagePath: '/images/gallery/09-kentimata.jpg',
  },
  {
    title: 'Εργαλεία του παλιού καιρού',
    text: 'Αδράχτια, παλαμάρια, κουρούνια και άλλα εργαλεία που έφτιαχναν το νήμα.',
    imagePath: '/images/gallery/10-ergaleia.jpg',
  },
  {
    title: 'Η γωνιά του σπιτιού',
    text: 'Αναπαράσταση παραδοσιακού σπιτιού, όπως ήταν κάποτε.',
    imagePath: '/images/gallery/11-spiti.jpg',
  },
  {
    title: 'Μνήμες',
    text: 'Τα πρόσωπα της γιαγιάς μας ζωντανεύουν κάθε γωνιά του μουσείου.',
    imagePath: '/images/gallery/12-mnimes.jpg',
  },
]

const existing = await client.fetch(
  `*[_id == $id][0].museum.items[]{
    _key,
    title,
    text,
    image
  }`,
  {id: homepageId},
)

console.log(`Υπάρχουν ήδη ${existing?.length ?? 0} items.`)

const existingItems = existing ?? []

if (existingItems.length > museumItems.length) {
  throw new Error(
    `Υπάρχουν ${existingItems.length} items. Δεν θα διαγράψουμε κανένα.`,
  )
}

const updatedItems = museumItems.map((item, index) => {
  const existingItem = existingItems[index]

  return {
    _key: existingItem?._key ?? crypto.randomUUID().replace(/-/g, '').slice(0, 12),
    _type: 'museumItem',
    title: item.title,
    text: item.text,
    ...(existingItem?.image
      ? {image: existingItem.image}
      : {}),
  }
})

await client
  .patch(homepageId)
  .set({
    'museum.title': 'ΜΕΣΑ ΣΤΟ ΜΟΥΣΕΙΟ',
    'museum.items': updatedItems,
  })
  .commit()

console.log('✅Δημιουργήθηκαν/συμπληρώθηκαν και τα 12 museum items.') 