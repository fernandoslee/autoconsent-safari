import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cz.nothing.tech_s0k', ['https://cz.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
