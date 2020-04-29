import base from './base'
var config = require('../config/variables')

class login extends base {
    open() {
        super.open('https://beta.protonmail.com/')
    }

    get userName() {
        return $('#username')
    }
    get userPassword() {
        return $('#password')
    }
    get submitBtn() {
        return $('#login_btn')
    }

    submit() {
        this.submitBtn.click()
    }

    succesfulLogin() {
        this.userName.setValue(config.userName)
        this.userPassword.setValue(config.userPassword)
        this.submit()
    }
}

export default new login()
