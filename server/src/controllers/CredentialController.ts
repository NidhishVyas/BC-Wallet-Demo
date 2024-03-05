import { Body, Delete, Get, InternalServerError, JsonController, NotFoundError, Param, Post } from 'routing-controllers'
import { Inject, Service } from 'typedi'

import { Credential } from '../content/types'
import { tractionRequest } from '../utils/tractionHelper'
@JsonController('/credentials')
@Service()
export class CredentialController {
  @Get('/connId/:connId')
  public async getCredByConnId(@Param('connId') connId: string) {
    const res = (
      await tractionRequest.get('/issue-credential/records', {
        params: {
          connection_id: connId,
        },
      })
    ).data

    return res
  }

  @Post('/getOrCreateCredDef')
  public async getOrCreateCredDef(@Body() credential: Credential) {
    const schema_id = process.env.SCHEMA_ID ?? ''
    const cred_def_id = process.env.CRED_DEF_ID ?? ''


    return cred_def_id
  }

  @Post('/offerCredential')
  public async offerCredential(@Body() params: any) {
    const response = await tractionRequest.post(`/issue-credential/send-offer`, params)
    return response.data
  }
}
