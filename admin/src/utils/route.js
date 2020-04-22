import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const navigateTo = (path, state = {}) => {
    if (!history.location || history.location.pathname === path) {
    return;
  }
  
    history.push(path, state);
    window.scrollTo(0, 0);
  };

  const navigateWithClear = (path, state = {}) => {
    if (!history.location || history.location.pathname === path) {
      return;
    }
  
    history.replace(path, state);
    window.scrollTo(0, 0);
  };
export {
    history,
    navigateTo,
    navigateWithClear
}