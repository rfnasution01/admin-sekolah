export type GetLoginResponseType = {
  nama: string
  alamat: string
  logo: string
  favicon: string
}

export type LoginParamsType = {
  username: string
  password: string
  hasil?: string
}

export type LoginResponseType = {
  token: string
}
