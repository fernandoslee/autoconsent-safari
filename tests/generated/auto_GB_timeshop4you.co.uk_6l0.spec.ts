import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_timeshop4you.co.uk_6l0', ['https://www.timeshop4you.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
