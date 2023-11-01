export enum Role {
  ADMIN = 'admin',
  SUB_ADMIN = 'sub_admin',
  TEACHER = 'teacher',
  STUDENT = 'student'
}

export enum UserStatus {
  INVITED = 'invited',
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export enum ITokenPayload {
  USER = 'user',
  ROLE = 'role',
  TOKEN = 'token'
}

export enum logLevel {
  NOTHING = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 4,
  DEBUG = 5,
}
export enum DateSortOrder {
  ASCENDING = 'ascending',
  DESCENDING = 'descending'
}