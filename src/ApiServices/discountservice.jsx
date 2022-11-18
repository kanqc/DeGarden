export const GRAPHQL_API = "http://localhost:4000/";

export const get_Discounts = `
query getDiscountQuery {
    getValidVoucher {
      data {
        _id
        start_time
        end_time
        max_discount
        sale_percent
        quantity
      }
    }
  }
  
`;
