import styled from 'styled-components';

import Typography from '@components/Typography';
import colors from '@constants/colors';

export type ProductType = {
  goodsNo: number;
  goodsName: string;
  price: number;
  brandName: string;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  normalPrice: number;
  isSale: boolean;
  saleRate: number;
  isSoldOut: boolean;
  isExclusive: boolean;
};

const ProductWrapper = styled.li`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 195px;
`;

const ProductDescription = styled.div`
  display: grid;
  grid-template-rows: 4fr 9fr 6fr 3fr;
  padding: 20px 10px;
  height: 100%;
`;

const ProductLabel = styled.div`
  position: absolute;
  background-color: ${colors.green};
  color: ${colors.white};
  bottom: -10px;
  left: 10px;
  padding: 4px 6px;
`;

const ProducstImageBox = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductNameBox = styled.div`
  height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Product: React.FC<{ product: ProductType }> = ({ product }) => {
  const handleImageLoadError = (event) => {
    event.target.src =
      'https://image.msscdn.net/musinsaUI/homework/data/img.jpg';
  };

  return (
    <ProductWrapper>
      <ProducstImageBox>
        <a href={product.linkUrl}>
          <ProductImage
            src={product.imageUrl}
            alt={product.goodsName}
            onError={handleImageLoadError}
          />
        </a>
        {product.isExclusive && (
          <ProductLabel>
            <Typography variant="body3">단독</Typography>
          </ProductLabel>
        )}
      </ProducstImageBox>
      <ProductDescription>
        <a href={product.brandLinkUrl}>
          <Typography variant="h6">{product.brandName}</Typography>
        </a>
        <a href={product.linkUrl}>
          <ProductNameBox>
            <Typography variant="h5">{product.goodsName}</Typography>
          </ProductNameBox>
        </a>
        <ProductPriceBox>
          <Typography variant="body1">
            {`${product.price.toLocaleString()}원`}
          </Typography>
          {product.isSale && (
            <Typography variant="body1" color={colors.red}>
              {`${product.saleRate}%`}
            </Typography>
          )}
        </ProductPriceBox>
        {product.isSale && (
          <Typography
            variant="body4"
            textDecoration="line-through"
            color={colors.grey6}
          >
            {`${product.normalPrice.toLocaleString()}원`}
          </Typography>
        )}
      </ProductDescription>
    </ProductWrapper>
  );
};

export default Product;
