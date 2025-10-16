export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }] },
    { name: 'date', type: 'datetime', title: 'Date' }
  ]
}
