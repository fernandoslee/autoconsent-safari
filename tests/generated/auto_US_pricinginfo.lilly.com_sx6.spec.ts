import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pricinginfo.lilly.com_sx6', ['https://pricinginfo.lilly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
