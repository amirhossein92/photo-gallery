export type Product = {
  "page_id": string;
  "url": string;
  "canonical_url": string;
  "parent_url": string;
  "price": string;
  "product_confidence": string;

  "domain": string;
  "source": string;
  "brand": string;
  "slug": string;

  "crawled_time": Date;
  "created_time": Date;
  "price_updated": Date;
  "last_update": Date;

  "currency": string;
  "price_old": string;
  "discount": string;
  "s3_url": string;

  name: string;
  tags: string[];
  imageUrl: string;
  href: string;
  description: string;
};
