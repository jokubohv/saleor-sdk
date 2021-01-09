import gql from "graphql-tag";

export const getShop = gql`
  query GetShop {
    shop {
      displayGrossPrices
      defaultCountry {
        code
        country
      }
      logUrl
      subdomain
      companyId
      companyAddress {
        streetAddress1
        streetAddress2
        city
        cityArea
        postalCode
        country
        countryArea
        phone
        lat
        lng
      }
      countries {
        country
        code
      }
      geolocalization {
        country {
          code
          country
        }
      }
    }
  }
`;
