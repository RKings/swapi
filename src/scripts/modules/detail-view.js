import GetSpecies from './get-species-emoji';

export default class DetailView {
  constructor() {
    this.getSpecies = new GetSpecies();
    this.detailView = document.querySelector('.character-detail');
    this.detailLoader = document.querySelector('.detail-loader');
    this.table = document.querySelector('.character-detail__table');
    this.name = document.querySelector('.character-detail__name');
    this.species = document.querySelector('.character-detail__species');
    this.closeButton = document.querySelector('.character-detail__close');
  }

  init() {
    this.closeButton.addEventListener('click', this.closeDetailView.bind(this));
  }

  openLoader() {
    this.detailLoader.classList.add('detail-loader--open');
  }

  closeLoader() {
    this.detailLoader.classList.remove('detail-loader--open');
  }

  openDetailView() {
    this.detailView.classList.add('character-detail--open');
  }

  closeDetailView(e) {
    e.preventDefault();
    this.detailView.classList.remove('character-detail--open');
  }

  setData(data) {
    this.constructTable(data);
    this.name.innerHTML = data.name;
    this.species.innerHTML = this.getSpecies.getEmoji(data.species[0]);
    this.openDetailView();
  }

  constructTable(data) {
    this.changeCell(this.table, '.character-detail__birth-cell', data.birth_year);
    this.changeCell(this.table, '.character-detail__eye-cell', data.eye_color);
    this.changeCell(this.table, '.character-detail__gender-cell', data.gender);
    this.changeCell(this.table, '.character-detail__hair-cell', data.hair_color);
    this.changeCell(this.table, '.character-detail__height-cell', data.height);
    this.changeCell(this.table, '.character-detail__mass-cell', data.mass);
    this.changeCell(this.table, '.character-detail__skin-cell', data.skin_color);
  }

  changeCell(table, className, newContent) {
    table.querySelector(className).innerHTML = newContent;
  }
}