import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_transkulturelltcentrum.se_28p', ['https://www.transkulturelltcentrum.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
