import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sashanylon.com_ags', ['https://www.sashanylon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
