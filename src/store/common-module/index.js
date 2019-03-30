const SET_MENU_LIST = 'SET_MENU_LIST'
const SET_MENU_LEVEL_OBJECT = 'SET_MENU_LEVEL_OBJECT'
const SET_TAB_LIST_FOR_ADD = 'SET_TAB_LIST_FOR_ADD'
const SET_TAB_LIST_FOR_CLOSE = 'SET_TAB_LIST_FOR_CLOSE'
const GEWEI_SUMMARY = 'GeweiSummary'

function confirmMenu (list, val) {
  // console.info(`VUEX通用方法，通过传入的url确定是哪个菜单对象`)
  let localeString = localStorage.getItem('localeString')
  let localeObject = JSON.parse(localeString)
  let obj = {}
  let bool = true
  for (let i = 0; i < list.length; i++) {
    if (bool) {
      obj.one = list[i].contentValue
      let arrtwo = list[i].children
      for (let index = 0; index < arrtwo.length; index++) {
        if (arrtwo[index].menuUrl === val) {
          obj.two = arrtwo[index].contentValue
          obj.active = arrtwo[index].menuUrl
          obj.locale = localeObject.value
          obj.contentValue = arrtwo[index].contentValue
          obj.menuUrl = arrtwo[index].menuUrl
          if (obj.menuUrl === 'GeweiSummary') {
            obj.close = false
          } else {
            obj.close = true
          }
          bool = false
          break
        }
      }
    } else {
      break
    }
  } // forOne结束
  return obj
}

export default {
  namespaced: true,
  state: {
    menuLevelObject: {}, // 面包屑对象
    menuList: [],
    tabList: [],
    nextTab: null
  },
  getters: {
    getNextTab (state) {
      return state.nextTab
    },
    getTabList (state) {
      let tabs = state.tabList
      if (tabs.length === 0) {
        let json = sessionStorage.getItem('tabListString')
        if (json) {
          // 国际化转换
          tabs = JSON.parse(json)
          let newTabs = []
          tabs.forEach(e => {
            let item = confirmMenu(state.menuList, e.menuUrl)
            newTabs.push(item)
          })
          tabs = newTabs
        } else {
          // 初始化
          let obj = confirmMenu(state.menuList, GEWEI_SUMMARY)
          tabs.push(obj)
        }
        state.tabList = tabs
      }
      return tabs
    },
    getMenuList (state) {
      let ml = state.menuList
      // if (ml.length === 0) {
      //   let jsonString = sessionStorage.getItem('menuListString')
      //   ml = JSON.parse(jsonString)
      //   state.menuList = ml
      // }
      return ml
    },
    getMenuLevelObject (state) {
      let mlo = state.menuLevelObject
      if (!mlo.two) {
        // 如果vuex中未存储，从会话中获取
        let localeString = localStorage.getItem('localeString')
        let localeObject = JSON.parse(localeString)
        let jsonString = sessionStorage.getItem('menuLevelString')
        if (jsonString) {
          // 如果会话中有缓存，判断国际化并转储到vuex中
          mlo = JSON.parse(jsonString)
          let localeString = localStorage.getItem('localeString')
          let localeObject = JSON.parse(localeString)
          if (mlo.locale === localeObject.value) {
            // 国际化相符
            state.menuLevelObject = mlo
          } else {
            // 国际化不符
            let who = {}
            let array = state.menuList
            let bool = true
            for (let i = 0; i < array.length; i++) {
              if (bool) {
                who.one = array[i].contentValue
                let arrtwo = array[i].children
                for (let index = 0; index < arrtwo.length; index++) {
                  if (mlo.active === arrtwo[index].menuUrl) {
                    who.two = arrtwo[index].contentValue
                    who.active = mlo.active
                    who.locale = localeObject.value
                    bool = false
                    break
                  }
                }
              } else {
                break
              }
            } // forOne结束
            state.menuLevelObject = who
          } // 国际化判断结束
        } else {
          // 如果会话中没有缓存，构造系统简介子页面的面包屑对象
          let obj = {}
          let array = state.menuList
          let bool = true
          for (let i = 0; i < array.length; i++) {
            if (bool) {
              obj.one = array[i].contentValue
              let arrtwo = array[i].children
              for (let index = 0; index < arrtwo.length; index++) {
                if (arrtwo[index].menuUrl === 'GeweiSummary') {
                  obj.two = arrtwo[index].contentValue
                  obj.active = arrtwo[index].menuUrl
                  obj.locale = localeObject.value
                  bool = false
                  break
                }
              }
            } else {
              break
            }
          } // forOne结束
          state.menuLevelObject = obj
        } // 会话判断结束
      } // VUEX判断结束
      return state.menuLevelObject
    }
  },
  mutations: {
    [SET_TAB_LIST_FOR_ADD] (state, data) {
      let obj = confirmMenu(state.menuList, data)
      obj.close = true
      state.tabList.push(obj)
      let json = JSON.stringify(state.tabList)
      sessionStorage.setItem('tabListString', json)
    },
    [SET_TAB_LIST_FOR_CLOSE] (state, data) {
      if (data.target === data.active) {
        console.info('如果关闭的目标是当前页，需要干掉目标并塑造一个新的当前页')
        state.tabList.forEach((item, index) => {
          if (item.menuUrl === data.target) {
            state.nextTab = state.tabList[index + 1] || state.tabList[index - 1]
          }
        })
      } else {
        console.info('如果关闭的目标不是当前页，直接干掉该目标')
        state.nextTab = null
      }
      let tabs = state.tabList.filter(e => e.menuUrl !== data.target)
      state.tabList = tabs
      let json = JSON.stringify(state.tabList)
      sessionStorage.setItem('tabListString', json)
    },
    [SET_MENU_LIST] (state, data) {
      state.menuList = data
      let menuListString = JSON.stringify(data)
      sessionStorage.setItem('menuListString', menuListString)
    },
    [SET_MENU_LEVEL_OBJECT] (state, data) {
      let obj = confirmMenu(state.menuList, data)
      state.menuLevelObject = obj
      let menuLevelString = JSON.stringify(obj)
      sessionStorage.setItem('menuLevelString', menuLevelString)
    }
  },
  actions: {
    actionTabListForAdd ({
      commit
    }, data) {
      commit(SET_TAB_LIST_FOR_ADD, data)
    },
    actionTabListForClose ({
      commit
    }, data) {
      commit(SET_TAB_LIST_FOR_CLOSE, data)
    },
    actionMenuList ({
      commit
    }, data) {
      commit(SET_MENU_LIST, data)
    },
    actionMenuLevelNull ({
      commit
    }, data) {
      commit(SET_MENU_LEVEL_OBJECT, {})
    },
    actionMenuLevelObject ({
      commit
    }, data) {
      commit(SET_MENU_LEVEL_OBJECT, data)
    }
  }
}
