import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_financedoor.de_pba', ['https://www.financedoor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
