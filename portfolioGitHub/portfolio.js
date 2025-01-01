const theme = document.getElementById("theme");
const root = document.documentElement;

theme.addEventListener("change", () => {
  switch (theme.value) {

    case "blue":
      root.style.setProperty('--btn-main', 'hsla(210, 40%, 50%, 1)');
      root.style.setProperty('--btn-light', 'hsla(210, 30%, 80%, 1)');
      root.style.setProperty('--btn-dark', 'hsla(210, 60%, 5%, 1)');

      root.style.setProperty('--nav-text', 'hsla(210, 50%, 90%, 1)');
      root.style.setProperty('--nav-hover', 'hsla(210, 40%, 60%, 1)');

      root.style.setProperty('--bg-light', 'hsla(210, 20%, 70%, 1)');
      root.style.setProperty('--bg-dark', 'hsla(210, 30%, 25%, 1)');
      root.style.setProperty('--text-light', 'hsla(210, 30%, 80%, 1)');
      root.style.setProperty('--text-dark', 'hsla(210, 70%, 15%, 1)');
      root.style.setProperty('--shadow-light', 'hsla(210, 30%, 70%, 1)');
      root.style.setProperty('--shadow-dark', 'hsla(210, 70%, 5%, 1)');

      root.style.setProperty('--project-border', 'hsla(210, 25%, 40%, .5)');
      root.style.setProperty('--project-border-hover', 'hsla(210, 25%, 60%, .5)');
      break;

    case "grey": 
      root.style.setProperty('--btn-main', 'hsla(90, 0%, 55%, 1)');
      root.style.setProperty('--btn-light', 'hsla(90, 0%, 83%, 1)');
      root.style.setProperty('--btn-dark', 'hsla(90, 0%, 5%, 1)');

      root.style.setProperty('--nav-text', 'hsla(90, 0%, 90%, 1)');
      root.style.setProperty('--nav-hover', 'hsla(90, 0%, 60%, 1)');

      root.style.setProperty('--bg-light', 'hsla(90, 0%, 90%, 1)');
      root.style.setProperty('--bg-dark', 'hsla(90, 0%, 25%, 1)');
      root.style.setProperty('--text-light', 'hsla(90, 0%, 80%, 1)');
      root.style.setProperty('--text-dark', 'hsla(90, 0%, 15%, 1)');
      root.style.setProperty('--shadow-light', 'hsla(90, 0%, 70%, 1)');
      root.style.setProperty('--shadow-dark', 'hsla(90, 0%, 5%, 1)');

      root.style.setProperty('--project-border', 'hsla(90, 0%, 40%, .5)');
      root.style.setProperty('--project-border-hover', 'hsla(90, 0%, 60%, .5)');
      break; 

    case "red":
      root.style.setProperty('--btn-main', 'hsla(0, 35%, 50%, 1)');
      root.style.setProperty('--btn-light', 'hsla(0, 40%, 80%, 1)');
      root.style.setProperty('--btn-dark', 'hsla(0, 30%, 10%, 1)');
    
      root.style.setProperty('--nav-text', 'hsla(0, 10%, 90%, 1)');
      root.style.setProperty('--nav-hover', 'hsla(0, 40%, 60%, 1)');
    
      root.style.setProperty('--bg-light', 'hsla(0, 0%, 90%, 1)');
      root.style.setProperty('--bg-dark', 'hsla(0, 0%, 75%, 1)');
      root.style.setProperty('--text-light', 'hsla(0, 50%, 30%, 1)');
      root.style.setProperty('--text-dark', 'hsla(0, 70%, 15%, 1)');
      root.style.setProperty('--shadow-light', 'hsla(0, 30%, 70%, 1)');
      root.style.setProperty('--shadow-dark', 'hsla(0, 70%, 5%, 1)');
    
      root.style.setProperty('--project-border', 'hsla(0, 25%, 40%, .5)');
      root.style.setProperty('--project-border-hover', 'hsla(0, 25%, 60%, .5)');
      break;

    default :
      root.style.setProperty('--btn-main', 'hsla(90, 25%, 50%, 1)');
      root.style.setProperty('--btn-light', 'hsla(90, 30%, 80%, 1)');
      root.style.setProperty('--btn-dark', 'hsla(90, 60%, 5%, 1)');

      root.style.setProperty('--nav-text', 'hsla(90, 50%, 90%, 1)');
      root.style.setProperty('--nav-hover', 'hsla(90, 40%, 60%, 1)');

      root.style.setProperty('--bg-light', 'hsla(90, 20%, 70%, 1)');
      root.style.setProperty('--bg-dark', 'hsla(90, 50%, 25%, 1)');
      root.style.setProperty('--text-light', 'hsla(90, 30%, 80%, 1)');
      root.style.setProperty('--text-dark', 'hsla(90, 70%, 15%, 1)');
      root.style.setProperty('--shadow-light', 'hsla(90, 30%, 70%, 1)');
      root.style.setProperty('--shadow-dark', 'hsla(90, 70%, 5%, 1)');

      root.style.setProperty('--project-border', 'hsla(90, 25%, 40%, .5)');
      root.style.setProperty('--project-border-hover', 'hsla(90, 25%, 60%, .5)');
  }
});
