export default class base_po {
    open(path) {
        browser.url(path)
    }

    waitUsingFixedTimeout(time) {
        console.log('Pausing for: ' + time + 'seconds')
        browser.pause(time)
    }
}
