// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {      // key is value which i check everytime
    case 1:
        console.log("january");
        
        break;
            case 2:
        console.log("feb");
        
        break;
            case 3:
        console.log("mar");  // if we remove the break then the other cases execute except default
        
        break;
            case 4:
        console.log("apr");
        
        break;

    default:
        console.log("default");
        
        break;
}