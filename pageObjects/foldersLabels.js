import base from './base'
var config = require('../config/variables')
var dataGenerator = require('../config/dataGenerator')

class foldersLabels extends base {
    open() {
        super.open('https://beta.protonmail.com/settings/labels')
    }

    get addFolder() {
        return $('.mb1 > button:nth-of-type(1)')
    }

    get addLabel() {
        return $('.pm-button*=label')
    }

    get itemName() {
        return $('#accountName')
    }

    get submitItem() {
        return $('.pm-button*=Submit')
    }

    get editItem() {
        return $('button*=Edit')
    }

    get deleteButton() {
        return $('button.pm-button--for-icon')
    }

    get deleteItem() {
        return $('button*=Delete')
    }

    get deleteConfirm() {
        return $('.pm-button*=Confirm')
    }

    get successfulNotification() {
        return $('.notification-success')
    }

    get successfulNotificationText() {
        return this.successfulNotification.getText() //created
    }

    get notificationToggle() {
        return $('.pm-toggle-label > span:nth-of-type(1)')
    }

    newFolder() {
        this.addFolder.click()
        this.itemName.setValue(dataGenerator.randomName())
        this.submitItem.click()
    }

    updateFolder() {
        this.editItem.click()
        this.itemName.clearValue()
        this.itemName.setValue(config.editName)
        this.submitItem.click()
        this.notificationToggle.click()
    }

    deleteFolder() {
        this.deleteButton.click()
        this.deleteItem.click()
        this.deleteConfirm.click()
    }

    newLabel() {
        this.addLabel.click()
        this.itemName.setValue(dataGenerator.randomName())
        this.submitItem.click()
    }

    updateLabel() {
        this.editItem.click()
        this.itemName.setValue(config.editName)
        this.submitItem.click()
    }

    deleteLabel() {
        this.deleteButton.click()
        this.deleteItem.click()
        this.deleteConfirm.click()
    }
}

export default new foldersLabels()
