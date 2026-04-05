import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_practicum.yandex.ru_su5', ['https://practicum.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
