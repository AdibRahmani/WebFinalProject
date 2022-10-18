import * as actions from './actionTypes'

export function adminLogin() {
  return {
    type: actions.ADMIN_LOGIN,
  }
}
export function userLogin() {
  return {
    type: actions.USER_LOGIN,
  }
}
