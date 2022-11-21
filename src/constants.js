export const GRAPHQL_API = "http://localhost:4000/";
export const HEADER_APIT = "content-type: application/json";

export const getAllPlantQuerry = `query GetAllBonsai($q: QueryInput) {
  getAllBonsai(q: $q) {
    data {
      _id
      categoryId
      name
      price
      quantity
      description
      image
      country
      bonus_point
      category {
        _id
        name
        description
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
}`;


export const getAllCategory = `query GetAllCategory {
  getAllCategory {
    data {
      _id
      name
      description
      updatedAt
    }
  }
}`;

export const getProductPagination = `query Pagination {
  getAllBonsai {
    pagination {
      total
      limit
      page
    }
  }
}`;
