import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ubiklibri.it_ax3', ['https://www.ubiklibri.it/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
