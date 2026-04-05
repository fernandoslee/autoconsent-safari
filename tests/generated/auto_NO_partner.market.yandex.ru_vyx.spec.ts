import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_partner.market.yandex.ru_vyx', ['https://partner.market.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
