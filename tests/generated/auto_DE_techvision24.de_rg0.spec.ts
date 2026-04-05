import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_techvision24.de_rg0', ['https://techvision24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
