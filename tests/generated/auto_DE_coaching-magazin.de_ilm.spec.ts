import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_coaching-magazin.de_ilm', ['https://www.coaching-magazin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
