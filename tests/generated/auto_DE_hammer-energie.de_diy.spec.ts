import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hammer-energie.de_diy', ['https://www.hammer-energie.de/startseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
