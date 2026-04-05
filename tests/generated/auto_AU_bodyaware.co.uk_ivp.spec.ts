import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bodyaware.co.uk_ivp', ['https://bodyaware.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
