export default class API {
  async getArticles() {
    this.response = await fetch('https://server-workerss.onrender.com/articles')
      .then(async (value) => {
        this.articles = await value.json();
      })
      .catch((e) => {
        console.log('API Fail', e); // eslint-disable-line no-console
        return e;
      });
    return this.articles;
  }
}
