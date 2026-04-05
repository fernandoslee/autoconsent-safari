import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_realty.yandex.ru_gyh', ['https://realty.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
