import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
