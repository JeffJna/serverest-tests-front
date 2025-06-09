import { v4 as uuidv4 } from 'uuid';

export function gerarEmailUnico() {
  return `user_${uuidv4()}@teste.com`;
}
