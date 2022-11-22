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

export const getRegister = `mutation Register($user: registerInput) {
  register(user: $user) {
    status
    message
    data {
      _id
      name
      email
      password
      avatar
      address
      phone
      gender
      role
      isActive
      activeCode
      createdAt
      updatedAt
    }
  }
}`;

export const sendActiveCode = `mutation SendActiveCode($email: String) {
  sendActiveCode(email: $email) {
    code
    status
    message
    activeCode
  }
}`;

export const activeUserActiveCode = `mutation ActiveByIdAndCode($id: ID, $code: String) {
  activeByIdAndCode(_id: $id, code: $code) {
    code
    data {
      _id
      name
      email
      password
      avatar
      address
      phone
      gender
      role
      isActive
      activeCode
      createdAt
      updatedAt
    }
    message
    status
  }
}`;

export const getLogin = `mutation Login($email: String, $password: String, $rememberMe: Boolean) {
  login(email: $email, password: $password, rememberMe: $rememberMe) {
    access_token
    code
    message
    status
    user {
      _id
      name
      email
      password
      avatar
      address
      phone
      gender
      role
      isActive
      activeCode
      createdAt
      updatedAt
    }
  }
}`;