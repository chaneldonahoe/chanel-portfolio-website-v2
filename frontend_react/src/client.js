import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId: 'skzSjlZsLydFLZ3ksxsXMEms7BeV7buuQTC6ixOGZZxcFQdu0RDbxfB1vvfJWyFykGrtS55httHryZCN7FqjoJtt8s1sq4BoR94tdxRRV4Yj4NGOLzXQMkcxdkaI1yeAJJG5kKtvmi0TtPE2LZIPXo8KMvIi5CWWtUWVjqsvrdPypAt9TWIl',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdm: true,
  token: '83vjm4eo',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); //use this code when using sanity for images