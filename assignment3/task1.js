const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

const statesConsonant = statesOfIndia.filter( state => {
    let ch = state.charAt(0);
    switch(ch){
        case 'A':
            break;
        case 'E':
            break;
        case 'I':
            break;
        case 'O':
            break;
        case 'U':
            break;
        default:
            return state;
    }
});

console.log(statesConsonant);