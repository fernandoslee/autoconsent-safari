import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fuel-finder.uk_z8j', ['https://www.fuel-finder.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
