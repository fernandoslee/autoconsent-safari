import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lease-a-bike.nl_ax1', ['https://www.lease-a-bike.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
