/* Common JS import */
const {createClient} = require("@supabase/supabase-js");
require("dotenv").config();



const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// exports.getUsers = async function getUsers() {
//     const { data: users, error } = await supabase.from('users').select('*')
//     return users;
// }

const getUsers = async () => {
    const { data: users, error } = await supabase.from('users').select('*')
    return users;
}

exports.getUsers = getUsers;