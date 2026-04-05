import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lotharjohn.de_lg8', ['https://www.lotharjohn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
