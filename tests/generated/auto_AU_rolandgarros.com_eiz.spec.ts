import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rolandgarros.com_eiz', ['https://www.rolandgarros.com/en-us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
