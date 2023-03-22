var flags = [];

function loadFlags()
{
    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            for (let obj of data)
            {
                let countryName = obj['name']['common'];
                let population = obj['population'].toLocaleString('en-US');
                let flag = obj['flags']['png'];

                flags.push({countryName, flag, population});
            }

            generatePage(flags);
        });
}

function generatePage(flagsArr)
{
    let flagSection = document.getElementById('flags-section');

    flagsArr.forEach((flagObj) => {
        console.log(flagObj);

        let flagContainer = document.createElement('div');

        let countryName = flagObj['countryName'];
        let countryFlag = flagObj['flag'];
        let countryPopulation = flagObj['population'];

        flagContainer.innerHTML += 
            `<b>${countryName}</b>
             <img src=${countryFlag} width='150' height='180'>
             <p>Population of ${countryName}: ${countryPopulation}</p>`

        flagSection.appendChild(flagContainer);
    });
}