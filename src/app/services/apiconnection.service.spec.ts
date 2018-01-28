import { TestBed, inject, fakeAsync, tick  } from '@angular/core/testing';

import { ApiconnectionService } from './apiconnection.service';
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http } from '@angular/http';
import { MockBackend } from "@angular/http/testing";
import { XHRBackend } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('ApiconnectionService', () => {
  let backend: MockBackend;
  let service: ApiconnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiconnectionService,
        MockBackend,
      {provide: XHRBackend, useClass: MockBackend}]
    });

    backend = TestBed.get(MockBackend);
    service = TestBed.get(ApiconnectionService);
  });

  it('should validate Data', fakeAsync(() => {
    let response = {
      "resultCount": 1,
      "results": [
        {
          "s.no": 0,
          "amt.pledged": 15823,
          "blurb": "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
          "by": "Museum of Science Fiction",
          "country": "US",
          "currency": "usd",
          "end.time": "2016-11-01T23:59:00-04:00",
          "location": "Washington, DC",
          "percentage.funded": 186,
          "num.backers": "219382",
          "state": "DC",
          "title": "Catalysts, Explorers & Secret Keepers: Women of SF",
          "type": "Town",
          "url": "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery"
        }]
    };

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));

      let d = service.getData('');
      tick();

      expect(d[0].type).toBe("Town");
    });
  }));

  it('should return some values', inject([ApiconnectionService], (service: ApiconnectionService) => {
    expect(service.getData('')).not.toBe(null);
  }));

  it('should return some integer value', inject([ApiconnectionService], (service: ApiconnectionService) => {
    expect(service.hitcounter() ).toBeGreaterThanOrEqual(0);
  }));
});
