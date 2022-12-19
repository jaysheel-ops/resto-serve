const supabase = require("./supabase");
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
