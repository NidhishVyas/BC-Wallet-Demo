import { Body, Get, JsonController, Param, Post } from 'routing-controllers'
import { Service } from 'typedi'

import { tractionRequest } from '../utils/tractionHelper'



export interface AriesInvitation {
  connection_id: string;
  invitation: {
    "@type": string;
    "@id": string;
    recipientKeys: string[];
    serviceEndpoint: string;
    label: string;
  };
  invitation_url: string;
  alias?: string;
}



@JsonController('/connections')
@Service()
export class ConnectionController {
  @Get('/getConnectionStatus/:connId')
  public async getConnectionStatus(@Param('connId') connectionId: string) {
    const response = await tractionRequest.get(`/connections/${connectionId}`)
    return response.data
  }

  @Get('/invitationId/:id')
  public async getConnectionByInvitation(@Param('id') invitationId: string) {
    const response = await tractionRequest.get(`/connections?invitation_msg_id=${invitationId}`)
    return response.data.results[0]
  }

  @Post('/createInvite')
  public async createConnectionInvite(@Body() params: any) : Promise<AriesInvitation>{
    const data = {
    }
    const response = await tractionRequest.post(`/connections/create-invitation`, data)
    return response.data as AriesInvitation
  }
}
