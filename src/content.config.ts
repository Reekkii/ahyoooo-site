import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    subtitleLang: z.string().optional(),
    description: z.string(),
    hideDescription: z.boolean().default(false),
    draft: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    slug: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
})

export const collections = { blog }
