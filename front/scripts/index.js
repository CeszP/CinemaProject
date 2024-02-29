function generateDivs(data){
    const primeCard = document.getElementById('prime--card')
    const newDiv  = document.createElement('div')
    
    // PRIME FILM
    const mayorRate = data.reduce((max, actual) => {
      return actual.rate > max.rate ? actual : max
    },data[0])

    newDiv.classList.add('prime--container')
    newDiv.innerHTML = `
    <a href="#"><img src="${mayorRate.poster}" alt="" class="prime--img"></a>
    <div class="prime--info--container">
      <h3 class="prime--title">${mayorRate.title}</h3>
      <label class="prime--year">${mayorRate.year}</label>
      <h4>Director: ${mayorRate.director}</h4>
      <h4>Duration: ${mayorRate.duration}</h4>
      <h4>Genre: ${mayorRate.genre}</h4>
      <div class="prime--rate--container">
        <label class="prime--rate">${mayorRate.rate}</label> <img class="rating--star" src="./assets/rating_star.png">
      </div>      
    </div>
    `
    primeCard.appendChild(newDiv)
    
    // ALL FILMS
    const container = document.getElementById('catalog--container')

    data.forEach(item => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('card')

        newDiv.innerHTML = `
        <a href=#>
          <img src="${item.poster}" alt="" class="card--img">
        </a>
        <div class="card--info--container">
          <h3 class="card--title">${item.title}</h3><label class="card--year">${item.year}</label>
          <h4>Director: <label>${item.director}</label></h4>
          <h4>Duration: <label>${item.duration}<label></h4>
          <h4>Genre: <label>${item.genre}</label></h4>
          <label class="card--rate">${item.rate}</label><img class="rating--star" src="./assets/rating_star.png">
        </div>
        `
        container.appendChild(newDiv)
    });
}
generateDivs(tempData)