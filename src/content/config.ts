import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.string().transform((str) => {
      // Asegurar que la fecha se parsee correctamente
      const date = new Date(str + 'T00:00:00');
      return date;
    }),
    imagen: z.string().optional(),
    autor: z.string(),
    categoria: z.string()
  })
});

export const collections = {
  noticias
}; 