import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();

    // Set the default 'Content-Type' header
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', 'Allow');
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
