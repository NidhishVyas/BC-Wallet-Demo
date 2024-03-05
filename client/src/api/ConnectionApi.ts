import type { AxiosResponse } from 'axios'

import { apiCall } from './BaseUrl'

export interface AriesInvitation {
  connection_id: string
  invitation: {
    '@type': string
    '@id': string
    recipientKeys: string[]
    serviceEndpoint: string
    label: string
  }
  invitation_url: string
  alias?: string
}

interface InvitationResult {
  invitation_url: string;
  connection_id: string;
}

export const createInvitation = async (
  agentName?: string,
  goalCode?: string,
  agentImageUrl?: string
): Promise<InvitationResult> => {
  const result: AxiosResponse<AriesInvitation> = await apiCall.post('/demo/connections/createInvite')
  const base64Invitation = btoa(JSON.stringify(result.data.invitation))
  const invitation_url = 'https://525a-18-217-123-34.ngrok-free.app' + '?c_i=' + base64Invitation

  const connection_id = result.data.connection_id
  return { invitation_url, connection_id }
}

export const getConnectionByInvitation = (invitationMsgId: string): Promise<AxiosResponse> => {
  return apiCall.get(`/demo/connections/invitationId/${invitationMsgId}`)
}

export const getConnectionById = (connectionId: string): Promise<AxiosResponse> => {
  return apiCall.get(`/demo/connections/getConnectionStatus/${connectionId}`)
}
