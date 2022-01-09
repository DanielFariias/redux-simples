import {
  NUM_MAX_ALTERADO,
  NUM_MIN_ALTERADO
} from "./actiondTypes"

export const AlterarNumbersMin = (novoNumero) => {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero
  }
}

export const AlterarNumbersMax = (novoNumero) => {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero
  }
}