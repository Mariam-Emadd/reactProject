export const Validate = (data , type) =>{
    const Errors = {}

// *----------------------------------------------------------------------------------
    if(!FormData.email){
        Errors.email = "email is validate"
    }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        Errors.email = "email is not true"
    }else{
        delete Errors.email
    }
// *----------------------------------------------------------------------------------
    if(!FormData.pasword){
        Errors.pasword = "password is validate"
    }else if (data.pasword.length < 6){
        Errors.pasword = " lenght is 6 charecter or more"
    }else {
        delete Errors.pasword;
    }

// *----------------------------------------------------------------------------------        
if(type === "signUp"){

// *----------------------------------------------------------------------------------
    if(!FormData.name.trim()){
        Errors.name = "name is validate"
    }else{
        delete Errors.name
    }
// *----------------------------------------------------------------------------------
    if(!FormData.confirmPasword){
        Errors.confirmPasword ="please checked"
    }else if (data.confirmPasword !== data.pasword){
        Errors.confirmpasword = "password do not match"
    }else {
        delete Errors.confirmpasword
    }
// *----------------------------------------------------------------------------------
    if(FormData.inAccepted){
        delete Errors.inAccepted
    }else {
        Errors.inAccepted = "pls accept our regularized"
    }
}
    return Errors
}