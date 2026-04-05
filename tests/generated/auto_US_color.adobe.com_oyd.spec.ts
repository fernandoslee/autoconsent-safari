import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_color.adobe.com_oyd', ['https://color.adobe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
