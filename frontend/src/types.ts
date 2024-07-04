
export interface ICandidate{
  "last_name": string,
  "first_name": string,
  "email": string,
  "role": string
}

export interface ISetStatus{
  email: string,
  code: string
}

export interface IGetRoles{
  roles: string[]
}