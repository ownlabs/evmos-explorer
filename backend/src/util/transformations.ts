export const splitEvery = <T>(n: number, xs: T[], y: T[][] = []): T[][] =>
  xs.length === 0 ? y : splitEvery(n, xs.slice(n), y.concat([xs.slice(0, n)]))
  
export const fromBase64 = (data: string): Uint8Array =>
  Buffer.from(data, 'base64')
