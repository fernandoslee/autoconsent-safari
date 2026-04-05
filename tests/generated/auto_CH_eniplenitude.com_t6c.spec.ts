import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eniplenitude.com_t6c', ['https://eniplenitude.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
