<script>
const status = {success: 'SUCCESS', warning: 'WARNING', error: 'ERROR'}
const operation = {create: 'CREATE', delete: 'DELETE', update: 'UPDATE', retrieve: 'RETRIEVE', copy: 'COPY', init: 'INIT', enable: 'ENABLE', disable: 'DISABLE'}
const langList = [
  {value: 'zh', label: '中华人民共和国', flag: '/static/flagChina.png'},
  {value: 'en', label: 'United States of America', flag: '/static/flagEnglish.png'},
  {value: 'ja', label: '日本の国', flag: '/static/flagJapan.png'}
]
// 语言组，均是与后台约定的固定数据
const langGroup = [
  {value: 'MENU-NAME', i18n: 'message.menuInfo.menuName'},
  {value: 'MENU-DESC', i18n: 'message.menuInfo.menuDesc'},
  {value: 'ROLE-NAME', i18n: 'message.roleInfo.roleName'},
  {value: 'ROLE-DESC', i18n: 'message.roleInfo.roleDesc'},
  {value: 'PRIVILEGE-NAME', i18n: 'message.privilege.privilegeName'},
  {value: 'PRIVILEGE-DESC', i18n: 'message.privilege.privilegeDesc'}
]
// 后台的一系列接口
const auth = 'Authorization' // 请求头
const urlWebapi = '/webapi'
// const urlUserRouter = urlWebapi + '/routeruser'
const urlUserRouter = '/localdevapi'
const url = {
  userLogin: urlUserRouter + '/userLogin',
  getMenuByUserId: urlUserRouter + '/getMenuByUserId',
  findRoleList: urlUserRouter + '/findRoleList',
  pageUserList: urlUserRouter + '/pageUserList',
  addUserInfo: urlUserRouter + '/addUserInfo',
  editUserInfo: urlUserRouter + '/editUserInfo',
  initUserInfo: urlUserRouter + '/user/init',
  disableUserInfo: urlUserRouter + '/user/disabled',
  pageRoleList: urlUserRouter + '/pageRoleList',
  addRoleInfo: urlUserRouter + '/addRoleInfo',
  pageLanguageList: urlUserRouter + '/languageContent/page',
  languageAdd: urlUserRouter + '/languageContent/add',
  languageRemove: urlUserRouter + '/languageContent/remove',
  languageEdit: urlUserRouter + '/languageContent/edit',
  languageFind: urlUserRouter + '/languageContent/find',
  pageMenuList: urlUserRouter + '/pageMenuInfoList',
  menuFind: urlUserRouter + '/menu/find',
  menuTree: urlUserRouter + '/menu/tree',
  menuParentList: urlUserRouter + '/menu/parent',
  formatMenuInfo: urlUserRouter + '/menu/format',
  addMenuInfo: urlUserRouter + '/addMenuInfo',
  editMenuInfo: urlUserRouter + '/editMenuInfo',
  removeMenuInfo: urlUserRouter + '/removeMenuInfo',
  privilegePageList: urlUserRouter + '/privilege/page',
  privilegeAdd: urlUserRouter + '/privilege/add',
  privilegeEdit: urlUserRouter + '/privilege/edit',
  sss: 'sss'
}
// 方法
function aaa () {
  console.info(urlWebapi)
}
export default {
  aaa,
  status,
  operation,
  langList,
  langGroup,
  auth,
  url
}
</script>
