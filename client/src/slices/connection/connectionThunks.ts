import { createAsyncThunk } from '@reduxjs/toolkit'

import * as Api from '../../api/ConnectionApi'

export const fetchConnectionById = createAsyncThunk('connection/fetchById', async (id: string) => {
  const response = await Api.getConnectionById(id)
  return response.data
})

export const createInvitation = createAsyncThunk(
  'connection/createInvitation',
  async (params: { issuer?: string; goalCode?: string }) => {
    const invitation = await Api.createInvitation(params.issuer, params.goalCode)
    return invitation
  }
)
