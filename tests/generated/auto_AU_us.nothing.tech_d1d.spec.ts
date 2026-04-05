import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_us.nothing.tech_d1d', ['https://us.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
