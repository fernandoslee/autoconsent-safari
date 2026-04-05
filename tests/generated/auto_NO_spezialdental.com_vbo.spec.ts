import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_spezialdental.com_vbo', ['https://spezialdental.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
