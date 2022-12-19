function getUser({id=null, email=null}) {
    let data = 1
    let error = 2;
    return {data, error};
}

const email = "somemail"
// getUser({ email:"firstemail"});
// getUser({ id: null,email:"someemail"});
// getUser({id:1, email:null});
const {data, error} = getUser({email});
