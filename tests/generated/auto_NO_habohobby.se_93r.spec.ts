import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_habohobby.se_93r', ['https://www.habohobby.se/sv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
