import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url = 'https://www.insurancejournal.com/json.php/articles/';
  private apiKey = 'nvaKAFb8h2gqbyg32brtcq';

  constructor(private http: HttpClient) { }

  // Get List of Articles for a specific category
  public getList(type, start, limit, imgs) {
    const imageStr = (imgs) ? '&images=' + imgs : '';
    const url = this.url + 'list/category/' + type + '/apikey=' + this.apiKey + '&start=' + start + '&limit=' + limit + imageStr;
    console.log(url)
    return this.http.get(url);
  }

  // Get individual article
  public getArticle(id) {
    const url = this.url + id + '/?apikey=' + this.apiKey + '';
    return this.http.get(url);
  }


 // Get list of articles for a topic
  public getTopic(topic, start, limit, images) {
    const imageStr = (images) ? '&images=' + images : '';
    const url = this.url + 'list/topic/' + topic + '/?apikey=' + this.apiKey + '&start=' + start + '&limit=' + limit + imageStr;
    return this.http.get(url);
  }

  // Get most popular articles
  public getHeadlines(range, start, limit, images) {
    const imageStr = (images) ? '&images=' + images : '';
    const url = this.url + 'list/popular/' + range + '/?apikey=' + this.apiKey + '&images=1&start=' + start + '&limit=' + limit + imageStr;
    return this.http.get(url);
  }

  // Get magazines and articles associated
  public getMagazines(start, limit) {
    const url = 'https://www.insurancejournal.com/json.php/magazines/?apikey=' + this.apiKey +'&start=' + start + '&limit=' + limit;
    return this.http.get(url);
  }

  // Get search results for a query
  public getSearchResults(query, start, limit) {
    query = query.replace(' ', '+');
    query = encodeURI(query);
    const url = 'https://www.insurancejournal.com/json.php/articles/list/search/' + query + '?apikey=' + this.apiKey + '&start=' + start + '&limit=' + limit;
    return this.http.get(url);
  }
}
