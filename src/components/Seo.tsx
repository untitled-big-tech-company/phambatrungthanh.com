interface SeoProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export function seo({ title, description, image, type = "website" }: SeoProps) {
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:type", content: type },
  ];

  if (image) {
    meta.push({ name: "og:image", content: image });
  }

  return meta;
}
