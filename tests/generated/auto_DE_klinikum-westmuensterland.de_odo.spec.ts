import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klinikum-westmuensterland.de_odo', ['https://www.klinikum-westmuensterland.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
