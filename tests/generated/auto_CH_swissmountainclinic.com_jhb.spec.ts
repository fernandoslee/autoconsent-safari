import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissmountainclinic.com_jhb', ['https://www.swissmountainclinic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
