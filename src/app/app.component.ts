import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://www.angular.io', 10),
      new Article('Reddit', 'https://www.reddit.com', 1),
      new Article('Youtube', 'https://www.youtube.com', 18),
    ]
  }

  public addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  public sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
