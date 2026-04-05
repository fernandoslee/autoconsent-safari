import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_akvariumkungen.se_5uv', ['https://www.akvariumkungen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
