/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPpsCheque = /* GraphQL */ `
  query GetPpsCheque($id: ID!) {
    getPPSCheque(id: $id) {
      id
      payee
      amountWord
      amountNumber
      chequeDate
      chequeNumber
      image
      status
      createdAt
      updatedAt
    }
  }
`;
export const listPpsCheques = /* GraphQL */ `
  query ListPpsCheques(
    $filter: ModelPPSChequeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPPSCheques(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        payee
        amountWord
        amountNumber
        chequeDate
        chequeNumber
        image
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
