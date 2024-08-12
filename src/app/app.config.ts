import { ApplicationConfig } from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { routes } from "./app-routing.module";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({
    scrollPositionRestoration: 'top',
    anchorScrolling : 'enabled'
  }))]
};