const assert = require('assert')

import login from '../pageObjects/login'
import foldersLabels from '../pageObjects/foldersLabels'
import dragAndDrop from '../pageObjects/dragAndDrop'

describe('Test ProtonMail folders/labels settings', () => {
    describe('Login and go to settings', () => {
        it('should Log In', () => {
            login.open()
            login.succesfulLogin()
        })

        //modal for new user
        it('should close modal', () => {
            const closeModalbtn1 = $('button=Not now')
            closeModalbtn1.waitForDisplayed(2000)
            closeModalbtn1.click()
        })

        it('should open folders/labels settings', () => {
            const folderAndLabels = $('#labelSettings')
            folderAndLabels.click()
        })
    })

    describe('Create, edit and delete folder', () => {
        it('should create folder', () => {
            foldersLabels.newFolder()
            expect(foldersLabels.successfulNotificationText).to.have.string(
                'created'
            )
            foldersLabels.successfulNotification.waitForExist({ reverse: true })
        })

        it('should edit folder', () => {
            foldersLabels.updateFolder()
            expect(foldersLabels.successfulNotificationText).to.have.string(
                'updated'
            )
            foldersLabels.successfulNotification.waitForExist({ reverse: true })
        })

        it('should delete folder', () => {
            foldersLabels.deleteFolder()
            expect(foldersLabels.successfulNotificationText).to.have.string(
                'removed'
            )
            foldersLabels.successfulNotification.waitForExist({ reverse: true })
        })
    })

    describe('Create, edit and delete label', () => {
        it('should create label', () => {
            foldersLabels.newLabel()
            foldersLabels.successfulNotification.waitForDisplayed(3000)
            expect(foldersLabels.successfulNotificationText).to.have.string(
                'created'
            )
            browser.pause(4000)
        })
        it('should edit label', () => {
            foldersLabels.updateLabel()
            expect(foldersLabels.successfulNotificationText).to.have.string(
                'updated'
            )
            foldersLabels.successfulNotification.waitForExist({ reverse: true })
        })
        it('should delete label', () => {
            foldersLabels.deleteLabel()
            expect(foldersLabels.successfulNotificationText).to.have.string(
                'removed'
            )
            foldersLabels.successfulNotification.waitForExist({ reverse: true })
        })
    })

    describe('Change order of folders/labels in the list ', () => {
        it('should create folder', () => {
            foldersLabels.newFolder()
            browser.pause(2000)
        })
        it('should create another folder', () => {
            foldersLabels.newFolder()
            browser.pause(2000)
        })

        it('should create label', () => {
            foldersLabels.newLabel()
            browser.pause(2000)
        })

        it('should change order of labels/folders in the list', () => {
            dragAndDrop.dragAndDropRows()
        })
    })
})
