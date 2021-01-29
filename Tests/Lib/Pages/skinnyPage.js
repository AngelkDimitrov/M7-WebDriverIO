class skinnyPage {

get cookieClose () {
    return $('//*[@id="cookieBanner"]/button')
}
get findOutMoreButton () {
    return $('#myCarousel > div > div.active.item > div.find-out')
}
get logIn () {
    return $('#new-login-style > a > input')
}
get typesButton () {
    return $('#display-Types')
}
get groupsButton () {
    return $('#display-Groups')
}
get groupB () {
    return $('#B')
}
get descriptionPageButton () {
    return $('//div[@class=\'sidebar-link link-text \']')
}
get locationPageButton () {
    return $('//div[@class=\'sidebar-link link-location \']')
}
get familyTreePageButton() {
    return $('//div[@class=\'sidebar-link link-tree \']')
}
get customButton () {
    return $('#display-custom')
}
get photosPageButton () {
    return $('//div[@class=\'sidebar-link link-photos \']')
}
get dataPageButton () {
    return $('//div[@class=\'sidebar-link link-data \']')
}
get searchField () {
    return $('#searchInput')
}
get serachResults () {
    return $('//strong[contains(.,\'Family structure\')]')
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
navigateToLocationPage () {
    this.locationPageButton.waitForExist()
    this.locationPageButton.click()
}
navigateToFamilyTreePAge () {
    this.familyTreePageButton.waitForExist()
    this.familyTreePageButton.click()
}
clickCustomButton () {
    this.customButton.waitForClickable({ timeout: 2500 })
    this.customButton.click()
}
navigateToPhotosPage () {
    this.photosPageButton.waitForExist()
    this.photosPageButton.click()
}
navigateToDataPage () {
    this.dataPageButton.waitForExist()
    this.dataPageButton.click()
}
searchForVariable (variable) {
    this.searchField.waitForExist()
    this.searchField.setValue(variable)
    this.serachResults.click()
}

}
export default new skinnyPage()