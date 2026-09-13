import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const visitPage = {
  _id: 'visitPage',
  _type: 'visitPage',

  title: 'Η ΚΡΑΝΙΑ & Η ΠΙΝΔΟΣ',

  intro: `Η Κρανιά είναι ένα όμορφο χωριό στην καρδιά της Πίνδου,
περιτριγυρισμένο από βουνά, δάση και ποτάμια.`,

  kraniaTitle: 'Η ΚΡΑΝΙΑ ΓΡΕΒΕΝΩΝ',

  kraniaText: `Ένας τόπος με μακρά παράδοση, όπου η ζωή των ανθρώπων
ήταν για αιώνες δεμένη με τη φύση, την κτηνοτροφία,
την υφαντική και τα παραδοσιακά επαγγέλματα.

Το χωριό διατηρεί ακόμη τον χαρακτήρα και τις μνήμες
μιας άλλης εποχής και αποτελεί ιδανικό σημείο για να
γνωρίσετε την Πίνδο και την ιστορία της.`,

  bridgesTitle: 'Εξερευνήστε τα γεφύρια',

  bridgesText: `Ανακαλύψτε τα παραδοσιακά πέτρινα γεφύρια της περιοχής
και γνωρίστε ένα σημαντικό κομμάτι της ιστορίας και
της αρχιτεκτονικής της Πίνδου.`,

  valiaKaldaTitle: 'Βάλια Κάλντα',

  valiaKaldaText: `Επισκεφθείτε τη Βάλια Κάλντα και γνωρίστε ένα από τα
πιο εντυπωσιακά τοπία της Πίνδου, μέσα σε ένα μοναδικό
φυσικό περιβάλλον.`,

  activitiesTitle: 'ΤΙ ΝΑ ΚΑΝΕΤΕ ΣΤΗΝ ΠΕΡΙΟΧΗ',

  activitiesText: `01 — Εξερευνήστε τα γεφύρια

Ανακαλύψτε τα παραδοσιακά πέτρινα γεφύρια της περιοχής
και γνωρίστε ένα σημαντικό κομμάτι της ιστορίας και
της αρχιτεκτονικής της Πίνδου.

02 — Βάλια Κάλντα

Επισκεφθείτε τη Βάλια Κάλντα και γνωρίστε ένα από τα
πιο εντυπωσιακά τοπία της Πίνδου, μέσα σε ένα μοναδικό
φυσικό περιβάλλον.

03 — Πεζοπορία στη φύση

Περιπατητικές διαδρομές μέσα στα δάση και στα βουνά
της περιοχής προσφέρουν την ευκαιρία να απολαύσετε
το φυσικό τοπίο.

04 — Γνωρίστε τα χωριά της Πίνδου

Κάντε μια βόλτα στα γύρω χωριά, ανακαλύψτε πέτρινα
σπίτια, πλατείες, εκκλησίες και μικρές ιστορίες
που συνεχίζουν να ζουν στον τόπο.`,

  seoTitle: 'Η Κρανιά & η Πίνδος | Το Μονοπάτι του Μαλλιού',

  seoDescription:
    'Γνωρίστε την Κρανιά Γρεβενών, τα πέτρινα γεφύρια, τη Βάλια Κάλντα και τη φύση της Πίνδου.',
}

const contactPage = {
  _id: 'contactPage',
  _type: 'contactPage',

  title: 'ΕΠΙΣΚΕΦΘΕΙΤΕ ΜΑΣ',

  intro: `Θα χαρούμε να
σας υποδεχτούμε.`,

  address: 'Κρανιά Γρεβενών',

  phone: '697 681 3887',

  hours: `Καθημερινά
Κατόπιν τηλεφωνικής συνεννόησης`,

  mapUrl:
    'https://www.google.com/maps/place/%CE%A4%CE%9F+%CE%9C%CE%9F%CE%9D%CE%9F%CE%A0%CE%91%CE%A4%CE%99+%CE%A4%CE%9F%CE%A5+%CE%9C%CE%91%CE%9B%CE%9B%CE%99%CE%9F%CE%A5/@39.8964963,21.2783524,690m',

  mapLatitude: 39.8964963,

  mapLongitude: 21.2783524,

  seoTitle: 'Επικοινωνία | Το Μονοπάτι του Μαλλιού',

  seoDescription:
    'Επικοινωνήστε με το Μονοπάτι του Μαλλιού στην Κρανιά Γρεβενών και κλείστε την επίσκεψή σας στο μουσείο.',
}

async function migrate() {
  console.log('Starting migration...')

  console.log('Creating/updating visitPage...')
  await client.createOrReplace(visitPage)
  console.log('✓ visitPage completed')

  console.log('Creating/updating contactPage...')
  await client.createOrReplace(contactPage)
  console.log('✓ contactPage completed')

  console.log('')
  console.log('Migration completed successfully.')
}

migrate().catch((error) => {
  console.error('')
  console.error('Migration failed:')
  console.error(error)
  process.exit(1)
})
