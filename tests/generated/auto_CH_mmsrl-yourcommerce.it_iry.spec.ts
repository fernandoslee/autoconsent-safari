import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mmsrl-yourcommerce.it_iry', ['https://mmsrl-yourcommerce.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
