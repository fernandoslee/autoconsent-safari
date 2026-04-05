import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nottinghamcontemporary.org_yez', ['https://www.nottinghamcontemporary.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
