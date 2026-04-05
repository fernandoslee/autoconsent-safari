import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sambasketmassagno.com_3ix', ['https://www.sambasketmassagno.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
