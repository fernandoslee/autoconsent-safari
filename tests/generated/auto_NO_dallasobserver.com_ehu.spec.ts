import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dallasobserver.com_ehu', ['https://www.dallasobserver.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
