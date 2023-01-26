import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index'

export default defineConfig({
  name: 'default',
  title: 'chanel-website-v2',

  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
