import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_travel.yandex.ru_4e3', ['https://travel.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
