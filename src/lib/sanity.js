import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'z0u7o0t5',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-01-01', 
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
