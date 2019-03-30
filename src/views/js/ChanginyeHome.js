export default {
  name: 'ChanginyeHome',
  data() {
    return {
      enterpriseName: this.$t('message.enterpriseName'),
      headerOne: 2,
      headerTwo: 6,
      headerThree: 11,
      headerFour: 1,
      headerFive: 4,
      currentLanguage: null, // 当前选择的国家语言
      localeFlag: null,
      langList: this.constants.langList, // 公共常量中的语言集合
      loginForm: {
        locale: null,
        userAccount: 'aaa',
        userPassword: 'bbb'
      }, // 登录系统的账号和密码
      bannerList: ['/static/bmw001.jpg','/static/bmw002.jpg','/static/bmw003.jpg','/static/bmw004.jpg','/static/bmw005.jpg'],
      aaa: null
    }
  }, mounted() {
    let langInfo = this.$store.getters['loginModule/getLocale']
    this.$i18n.locale = langInfo.value
    this.currentLanguage = langInfo.value
    this.loginForm.locale = langInfo.value
    this.localeFlag = langInfo.flag
  },
  methods: {
    changeLanguage() {
      let value = this.currentLanguage
      if (value) {
        console.info(`当前选择的语言：` + value)
        let obj = {
          lang: value,
          list: this.langList
        }
        this.$store.dispatch('loginModule/localeAction', obj)
        this.$i18n.locale = value
        this.langList.forEach(v => {
          if (v.value === value) {
            this.localeFlag = v.flag
          }
        })
      } else {
        console.info('未选择语言')
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}