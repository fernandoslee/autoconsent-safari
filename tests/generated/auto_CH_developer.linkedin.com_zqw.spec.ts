import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_developer.linkedin.com_zqw', ['https://developer.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
