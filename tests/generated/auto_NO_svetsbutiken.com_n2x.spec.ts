import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_svetsbutiken.com_n2x', ['https://www.svetsbutiken.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
