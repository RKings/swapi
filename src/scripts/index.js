import DetailView from './modules/detail-view';
import GridView from './modules/grid-view';

document.addEventListener('DOMContentLoaded', evt => {
  let detailView = new DetailView();
  let gridView = new GridView();

  detailView.init();
  gridView.init();
});