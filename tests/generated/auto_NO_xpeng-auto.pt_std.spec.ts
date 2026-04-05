import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_xpeng-auto.pt_std', ['https://www.xpeng-auto.pt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
