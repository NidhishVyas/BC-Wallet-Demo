export const isConnected = (state: string) => {
  return state === 'complete' || state === 'response' || state === 'active'
}

export const isDataUrl = (value?: string) => {
  return value && value.startsWith('data:image/')
}

export const isCredIssued = (state: string) => {
  const result = state === 'credential_issued' || state === 'done' || state === 'credential_acked'
  return result
}
