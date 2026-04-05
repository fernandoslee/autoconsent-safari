import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_metrika.yandex.ru_de6', ['https://yandex.ru/adv/metrika'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
