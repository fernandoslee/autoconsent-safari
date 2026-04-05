import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_remybattery.com_d34', ['https://remybattery.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
