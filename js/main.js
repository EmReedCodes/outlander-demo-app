document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const outlanderName = document.querySelector('input').value
    try {
        const response = await fetch(`https://outlander-char-api.herokuapp.com/api/${outlanderName}` )
        const data = await response.json()
        console.log(data)
        let nameOccupation = data.occupation.join(', ')
        // let featuresInfo = data.features
        // let outlanderFeat = Object.values(featuresInfo)
        // const outlanderData = new outlanderInfo(data.name, data.birthDate, data.birthPlace, data.features, data.occupation, data.quote, data.image)

        document.querySelector('img').src = data.image
        document.querySelector('.quote').innerText = `"${data.quote}"`
        document.querySelector('h2').innerText = data.name
        document.querySelector('.birthLocation').innerText = `Born: ${data.birthPlace}`
        document.querySelector('.birthday').innerText = `Birthday: ${data.birthDate}`
        document.querySelector('.occupation').innerText = `${data.name}'s occupations have been ${nameOccupation}.`

        //todo outlander features 
        // for(let i = 0; i < outlanderFeat.length; i++){ //for each trait
            
        //     const li = document.createElement('li') //create li
        //     li.classList.add('clear')
        //     li.innerText = outlanderFeat(i) //display the trait here
        //     document.querySelector('ul').appendChild(li)//append the li to ul
        // }
    

    } catch(error) {
        console.log(error)
    }
}

// class outlanderInfo {
//     constructor(name, birthDate, birthPlace, features, occupation, quote, image){
//         this.name = name;
//         this.birthDate = birthDate;
//         this.birthPlace = birthPlace;
//         this.features = features;
//         this.occupation = occupation;
//         this.quote = quote; //can make it true or false!
//         this.iamge = image; //why wasnt the pokemon suitable will be a lot of reasons so letting it be an empty api
//         this.featuresList = []; //drop from get types into here
//     }
//     getFeatures(){
//         for(const property of this.features){
//             this.featuresList.push(property.features)
//         }
//     }
// }