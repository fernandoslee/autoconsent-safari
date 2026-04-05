import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_elsa-boutique.it_tcp', ['https://www.elsa-boutique.it/it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
