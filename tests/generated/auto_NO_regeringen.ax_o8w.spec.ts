import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_regeringen.ax_o8w', ['https://www.regeringen.ax/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
