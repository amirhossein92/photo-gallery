import classNames from "classnames";

import Image from "core/display/Image";
import TagList from "core/display/TagList";
import useIntersectionObserver from "hooks/view/useIntersectionObserver";
import { useRef } from "react";

import { Product } from "types/product";

import "./ProductCard.scss";

type Props = React.HTMLAttributes<HTMLDivElement> &
  Product & {
    onTagSelect: (tag: string) => void;
  };

const ProductCard = ({
  tags,
  imageUrl,
  name,
  description,
  href,
  className,
  domain,
  onTagSelect,
  ...rest
}: Props) => {
  const currentRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(
    currentRef as React.MutableRefObject<HTMLElement>
  );

  return (
    <div
      className={classNames("product-card", className)}
      {...rest}
      ref={currentRef}
    >
      {isVisible && (
        <>
          <Image
            src={imageUrl}
            className="product-card__img"
            domain={domain}
            href={href}
            alt={name}
          />
          <TagList
            tags={tags}
            className="product-card__tags"
            onSelect={onTagSelect}
          />
          {name && (
            <a href={href}>
              <h5 className="product-card__name">{name}</h5>
            </a>
          )}
          {description && (
            <a href={href}>
              <p
                className="product-card__description"
                dangerouslySetInnerHTML={{
                  __html: description.startsWith("<")
                    ? description
                    : `${description}`,
                }}
              />
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCard;
