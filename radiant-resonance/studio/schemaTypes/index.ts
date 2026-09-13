import {defineField, defineType} from 'sanity'
import visitPage from './visitPage'
import contactPage from './contactPage'

const museumItem = {
  name: 'museumItem',
  title: 'Αντικείμενο μουσείου',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'text',
      title: 'Κείμενο',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'image',
      title: 'Εικόνα',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}

export const homepage = defineType({
  name: 'homepage',
  title: 'Αρχική Σελίδα',
  type: 'document',

  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',

      fields: [
        defineField({
          name: 'title',
          title: 'Τίτλος',
          type: 'string',
          initialValue: 'ΤΟ ΤΑΞΙΔΙ ΤΟΥ ΜΑΛΛΙΟΥ',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'subtitle',
          title: 'Υπότιτλος',
          type: 'text',
          rows: 2,
          initialValue:
            'Ένα μικρό θεματικό μουσείο στην καρδιά της Πίνδου',
        }),

        defineField({
          name: 'buttonText',
          title: 'Κείμενο κουμπιού',
          type: 'string',
          initialValue: 'ΕΠΙΣΚΕΦΘΕΙΤΕ ΤΟ ΜΟΥΣΕΙΟ',
        }),

        defineField({
          name: 'buttonLink',
          title: 'Σύνδεσμος κουμπιού',
          type: 'string',
          initialValue: '/episkepsi/',
        }),

        defineField({
          name: 'image',
          title: 'Hero εικόνα',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: 'owners',
      title: 'Τα λόγια των ιδιοκτητών',
      type: 'object',

      fields: [
        defineField({
          name: 'title',
          title: 'Τίτλος',
          type: 'string',
          initialValue: 'Τα λόγια των ιδιοκτητών',
        }),

        defineField({
          name: 'paragraphs',
          title: 'Κείμενα',
          type: 'array',
          of: [
            {
              type: 'text',
              rows: 5,
            },
          ],
        }),

        defineField({
          name: 'signature',
          title: 'Υπογραφή',
          type: 'string',
          initialValue: '– Οι ιδιοκτήτες',
        }),
      ],
    }),

    defineField({
      name: 'museum',
      title: 'Μέσα στο μουσείο',
      type: 'object',

      fields: [
        defineField({
          name: 'title',
          title: 'Τίτλος ενότητας',
          type: 'string',
          initialValue: 'ΜΕΣΑ ΣΤΟ ΜΟΥΣΕΙΟ',
        }),

        defineField({
          name: 'items',
          title: 'Αντικείμενα / Ενότητες',
          type: 'array',
          of: [
            {
              type: 'museumItem',
            },
          ],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    defineField({
      name: 'location',
      title: 'Κρανιά & Πίνδος',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Τίτλος',
          type: 'string',
        }),
        defineField({
          name: 'text',
          title: 'Κείμενο',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'buttonText',
          title: 'Κείμενο κουμπιού',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Link κουμπιού',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Εικόνα',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: 'visit',
      title: 'Επισκεφθείτε μας',
      type: 'object',
    
      fields: [
        defineField({
          name: 'title',
          title: 'Τίτλος',
          type: 'string',
          initialValue: 'ΕΠΙΣΚΕΦΘΕΙΤΕ ΜΑΣ',
        }),
    
        defineField({
          name: 'address',
          title: 'Τοποθεσία',
          type: 'string',
          initialValue: 'Κρανιά Γρεβενών',
        }),
    
        defineField({
          name: 'hours',
          title: 'Ώρες',
          type: 'string',
          initialValue: 'Επισκέψεις κατόπιν συνεννόησης',
        }),
    
        defineField({
          name: 'admission',
          title: 'Είσοδος',
          type: 'string',
          initialValue: 'Δωρεάν είσοδος',
        }),
    
        defineField({
          name: 'phone',
          title: 'Τηλέφωνο',
          type: 'string',
          initialValue: '697 681 3887',
        }),
    
        defineField({
          name: 'buttonText',
          title: 'Κείμενο κουμπιού',
          type: 'string',
          initialValue: 'ΚΛΕΙΣΤΕ ΤΗΝ ΕΠΙΣΚΕΨΗ ΣΑΣ →',
        }),
    
        defineField({
          name: 'buttonLink',
          title: 'Link κουμπιού',
          type: 'string',
          initialValue: '#contact',
        }),
    
        defineField({
          name: 'image',
          title: 'Εικόνα',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
    
      fields: [
        defineField({
          name: 'copyright',
          title: 'Copyright',
          type: 'string',
          initialValue:
            '© 2024 Το Μονοπάτι του Μαλλιού – Θεματικό Μουσείο Κρανιάς Γρεβενών',
        }),
    
        defineField({
          name: 'instagramUrl',
          title: 'Instagram URL',
          type: 'url',
        }),
      ],
    }),
    
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      initialValue:
        'Το Μονοπάτι του Μαλλιού | Θεματικό Μουσείο Κρανιάς Γρεβενών',
    }),
    
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Το Μονοπάτι του Μαλλιού, ένα θεματικό μουσείο στην Κρανιά Γρεβενών, αφιερωμένο στην παράδοση, το μαλλί και την ιστορία της Πίνδου.',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Αρχική Σελίδα',
      }
    },
  },
})

export const schemaTypes = [
  homepage,
  museumItem,
  visitPage,
  contactPage,
]