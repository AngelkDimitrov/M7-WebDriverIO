class skinnyPage {

get cookieClose() {
    return $('//*[@id="cookieBanner"]/button')
}
get findOutMoreButton() {
    return $('#myCarousel > div > div.active.item > div.find-out')
}
get logIn() {
    return $('#new-login-style > a > input')
}
get typesButton() {
    return $('#display-Types')
}
get groupsButton() {
    return $('#display-Groups')
}
closeCookiePopup () {
    this.cookieClose.waitForExist()
    this.cookieClose.click()
}
clickfindOutMore () {
    this.findOutMoreButton.waitForExist()
    this.findOutMoreButton.click()
}
logInButton () {
    this.logIn.waitForExist()  
}
clickTypes () {
    this.typesButton.waitForExist()
    this.typesButton.click()
}
clickGroups () {
    this.groupsButton.waitForExist()
    this.groupsButton.click()
}
}
export default new skinnyPage()