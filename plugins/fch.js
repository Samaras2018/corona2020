
//     var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch("https://api.covid19api.com/summary", requestOptions)
//     .then(response => response.json())
//     .then(result => {
      
//         // this.$store.commit('todos/add', e.target.value)


//     })
//     .catch(error => console.log('error', error));


export default async context => {

    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        
            const dataInit = await fetch("https://api.covid19api.com/summary", requestOptions)
    
            const timeseries = await fetch(
              "https://pomber.github.io/covid19/timeseries.json",
              requestOptions
            );

            const z = await timeseries.json()
            const data =  await dataInit.json()

    //         const timeseriesCollected = Object.entries(z).map( item => item[1].map(inner => inner.confirmed) ) 
            
    // console.log(Object.entries(z))
    // console.log(Object.values(timeseriesCollected).map( (item, ix , arr) => { if(ix > item.length) return ; return item[ix] }).reduce( (red , cur) => red + cur ))




            function sum(a, b) {
              return a.map((v, i) => v + (b[i] || 0))
            }

            const result = Object.values(z).map( item => item.flatMap( itm => [itm.confirmed])).reduce((a, b) => a.length > b.length ? sum(a, b) : sum(b, a))
            

            console.log(result)

            




            const totalCases = await context.store.dispatch("setCases" , data.Countries.map(item => item.TotalConfirmed).reduce((red , cur) => red + cur) )
            const totalRecovered = await context.store.dispatch("setRecovered" , data.Countries.map(item => item.TotalRecovered).reduce((red , cur) => red + cur) )
            const totalDeath = await context.store.dispatch("setDeath" , data.Countries.map(item => item.TotalDeaths).reduce((red , cur) => red + cur) )

            const dataSeries = await context.store.dispatch("setDataSeries" , result )


            // return [totalCases, totalRecovered, totalDeath];
  };
