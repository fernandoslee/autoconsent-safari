import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_au.nothing.tech_g61', ['https://au.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
