import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_museevieromantique.paris.fr_bi1', ['https://museevieromantique.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
