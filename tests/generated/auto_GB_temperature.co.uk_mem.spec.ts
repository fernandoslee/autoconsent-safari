import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_temperature.co.uk_mem', ['https://temperature.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
