import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autonoleggiodelivery.it_t4i', ['https://autonoleggiodelivery.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
