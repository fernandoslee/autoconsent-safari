import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tabyhembygdsforening.se_6i8', ['https://www.tabyhembygdsforening.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
