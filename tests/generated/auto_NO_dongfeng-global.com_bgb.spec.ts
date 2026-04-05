import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_dongfeng-global.com_bgb', ['https://www.dongfeng-global.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
