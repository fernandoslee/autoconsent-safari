import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_books.yandex.ru_3pd', ['https://books.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
