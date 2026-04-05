import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alice.yandex.ru_fx6', ['https://alice.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
