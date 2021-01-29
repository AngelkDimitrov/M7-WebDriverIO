import {livetUrl} from './Lib/Helpers/env'
import skinnyPage from './Lib/Pages/skinnyPage'



describe('should open SP7 and test skinny page ', () => {
    let experianLogo; 
    let reorderByChildren;
    let reorderByAge;
    let infoToolTipPanel3
    let infoToolTippanel4
    let infoToolTippanel5
    let panel1Box1
    let groupName
    let wordCloud1
    let wordCloud2
    let wordCloud3
    let descriptionText
    let zoomIn
    let zoomOut
    let customCanvas
    let firstImage
    let meanPercent
    let pieChart
    let top100InsightsButton
    let top100InsightsTable
    
    beforeEach(() =>
    {experianLogo = $('#experian-logo')
    reorderByChildren = $('#Children')
    reorderByAge = $('#Age')
    infoToolTipPanel3 = $('//*[@id="question-who-we-are"]/a/img')
    infoToolTippanel4 = $('//*[@id="question-panel4"]/a/img')
    infoToolTippanel5 = $('//*[@id="question-panel5"]/a/img')
    panel1Box1 = $('#box-1')
    groupName = $('#segment-name')
    wordCloud1 = $('#wordcloud_text_6')
    wordCloud2 = $('#wordcloud_text_15')
    wordCloud3 = $('#wordcloud_text_20')
    descriptionText = $('#description > p:nth-child(2)')
    zoomIn = $('//*[@id="mymap"]/div[2]/div[1]/div/a[1]')
    zoomOut = $('//*[@id="mymap"]/div[2]/div[1]/div/a[2]')
    customCanvas = $('#customCanvas')
    firstImage = $('#scrollbar1 > a:nth-child(1) > img')
    meanPercent = $('#means-icon-img')
    pieChart = $('#pie-icon-img')
    top100InsightsButton = $('#showtop100Insights')
    top100InsightsTable = $('#data-graph')
    }

    )
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
       skinnyPage.clickTypes()
       reorderByChildren.click();
       skinnyPage.clickGroups();
       reorderByAge.click();
       expect(experianLogo).toBeDisplayed()
    });

    it('should navigate to B group Panels page and click on 3 info tooltips ', () => {
        skinnyPage.navigateToGroupB();
        infoToolTipPanel3.waitForExist();
        infoToolTipPanel3.click();
        infoToolTippanel4.click();
        infoToolTippanel5.click();
        expect(groupName).toBeDisplayed();
        panel1Box1.click();
    });

    it('should navigate to Description page and click on 3 wordclouds ', () => {
        skinnyPage.navigateToDescriptionPage();
        wordCloud1.click();
        skinnyPage.navigateToDescriptionPage();
        descriptionText.getText();
        expect(descriptionText).toHaveTextContaining('Flourishing Families');
        wordCloud2.click();
        skinnyPage.navigateToDescriptionPage();
        wordCloud3.click();  
    });

    it('should navigate to Location page and zoomIn and zoomOut ', () => {
        skinnyPage.navigateToLocationPage();
        zoomIn.click();
        zoomOut.click();
        browser.saveScreenshot('map.png')
    });

    it('should navigate to Family Tree page and open custom option ', () => {
        skinnyPage.navigateToFamilyTreePAge();
        skinnyPage.clickCustomButton();
        customCanvas.toBeDisplayed;
    });

    it('should navigate to Photos page ', () => {
       skinnyPage.navigateToPhotosPage();
       expect(firstImage).isDisplayedInViewport
    });

    it('should navigate to Data page, search for var and display Top100 Insights ', () => {
       skinnyPage.navigateToDataPage();
       skinnyPage.searchForVariable('Family structure');
       meanPercent.click();
       pieChart.click();
       top100InsightsButton.click();
       expect(top100InsightsTable).toBeDisplayed;
    });
});
