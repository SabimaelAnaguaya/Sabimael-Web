const d = document;
export default function(){
    const $date = d.querySelector('.current-date'),
        currentDate = new Date();

    const getNameDay=(day)=>{
        switch (day) {
            case 0: return 'Sunday'; break;
            case 1: return 'Monday'; break;
            case 2: return 'Tuesday'; break;
            case 3: return 'Wednesday'; break;
            case 4: return 'Thursday'; break;
            case 5: return 'Friday'; break;
            case 6: return 'Saturday'; break;     
            default: break;
        }
    }

    $date.innerHTML = `${getNameDay(currentDate.getDay())} ${currentDate.toLocaleDateString()}`
    
}