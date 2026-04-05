import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maisonsvictorhugo.paris.fr_9wo', ['https://www.maisonsvictorhugo.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
