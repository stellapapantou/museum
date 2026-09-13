import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Επικοινωνία',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος',
      type: 'string',
      initialValue: 'Επικοινωνία',
    }),

    defineField({
      name: 'intro',
      title: 'Εισαγωγή',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'address',
      title: 'Διεύθυνση',
      type: 'string',
      initialValue: 'Κρανιά Γρεβενών',
    }),

    defineField({
      name: 'phone',
      title: 'Τηλέφωνο',
      type: 'string',
      initialValue: '697 681 3887',
    }),

    defineField({
      name: 'hours',
      title: 'Ώρες επίσκεψης',
      type: 'string',
      initialValue: 'Επισκέψεις κατόπιν συνεννόησης',
    }),

    defineField({
      name: 'mapUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),

    defineField({
      name: 'mapLatitude',
      title: 'Latitude',
      type: 'number',
      initialValue: 39.8964963,
    }),

    defineField({
      name: 'mapLongitude',
      title: 'Longitude',
      type: 'number',
      initialValue: 21.2783524,
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