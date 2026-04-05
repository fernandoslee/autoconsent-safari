import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ibp.fraunhofer.de_545', ['https://www.ibp.fraunhofer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
