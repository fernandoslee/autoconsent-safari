import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uslugi.yandex.ru_x3u', ['https://uslugi.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
