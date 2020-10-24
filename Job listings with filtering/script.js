
const app = (() => {

    const ajax = () => {
      fetch('./data.json', {
        mode: 'no-cors'
      }).then(function(response) {

        return response.json();
      }).then(function(data) {

        section(data)
  
        cache.array = data

  
      }).catch(function(err) {

        console.warn('Something went wrong.', err);
      });
  
      if(window.innerWidth > 375){
        let image = document.querySelector('.background');
    image.src="images/bg-header-desktop.svg"
    imaage.classList.add('background')
  
      }
  
    }
  
    const cache = {
      main: document.querySelector('main'),
      array: []
    }
  
  

  
    const section = (arr) => {
      console.log(typeof arr, arr)
  
      arr.map((item, index) => {
  
        let language = item.languages;
        let languageHolder = "";
        language.map((item, index) => {
          languageHolder += `<span data-language=${item} class="filterSpan" onclick="app.filter('language')"> ${item}</span>`
  
        })
  
        cache.main.innerHTML +=
  
          `<section data-role=${item.role} data-level=${item.level} data-languages=${item.role}" data-tools=${item.languages}>
          <div class="column1" >
            <div class="logo" data-id=${item.id}>
                <embed src=${item.logo}>
            </div>
            <div class="title-info">
              <ul class="job-description top">
                <li class="company">${item.company} </li>
                <li class = ${item.new ? 'new' : 'blank'}> ${item.new?'News':""}</li>
                <li class = ${item.featured ? 'featured' : 'blank'}>${item.featured ? 'Feature':""}</li>
              </ul>
              <h2>${item.position}</h2>
              <ul class= "job-description bottom">
                <li> ${item.postedAt}</li>
                <li> ${item.contract}</li>
                <li>${item.location}</li>
            </ul>
       </div>
       </div>
       <div class="column2">
       <span class="filterSpan" onclick="app.filter('role')" data-role=${item.role}>${item.role}</span>
       <span class="filterSpan" onclick="app.filter('level')" data-level=${item.level}>${item.level} </span>
        ${languageHolder}
       </div>
        </section>`
  
      })
  
    }
  

  
    const filterArr = (attr, xx) => {
      cache.main.innerHTML = "" 
      let dataAttribute = event.target.dataset[attr];
      console.log(event.target.dataset[attr])
  
  
      let role = cache.array.filter((item, index) => item.role == dataAttribute) 
      let level = cache.array.filter((item, index) => item.level == dataAttribute)
      let languages = cache.array.filter((item, index) => {
        let test = item.languages;
        return test.includes(dataAttribute);
      })
  
  
  
  
      switch (attr) {
        case 'role':
          section(role);
          break;
          case "level":
            section(level);
          break;
          case "language":
            section(languages)
            default:
  
      }
  
    }
  
  
    return {
  
      init: () => {
  
        ajax()
  

      },
      filter: (attr) => {
        filterArr(attr)
  
      }
  
    }
  
  
  })();
  
  
  app.init()