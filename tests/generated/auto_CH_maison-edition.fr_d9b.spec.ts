import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_maison-edition.fr_d9b', ['https://maison-edition.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
