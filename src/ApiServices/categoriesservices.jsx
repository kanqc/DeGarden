export const GRAPHQL_API = "http://localhost:4000/";

export const get_Categories = `
query getCategoriesQuery {
    getAllCategory {
      data {
        _id
        description
        name
      }
    }
  }
  
`;
