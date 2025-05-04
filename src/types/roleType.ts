import { RoleCode } from '../enums/roleEnum'

export type ExtraRoleCodesOr = {
  $or: Array<ExtraRoleCodesAnd | RoleCode>
}

export type ExtraRoleCodesAnd = {
  $and: RoleCode[]
}

export type ExtraRoleCodes =
  | Array<ExtraRoleCodesAnd | RoleCode>
  | ExtraRoleCodesOr
  | ExtraRoleCodesAnd
