import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_productpine.com_6if', ['https://productpine.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
