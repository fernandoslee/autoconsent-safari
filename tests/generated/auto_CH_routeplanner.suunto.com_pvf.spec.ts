import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_routeplanner.suunto.com_pvf', ['https://routeplanner.suunto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
