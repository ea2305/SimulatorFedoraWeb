/**
 * Get currently time
 * author Elihu Cruz Albores
 * version 1.2
 */

function Clock(){
    //Month of the year
    this.month = ['January','February','March','April','May','June','July','August','September','Octuber','November','December'];
    // current day
    this.days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    this.time = new Date();
    this.actMonth = this.time.getMonth();
    this.day =  this.time.getDate();
    this.act_day = this.time.getDay();
    this.year = this.time.getFullYear();
    this.formatTime = this.days[this.act_day] + " " + this.day + " " + this.month[this.actMonth] + " " + this.year;
    return this.formatTime;
}
