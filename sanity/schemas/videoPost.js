export default {
  name: 'videoPost',
  title: 'Video Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'videoUrl', type: 'url', title: 'YouTube URL' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'date', type: 'datetime', title: 'Date' }
  ]
}
