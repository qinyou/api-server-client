const getters = {
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  welcome: state => state.user.welcome,

  roles: state => state.user.roles,
  resources: state => state.user.resources,
  permissions: (state) => [...state.user.roles, ...state.user.resources],

  userInfo: state => state.user.userInfo,
  unreadCount: state => state.user.unreadCount,
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
  // lang: state => state.i18n.lang
}

export default getters
