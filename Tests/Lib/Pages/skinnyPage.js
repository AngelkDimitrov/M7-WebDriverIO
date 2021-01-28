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
get groupB(){
    return $('#B')
}
get descriptionPageButton (){
    return $('//body/div[6]/div[1]/div[4]/div[1]/div[2]')
}
get locationPageButton (){
    return $('//body/div[6]/div[1]/div[4]/div[1]/div[3]')
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
navigateToGroupB () {
    this.groupB.waitForExist()
    this.groupB.click()
}
navigateToDescriptionPage () {
    this.descriptionPageButton.waitForExist()
    this.descriptionPageButton.click()
}
navigateToLocationPage (){
    this.locationPageButton.waitForExist()
    this.locationPageButton.click()
}

}
export default new skinnyPage()