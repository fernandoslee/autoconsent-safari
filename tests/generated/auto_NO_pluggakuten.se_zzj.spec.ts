import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pluggakuten.se_zzj', ['https://www.pluggakuten.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
