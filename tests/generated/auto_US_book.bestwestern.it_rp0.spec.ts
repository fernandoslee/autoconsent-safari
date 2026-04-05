import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_book.bestwestern.it_rp0', ['https://www.bestwestern.it/hotel/it.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
