import base from './base'

class dragAndDrop extends base {
    open() {
        super.open('https://beta.protonmail.com/settings/labels')
    }

    get tableRowFolderOne() {
        return $(
            "tbody [data-test-id='folders/labels:item-type:folder']:nth-of-type(1) td:nth-of-type(1) [role]"
        )
    }

    get tableRowTwo() {
        return $('tr:nth-of-type(2) > td:nth-of-type(1)')
    }
    get tableRowThree() {
        return $('tr:nth-of-type(3) > td:nth-of-type(1)')
    }

    submit() {
        this.submitBtn.click()
    }

    dragAndDropRows() {
        this.tableRowFolderOne.dragAndDrop(this.tableRowThree)
        browser.pause(1000)
        this.tableRowFolderOne.dragAndDrop(this.tableRowTwo)
    }
}

export default new dragAndDrop()
