import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_no.nothing.tech_fd4', ['https://no.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
