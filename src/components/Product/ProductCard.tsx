import classNames from "classnames";

import Image from "core/display/Image";
import TagList from "core/display/TagList";
import useIntersectionObserver from "hooks/view/useIntersectionObserver";
import { useRef } from "react";

import { Product } from "types/product";

import "./ProductCard.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & Product & {};

const ProductCard = ({
  tags,
  imageUrl,
  name,
  description,
  href,
  className,
  ...rest
}: Props) => {
  const currentRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(
    currentRef as React.MutableRefObject<HTMLElement>
  );

  console.log({ isVisible });

  return (
    <div
      className={classNames("product-card", className)}
      {...rest}
      ref={currentRef}
    >
      {isVisible && (
        <>
          <Image src={imageUrl} className="product-card__img" />
          <TagList tags={tags} className="product-card__tags" />
          {name && <h5 className="product-card__name">{name}</h5>}
          {description && (
            <p
              className="product-card__description"
              dangerouslySetInnerHTML={{
                __html: description.startsWith("<")
                  ? description
                  : `${description}`,
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductCard;
