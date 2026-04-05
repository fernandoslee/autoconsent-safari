import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_museusemonumentos.pt_zua', ['https://www.museusemonumentos.pt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
