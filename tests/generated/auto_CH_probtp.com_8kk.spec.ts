import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_probtp.com_8kk', ['https://www.probtp.com/particuliers-accueil.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
