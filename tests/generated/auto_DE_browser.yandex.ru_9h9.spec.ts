import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_browser.yandex.ru_9h9', ['https://browser.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
