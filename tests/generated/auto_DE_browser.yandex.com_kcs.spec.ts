import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_browser.yandex.com_kcs', ['https://browser.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
