import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_partner.market.yandex.com_ogs', ['https://partner.market.yandex.com/welcome/crossborder'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
