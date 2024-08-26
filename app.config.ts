import { ConfigContext, ExpoConfig } from 'expo/config';

type Env = {
  EXPO_PUBLIC_SLUG: string;
  EXPO_PUBLIC_NAME: string;
  EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER: string;
  EXPO_PUBLIC_IOS_ANDROID_PACKAGE: string;
  EXPO_PUBLIC_PROJECT_ID: string;
  EXPO_PUBLIC_ENV: string;
  EXPO_PUBLIC_API_URL: string;
};

export default ({ config }: ConfigContext): ExpoConfig => {
  const env: Env = process.env as unknown as Env;

  const envConfig: ExpoConfig = {
    ...config,
    slug: env.EXPO_PUBLIC_SLUG ?? '',
    name: env.EXPO_PUBLIC_NAME ?? '',
    ios: {
      ...config.ios,
      bundleIdentifier: env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER,
      buildNumber: '1',
    },
    android: {
      ...config.android,
      package: env.EXPO_PUBLIC_IOS_ANDROID_PACKAGE,
      versionCode: 1,
    },
    updates: {
      url: `https://u.expo.dev/${env.EXPO_PUBLIC_PROJECT_ID}`,
    },
    extra: {
      ...config.extra,
      eas: { projectId: env.EXPO_PUBLIC_PROJECT_ID },
      ENV: env.EXPO_PUBLIC_ENV,
      API_URL: env.EXPO_PUBLIC_API_URL,
    },
  };
  return envConfig;
};
