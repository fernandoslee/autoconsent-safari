import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_webmaster.yandex.com_6o1', ['https://webmaster.yandex.com/welcome/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
