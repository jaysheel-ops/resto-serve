const {supabase} = require("./supabase");
const {getUser} = require("./getUser");
const addUser = async ({name, email, password}) => {

    const user = await getUser({email:email}).then(user => {
        
        return user;
    })
    
    if(!user) {
        const { data, error } = await supabase
        .from('users')
        .insert([
            {name, email, password },
        ])

        return true;
    } else {
        return false;
    }     
}
exports.addUser = addUser;