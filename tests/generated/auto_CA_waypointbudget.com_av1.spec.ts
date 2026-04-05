import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_waypointbudget.com_av1', ['https://waypointbudget.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
