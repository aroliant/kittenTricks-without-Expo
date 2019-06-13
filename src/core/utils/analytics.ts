// TODO:
export interface AnalyticsEventConfig {
  category: string;
  action: string;
  label?: string;
}

// const analytics: Analytics = new Analytics('UA-61945105-8');

export function trackScreenTransition(routeName: string): Promise<void> {
  //return analytics.hit(new ScreenHit(routeName));
  return new Promise((resolve, reject) => resolve())
}

export function fireAnalyticsEvent(config: AnalyticsEventConfig): Promise<void> {
  // return analytics.event(new Event(
  //   config.category,
  //   config.action,
  //   config.label,
  // ));
  return new Promise((resolve, reject) => resolve())
}
