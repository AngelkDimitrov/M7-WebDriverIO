class skinnyPage {

get cookieClose() {
    return $('//*[@id="cookieBanner"]/button')
}
get loginButton() {
    return $('#new-login-style > a > input')
}
get findOutMoreButton() {
    return $('#myCarousel > div > div.active.item > div.find-out')
}
closeCookiePopup () {
    this.cookieClose.waitForExist()
    this.cookieClose.click()
}
clickfindOutMore () {
    this.findOutMoreButton.waitForExist()
    this.findOutMoreButton.click()
}
}
export default new skinnyPage()