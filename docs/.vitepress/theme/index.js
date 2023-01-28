import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);

    // ctx.app.component('MyGlobalComponent' /* ... */)
  },
};
