export class Article {

  public title: string;
  public link: string;
  public votes: number;

  constructor(title: string, link: string, votes: number=0) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  public voteUp(): void {
    this.votes += 1;
  }

  public voteDown(): void {
    this.votes -= 1;
  }

  public domain(): string | null {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }

}
