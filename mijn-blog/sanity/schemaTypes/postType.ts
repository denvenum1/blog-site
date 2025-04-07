import { defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        type: 'string',
        
      }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (Rule) => Rule.min(1).max(20).required().error("Please enter a category")
    }),
    defineField({
        name: 'image',
        type: 'url',
      }),
      defineField({
        name: 'pitch',
        type: 'markdown',
      }),
  ],
})
