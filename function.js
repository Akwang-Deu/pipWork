class Doctor{
        constructor(name,skills){
                this.name=name,
                this.skills=skills;
                this.availability=[]
        }
        addavailability(date,time){
                const available={date:date,time:time}
                this.availability.push(availability)
        
        }
}
class Patient{
        constructor(name,age,condition,){
                this.name=name,
                this.age=age,
                this.condition=condition

        }
}
class Appointment{
        constructor (doctor,patient,date){
                this.doctor=doctor,
                this.patient=patient,
                this.date=date     
        }
       
}
function bookAppointment(doctor,Patient){

        const availableDate=doctor.available.filter(date=>Patient.condition.includes(date));
        if(availableDate.length>0){
                const appointmentDate=availableDate[0];
                const appointment=new Appointment(doctor,Patient,appointmentDate);
                console.log(`${Patient.name}booked appointment with ${doctor.namer} on ${appointmentDate}`);
                return appointment;
        }
        else{
                console.log("Doctor not available at the moment");
        }
        
}
const Akwang=new Doctor('Dr.Akwang','Optician',['13/3/2024','26/3/2004','4/4/2024']);
const PatientJoy=new Patient('13/3/2024');
const appointment=bookAppointment(Akwang,PatientJoy);


                                
