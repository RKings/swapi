import GetRequest from './get-request';
import DetailView from './detail-view';
import GetSpecies from './get-species-emoji';

export default class GridView {
  constructor() {
    this.request = new GetRequest();
    this.detailView = new DetailView();
    this.getSpecies = new GetSpecies();
    this.detailView.init();
    this.page = 1;
    this.currentPageInfo = null;
    this.characterList = document.querySelector('.character-list');
    this.loader = document.querySelector('.loader');
  }

  init() {
    this.getPage(1);
  }

  getPage(id) {
    this.openLoader();
    this.request.getPersons(id, this.handlePage.bind(this));
  }

  handlePage(data) {
    data = JSON.parse(data);
    this.currentPageInfo = data;
    this.setData(data);
    this.handlePagination();
  }

  handlePagination() {
    if(this.currentPageInfo.next !== null) {
      document.querySelector('.pagination__next-page').classList.remove('pagination__next-page--disabled');
    } else {
      document.querySelector('.pagination__next-page').classList.add('pagination__next-page--disabled');
    }

    if(this.currentPageInfo.previous !== null) {
      document.querySelector('.pagination__previous-page').classList.remove('pagination__previous-page--disabled');
    } else {
      document.querySelector('.pagination__previous-page').classList.add('pagination__previous-page--disabled');
    }
  }

  openLoader() {
    this.loader.classList.remove('loader--hide');
  }

  closeLoader() {
    this.loader.classList.add('loader--hide');
  }

  setData(data) {
    this.closeLoader();
    this.constructCharacterList(data);
  }

  constructCharacterList(data) {
    this.cleanCharacterList();

    for(let i = 0; i < data.results.length; i++) {
      this.addCharacter(data.results[i], i);
    }

    this.addEventListeners();
  }

  cleanCharacterList(){
    let elements = this.characterList.querySelectorAll('.character-list__item');

    for(let i = 0; i < elements.length; i++) {
      this.characterList.removeChild(elements[i]);
    }
  }

  addCharacter(character, position) {
    let name = character.name;
    let emoji = this.getSpecies.getEmoji(character.species[0]);
    let element = `<a href="#" class="character-list__item" data-position="${position}"> \
                    <div class="character-list__outer-constrainer"> \
                     <div class="character-list__inner-constrainer"> \
                      <span class="character-list__item-species">${emoji}</span> \
                      <h2 class="character-list__item-title">${name}</h2> \
                     </div> \
                    </div> \
                  </a>`;
    this.characterList.innerHTML = element + this.characterList.innerHTML;
  }

  addEventListeners() {
    let elements = this.characterList.querySelectorAll('.character-list__item');
    let next = document.querySelector('.pagination__next-page');
    let prev = document.querySelector('.pagination__previous-page');

    for(let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', this.handleCharacterClick.bind(this));
    }

    next.addEventListener('click', (e) => {
      e.preventDefault();
      this.nextPage(true)
    });

    prev.addEventListener('click', (e) => {
      e.preventDefault();
      this.nextPage(false)
    });
  }

  handleCharacterClick(e) {
    e.preventDefault();
        let srcElement = e.target.closest('.character-list__item');
        let id = srcElement.getAttribute('data-position');

        this.detailView.setData(this.currentPageInfo.results[id]);
  }

  nextPage(bool) {
    if(bool && this.currentPageInfo.next !== null) {
      this.getPage(this.page + 1);
      this.page++;
    }else if(this.currentPageInfo.previous !== null) {
      this.getPage(this.page -1);
      this.page--;
    }
  }
}