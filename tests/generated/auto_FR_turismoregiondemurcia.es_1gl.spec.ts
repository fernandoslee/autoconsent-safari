import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_turismoregiondemurcia.es_1gl', ['https://www.turismoregiondemurcia.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
