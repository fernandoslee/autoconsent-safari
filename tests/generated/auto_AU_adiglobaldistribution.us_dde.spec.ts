import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_adiglobaldistribution.us_dde', ['https://www.adiglobaldistribution.us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
