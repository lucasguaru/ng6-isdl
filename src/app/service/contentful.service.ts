import { Injectable } from '@angular/core';

import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'ln55wc4ax9u5',
  accessToken: '2461fa325882304971d276a20a19bb95d23f58b4957751075d952c52be5214e8',

  contentTypeIds: {
    rituais: 'rituais'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {  }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.rituais
    }, query))
    .then(res => res.items);
  }


}
