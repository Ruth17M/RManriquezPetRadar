import * as appInsights from 'applicationinsights';

export function setupAppInsights() {
  const key = process.env.APPINSIGHTS_INSTRUMENTATIONKEY;
  if (key) {
    appInsights
      .setup(key)
      .setAutoDependencyCorrelation(true)
      .setAutoCollectRequests(true)
      .setAutoCollectPerformance(true, true)
      .setAutoCollectExceptions(true)
      .setAutoCollectDependencies(true)
      .start();
    console.log('✅ Application Insights activo');
  } else {
    console.log('⚠️  Application Insights sin key, omitido');
  }
}