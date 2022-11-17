// import { gql, useMutation } from "@apollo/client";

export const GRAPHQL_API = "http://localhost:4000/";

export const get_Products = `
  query getProductsQuery {
    getAllBonsai {
      data {
        _id
        image
        name
        quantity
        description
        price
      }
    }
  }
`;

export const newProducts = `
  mutation Mutation {
    createBonsai {
      data {
        _id
        description
        image
        name
        price
      }
    }
  }
`;
// new
// export const newProducts = async (TenSanPham, MoTa, SoLuong, Gia, HinhAnh) => {
//   try {
//     const res = await request.post("/Product", {
//       TenSanPham,
//       MoTa,
//       SoLuong,
//       Gia,
//       HinhAnh,
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
// //delete
// export const deleteProducts = async (id) => {
//   try {
//     const deleteParams = `/Product/` + id;
//     console.log(deleteParams);
//     const res = await request.deleteProducts(deleteParams, {});
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
// //update
// export const updateproducts = async (data) => {
//   try {
//     const UpdateParams = `/Product/` + data.id;
//     const res = await request.updateProducts(UpdateParams, data);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
// //search
// export const search = async (q, type = "less") => {
//   try {
//     const res = await request.get("/Product/search", {
//       params: {
//         q,
//         type,
//       },
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
