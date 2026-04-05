import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parking.aena.es_wdh', ['https://parking.aena.es/reservas/web/obtenerPrecio.ac'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
