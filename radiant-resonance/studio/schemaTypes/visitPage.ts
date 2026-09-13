import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visitPage',
  title: 'Επίσκεψη',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Η Κρανιά & η Πίνδος',
    }),

    defineField({
      name: 'intro',
      title: 'Εισαγωγή',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'kraniaTitle',
      title: 'Τίτλος — Κρανιά',
      type: 'string',
      initialValue: 'Η Κρανιά',
    }),

    defineField({
      name: 'kraniaText',
      title: 'Κείμενο — Κρανιά',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'bridgesTitle',
      title: 'Τίτλος — Γεφύρια',
      type: 'string',
      initialValue: 'Πέτρινα γεφύρια',
    }),

    defineField({
      name: 'bridgesText',
      title: 'Κείμενο — Γεφύρια',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'valiaKaldaTitle',
      title: 'Τίτλος — Βάλια Κάλντα',
      type: 'string',
      initialValue: 'Βάλια Κάλντα',
    }),

    defineField({
      name: 'valiaKaldaText',
      title: 'Κείμενο — Βάλια Κάλντα',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'activitiesTitle',
      title: 'Τίτλος — Δραστηριότητες',
      type: 'string',
      initialValue: 'Τι μπορείτε να κάνετε',
    }),

    defineField({
      name: 'activitiesText',
      title: 'Κείμενο — Δραστηριότητες',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
  ],
})