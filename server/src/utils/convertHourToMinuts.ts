export default function convertHourToMinuts(time:string){
    const [hour, minutes] = time.split(':').map(Number);
    const timeImMinutes = (hour * 60) + minutes;
    return timeImMinutes;
}