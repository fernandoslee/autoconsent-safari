import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwaben-netz.de_06q', ['https://www.schwaben-netz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
