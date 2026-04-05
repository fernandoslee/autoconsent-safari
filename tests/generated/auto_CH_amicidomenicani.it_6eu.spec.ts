import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amicidomenicani.it_6eu', ['https://www.amicidomenicani.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
