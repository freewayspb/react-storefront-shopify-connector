import { gql } from '@apollo/client';

export const CREATE_CHECKOUT = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        ready
        currencyCode
        subtotalPrice
        taxesIncluded
        totalTax
        totalPrice
        lineItems(first: 10) {
          edges {
            node {
              id
              quantity
              title
              variant {
                id
                priceV2{
                  amount
                  currencyCode
                }
                image {
                  originalSrc
                  transformedSrc: transformedSrc(maxWidth:200, crop: CENTER)
                  altText
                }
                product{
                  handle
                }
              }
            }
          }
        }
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;