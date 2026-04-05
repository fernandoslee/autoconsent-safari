import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fuel-finder.uk_146', ['https://www.fuel-finder.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
