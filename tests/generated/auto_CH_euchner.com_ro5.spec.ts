import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_euchner.com_ro5', ['https://www.euchner.com/en-us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
