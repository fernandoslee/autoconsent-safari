import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_direct.yandex.ru_zug', ['https://direct.yandex.ru/ab/main/desktop/promocode/new/b'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
