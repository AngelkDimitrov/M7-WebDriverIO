import { livetUrl } from './Lib/Helpers/env'
import skinnyPage from './Lib/Pages/skinnyPage'
describe('should open SP7 and test skinny page ', () => {
    
    it('should Open SP and close cookie baner ', () => {
        browser.url(livetUrl);
        browser.maximizeWindow();
        skinnyPage.closeCookiePopup();
        expect(browser).toHaveUrl(livetUrl);
    });

    it('should  navigate to skunny page ', () => {
        skinnyPage.clickfindOutMore()
        expect(browser).toHaveTitle('Segments');
        //Assert thet logIn buuton exist
        skinnyPage.logInButton() 
    });

    it('should reorder Mosaics', () => {
       let experianLogo = $('#experian-logo')
       let reorderByChildren = $('#Children');
       let reorderByAge = $('#Age');
       skinnyPage.clickTypes()
       reorderByChildren.click();
       skinnyPage.clickGroups();
       reorderByAge.click();
       expect(experianLogo).toBeDisplayed()
    });

    xit('should navigate to B group Panels page and click on 3 info tooltips ', () => {
        const groupB = $('#B');
        groupB.waitForExist();
        groupB.click();
        $('//*[@id="question-who-we-are"]/a/img').click();
        $('//*[@id="question-panel4"]/a/img').click();
        $('//*[@id="question-panel5"]/a/img').click();
        $('#box-1').click();
        //add asertion
    });
    xit('should navigate to Description page  ', () => {
        const description_button = $("//body/div[6]/div[1]/div[4]/div[1]/div[2]")
        description_button.waitForExist
        description_button.click();
        $('#wordcloud_text_6').click
        description_button.waitForExist
        description_button.click();
        $('#wordcloud_text_15').click();
        description_button.waitForExist
        description_button.click();
        $('#wordcloud_text_20').click();
        //add asertion
    });
    xit('should navigate to Location page  ', () => {
        const location_button = $("//body/div[6]/div[1]/div[4]/div[1]/div[3]")
        location_button.click();
        const zoomIn = $('//*[@id="mymap"]/div[2]/div[1]/div/a[1]');
        const zoomOut = $('//*[@id="mymap"]/div[2]/div[1]/div/a[2]');
        zoomIn.click();
        zoomOut.click();
        //add asertion
        browser.saveScreenshot('map.png')
    });
    xit('should navigate to Family Tree page  ', () => {
        const family_tree_button = $("//body/div[6]/div[1]/div[4]/div[1]/div[4]")
        family_tree_button.click();
        //add asertion

    });
    xit('should navigate to Photos page ', () => {
        const photos_button = $("//body/div[6]/div[1]/div[4]/div[1]/div[5]")
        photos_button.click();
        //add asertion
    });
    xit('should navigate to Data page ', () => {
        const data_button = $("//body/div[6]/div[1]/div[4]/div[1]/div[6]")
        const top100Button = $("#showtop100Insights")
        const searchField = $("#searchInput")
        data_button.waitForExist
        data_button.click();
        top100Button.waitForExist
        top100Button.click
        searchField.setValue('family ')
        $("//body/div[@id='data-page']/div[1]/div[4]/div[4]/div[1]/div[3]").click()

        //browser.pause(3000);
    });
});
