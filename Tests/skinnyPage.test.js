import { livetUrl } from './Lib/Helpers/env'
import skinnyPage from './Lib/Pages/skinnyPage'
describe('should open SP7 and test skinny page ', () => {
    
    it('should Open SP and close cookie baner ', () => {
        browser.url(livetUrl);
        browser.maximizeWindow();
        skinnyPage.closeCookiePopup();
        expect(browser).toHaveUrl('https://www.segmentationportal.com/Mosaic7');
        
    });
    it('should  navigate to skunny page ', () => {
        const loginButton = $('#new-login-style > a > input');
        skinnyPage.clickfindOutMore()
        expect(browser).toHaveTitle('Segments');
        expect(loginButton).toBeVisible();
       
    });
    it('should reorder Mosaics', () => {
        const typeButon = $('#display-Types')
        typeButon.waitForExist();
        typeButon.click();
        $('#Children').click();
        $('#Residency').click();
        $('#display-Groups').click(); 
        $('#Age').click();

    });
    xit('should navigate to B group Panels page ', () => {
        const groupB = $('#B');
        groupB.waitForExist();
        groupB.click();
        $('//*[@id="question-who-we-are"]/a/img').click();
        $('//*[@id="question-panel4"]/a/img').click();
        $('//*[@id="question-panel5"]/a/img').click();
        $('#box-1').click();
    });
    xit('should navigate to Description page  ', () => {
        const description_button = $("/html/body/div[4]/div[1]/div[4]/div[1]/div[2]")
        description_button.click();
        $('#wordcloud_text_6').click
        description_button.click();
        $('#wordcloud_text_15').click();
        description_button.click();
        $('#wordcloud_text_20').click();
    });
    xit('should navigate to Location page  ', () => {
        const location_button = $("/html/body/div[4]/div[1]/div[4]/div[1]/div[3]")
        location_button.click();
        const zoomIn = $('//*[@id="mymap"]/div[2]/div[1]/div/a[1]');
        const zoomOut = $('//*[@id="mymap"]/div[2]/div[1]/div/a[2]');
        zoomIn.click();
        zoomOut.click();
        browser.saveScreenshot('map.png')
    });
    xit('should navigate to Family Tree page  ', () => {
        const family_tree_button = $("/html/body/div[4]/div[1]/div[4]/div[1]/div[4]")
        family_tree_button.click();
    });
    xit('should navigate to Photos page ', () => {
        const photos_button = $("/html/body/div[4]/div[1]/div[4]/div[1]/div[5]")
        photos_button.click();
    });
    xit('should navigate to Data page ', () => {
        const data_button = $("/html/body/div[4]/div[1]/div[4]/div[1]/div[6]")
        data_button.click();
        browser.pause(3000);
    });
});
