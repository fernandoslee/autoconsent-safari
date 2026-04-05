import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_proffsmagasinet.se_pff', ['https://www.proffsmagasinet.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
