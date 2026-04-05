import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_afisha.yandex.ru_uq7', ['https://afisha.yandex.ru/moscow'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
