import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ake-eisenbahntouristik.de_zff', ['https://www.ake-eisenbahntouristik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
