/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPpsCheque = /* GraphQL */ `
  mutation CreatePpsCheque(
    $input: CreatePPSChequeInput!
    $condition: ModelPPSChequeConditionInput
  ) {
    createPPSCheque(input: $input, condition: $condition) {
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
export const updatePpsCheque = /* GraphQL */ `
  mutation UpdatePpsCheque(
    $input: UpdatePPSChequeInput!
    $condition: ModelPPSChequeConditionInput
  ) {
    updatePPSCheque(input: $input, condition: $condition) {
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
export const deletePpsCheque = /* GraphQL */ `
  mutation DeletePpsCheque(
    $input: DeletePPSChequeInput!
    $condition: ModelPPSChequeConditionInput
  ) {
    deletePPSCheque(input: $input, condition: $condition) {
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
