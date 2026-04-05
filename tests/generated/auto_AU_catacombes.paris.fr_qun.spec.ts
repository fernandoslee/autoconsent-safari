import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_catacombes.paris.fr_qun', ['https://www.catacombes.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
