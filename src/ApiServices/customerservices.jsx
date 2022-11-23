export const GRAPHQL_API = "http://localhost:4000/";
export const HEADER_APIT = "content-type: application/json";

export const get_Users = `
query getUserQuery {
    getAllUsers {
        data {
          _id
          name
          email
          phone
          address
          password
          gender
          role
        }
      }
  }
  
`;
