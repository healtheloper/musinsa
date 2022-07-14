import styled from 'styled-components';

import Typography from '@components/Typography';
import colors from '@constants/colors';

const mockProduct = {
  goodsNo: 1163605,
  goodsName: '클럽 맨투맨 블랙',
  price: 59000,
  brandName: '나이키',
  imageUrl:
    'https://image.msscdn.net/images/goods_img/20190923/1163605/1163605_2_500.jpg',
  linkUrl: 'https://store.musinsa.com/app/goods/1163605',
  brandLinkUrl: 'https://www.musinsa.com/brands/nike',
  normalPrice: 89000,
  isSale: true,
  saleRate: 34,
  isSoldOut: true,
  isExclusive: false,
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

const Product: React.FC = () => (
  <ProductWrapper>
    <ProducstImageBox>
      <ProductImage src={mockProduct.imageUrl} alt={mockProduct.goodsName} />
      {mockProduct.isExclusive && (
        <ProductLabel>
          <Typography variant="body3">단독</Typography>
        </ProductLabel>
      )}
    </ProducstImageBox>
    <ProductDescription>
      <Typography variant="h6">{mockProduct.brandName}</Typography>
      <ProductNameBox>
        <Typography variant="h5">{mockProduct.goodsName}</Typography>
      </ProductNameBox>
      <ProductPriceBox>
        <Typography variant="body1">
          {`${mockProduct.price.toLocaleString()}원`}
        </Typography>
        {mockProduct.isSale && (
          <Typography variant="body1" color={colors.red}>
            {`${mockProduct.saleRate}%`}
          </Typography>
        )}
      </ProductPriceBox>
      {mockProduct.isSale && (
        <Typography
          variant="body4"
          textDecoration="line-through"
          color={colors.grey6}
        >
          {`${mockProduct.normalPrice.toLocaleString()}원`}
        </Typography>
      )}
    </ProductDescription>
  </ProductWrapper>
);

export default Product;
