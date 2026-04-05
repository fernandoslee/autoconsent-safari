import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ikv-ilmkreis.de_rzq', ['https://www.ikv-ilmkreis.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
