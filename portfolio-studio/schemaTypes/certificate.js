import {defineField, defineType} from 'sanity'

export const certificateType = defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Certificate Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer/Organization',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Certificate File',
      type: 'file',
      options: {
        accept: 'image/*,.pdf',
        storeOriginalFilename: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date Issued',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'credentialUrl',
      title: 'Credential URL',
      type: 'url',
      description: 'Link to verify the certificate',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of what this certificate represents',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to sort certificates (lower number appears first)',
    }),
  ],
})
