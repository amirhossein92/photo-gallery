import classNames from "classnames";

import Image from "core/display/Image";
import TagList from "core/display/TagList";

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
  return (
    <div className={classNames("product-card", className)} {...rest}>
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
    </div>
  );
};

export default ProductCard;
