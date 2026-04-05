import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pizzaria-da-roberta.com_vod', ['https://www.pizzaria-da-roberta.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
