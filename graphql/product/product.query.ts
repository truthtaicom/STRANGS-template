import { gql } from "apollo-boost";

export const GET_PRODUCTS = gql`
  query getAllProduct($input: GetAllProductInput!) {
    getAllProduct(input: $input) {
      data {
        sku
        name
        price
        finalPrice
        promotionPercent
        namePath
      }
    }
  }
`;