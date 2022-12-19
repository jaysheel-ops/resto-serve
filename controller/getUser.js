const {supabase} = require("./supabase");

const getUser = async ({id = null, email = null}) => {
    if(id !== null) {
        const { data: users, error } = await supabase.from('users').select('*')
        .eq('id', id);
        if(users.length !== 0){
            return users;
        }
        else {
            return null;
        }
    }
    else if(email !== null) {
        const { data: users, error } = await supabase.from('users').select('*')
        .eq('email', email);
        if(users.length !== 0){
            return users;
        }
        else {
            return null;
        }
    } else {
        return null;
    }
    
}
exports.getUser = getUser;