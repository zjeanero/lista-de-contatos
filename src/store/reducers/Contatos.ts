import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Contato } from '../../models/Contato'


const initialState: Contato[] = [
  {
    id: 1,
    nomeCompleto: 'Tony Stark',
    email: 'tony@starkindustries.com',
    telefone: '11 98765-4321'
  },
  {
    id: 2,
    nomeCompleto: 'Steve Rogers',
    email: 'steve@avengers.com',
    telefone: '11 91234-5678'
  }
]

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((contato) => contato.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato !== -1) {
        state[indexDoContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
