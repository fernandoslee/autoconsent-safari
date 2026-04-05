import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sede.sepe.gob.es_nyh', ['https://sede.sepe.gob.es/portalSede/es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
