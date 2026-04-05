import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fearlessflowerfarmers.com_ifv', ['https://www.fearlessflowerfarmers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
