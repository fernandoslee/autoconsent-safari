import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mijnpensioenoverzicht.nl_bxh', ['https://www.mijnpensioenoverzicht.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
