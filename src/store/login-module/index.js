const SET_LOCALE = 'SET_LOCALE'
const SET_USERINFO = 'SET_USERINFO'
const SET_USERINFO_NULL = 'SET_USERINFO_NULL'
const SET_ACCESS_WEBPATH = 'SET_ACCESS_WEBPATH'

export default {
  namespaced: true,
  state: {
    locale: null,
    userInfo: null,
    accessPath: null
  },
  getters: {
    getLocale (state) {
      let localeObject = null
      if (state.locale) {
        localeObject = state.locale
      } else {
        let localeString = localStorage.getItem('localeString')
        if (localeString) {
          localeObject = JSON.parse(localeString)
        } else {
          localeObject = {
            value: 'en',
            label: 'English',
            flag: '/static/flagEnglish.png'
          }
          let localeString = JSON.stringify(localeObject)
          localStorage.setItem('localeString', localeString)
        }
        state.locale = localeObject
      }
      return state.locale
    },
    getUserInfo (state) {
      let user = state.userInfo
      if (!user) {
        let jsonString = sessionStorage.getItem('userInfoString')
        if (jsonString) {
          let userObject = JSON.parse(jsonString)
          state.userInfo = userObject
        }
      }
      return state.userInfo
    },
    getAccessPath (state) {
      return state.accessPath
    }
  },
  mutations: {
    [SET_LOCALE] (state, data) {
      let newLocale = JSON.stringify(data)
      let oldLocale = localStorage.getItem('localeString')
      if (!oldLocale) {
        oldLocale = newLocale
      }
      localStorage.setItem('localeString', newLocale)
      localStorage.setItem('localeStringOld', oldLocale)
      state.locale = data
    },
    [SET_USERINFO] (state, data) {
      data.profile.pageNum = 1
      data.profile.pageSize = 10
      data.profile.sysDate = new Date()
      state.userInfo = data
      let userInfoString = JSON.stringify(data)
      sessionStorage.setItem('userInfoString', userInfoString)
    },
    [SET_USERINFO_NULL] (state, data) {
      state.userInfo = data
    },
    [SET_ACCESS_WEBPATH] (state, data) {
      state.accessPath = data
    }
  },
  actions: {
    localeAction ({
      commit
    }, data) {
      let lang = data.lang
      let list = data.list
      let obj = null
      list.forEach(element => {
        if (lang === element.value) {
          obj = element
        }
      })
      commit(SET_LOCALE, obj)
    },
    loginAction ({
      commit
    }, data) {
      commit(SET_USERINFO, data)
    },
    quitSystem ({
      commit
    }, data) {
      // 退出时，清理会话级缓存
      sessionStorage.clear()
      commit(SET_USERINFO_NULL, data)
    },
    setAccessPath ({
      commit
    }, data) {
      commit(SET_ACCESS_WEBPATH, data)
    }
  }
}
