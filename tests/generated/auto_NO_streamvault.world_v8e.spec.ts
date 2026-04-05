import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_streamvault.world_v8e', ['https://streamvault.world/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
