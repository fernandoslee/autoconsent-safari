import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_top-car-hire.com_wf0', ['https://top-car-hire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
